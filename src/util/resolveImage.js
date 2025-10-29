export function resolveImage(name) {
  const images = import.meta.glob("../assets/images/*", {
    import: "default",
  });
  const map = Object.fromEntries(
    Object.entries(images).map(([p, u]) => [p.split("/").pop(), u])
  );
  return map[name];
}