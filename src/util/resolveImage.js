export async function resolveImage(name) {
  const images = import.meta.glob("../assets/images/*", {
    import: "default",
  });
  const map = Object.fromEntries(
    Object.entries(images).map(([p, u]) => [p.split("/").pop(), u])
  );
  if (!map[name]) return null;

  const url = await map[name](); // <- call the function to get the module default export
  return url;
}