import { EventKeys } from "./eventKeys";

// IMPORTANT: predefine top-level events for Vite's static glob
const eventModules = {
  [EventKeys.AMAZING_ARTHROPODS]: import.meta.glob('./amazing-arthropods/**/*.js'),
  [EventKeys.ENTOMOLOGY]: import.meta.glob('./entomology/**/*.js'),
};

function createTreeNode() {
  return { meta: null, sets: [], groups: {}, hidden: false };
}

function getPathParts(path) {
  return path.replace(/^\.\/|\.js$/g, '').split('/');
}

async function buildFlashcardTree(eventName) {
  const modules = eventModules[eventName];
  if (!modules) return null;

  const root = createTreeNode();


for (const [path, loader] of Object.entries(modules)) {
  const parts = getPathParts(path);           // ["amazing-arthropods", "_event"]
  const filename = parts.at(-1);              // "_event"
  const groupParts = parts.slice(1, -1);      // <-- ignore first part (event folder)

  const mod = await loader();

  // 🟢 _event.js applies to root
  if (filename === '_event') {
    root.meta = mod.meta || null;
    root.hidden = !!mod.meta?.hidden;
    continue;
  }

  // 🟣 Traverse subgroups
  let current = root;
  for (const part of groupParts) {
    if (!current.groups[part]) current.groups[part] = createTreeNode();
    current = current.groups[part];
  }

  // 🟡 _group.js or sets
  if (filename === '_group') {
    current.meta = mod.meta || null;
    current.hidden = !!mod.meta?.hidden;
  } else if (!mod.meta?.hidden) {
    current.sets.push({
      id: filename,
      meta: mod.meta,
      load: async () => ({ id: filename, meta: mod.meta, cards: mod.default }),
    });
  }
}


  // 🧹 Prune hidden/empty groups
  function prune(node) {
    for (const [key, group] of Object.entries(node.groups || {})) {
      prune(group);
      if (
        group.hidden ||
        (!group.meta && group.sets.length === 0 && Object.keys(group.groups || {}).length === 0)
      ) {
        delete node.groups[key];
      }
    }
  }
  prune(root);

  if (root.hidden) return null;
  return root;
}

export async function buildAllEvents() {
  const eventTrees = {};
  for (const eventName of Object.keys(eventModules)) {
    const tree = await buildFlashcardTree(eventName);
    if (tree) eventTrees[eventName] = tree;
  }
  return eventTrees;
}