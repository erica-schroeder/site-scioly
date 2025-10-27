export function getImageResolver(baseUrl) {
    return function resolveImage(fileName) {
        return new URL(`@/assets/images/${fileName}`, baseUrl).href;
    }
}