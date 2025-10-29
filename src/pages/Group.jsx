import { buildAllEvents } from '@/flashcards';
import { useEffect } from 'react';
import { useState } from 'react';

function Group({ node }) {
  return (
    <div style={{ marginLeft: 20 }}>
      {node.meta && <h3>{node.meta.displayName}</h3>}
      {node.sets.map((set) => (
        <button
          key={set.id}
          onClick={async () => {
            const loaded = await set.load();
            console.log('Loaded cards for', loaded.meta?.displayName, loaded.cards);
          }}
        >
          {set.meta?.displayName || set.id}
        </button>
      ))}
      {Object.values(node.groups).map((child, idx) => (
        <Group key={idx} node={child} />
      ))}
    </div>
  );
}

export default function FlashcardBrowser() {
  const [eventTrees, setEventTrees] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    buildAllEvents()
      .then(setEventTrees)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!eventTrees) return <p>No events found</p>;

  console.log(JSON.stringify(eventTrees));

  return (
    <div>
      {Object.entries(eventTrees).map(([eventName, tree]) => (
        <Group key={eventName} node={tree} />
      ))}
    </div>
  );
}
