export const siteUrl = new URL("https://books.durood.live");

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}
