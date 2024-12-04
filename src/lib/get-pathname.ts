/**
 * Get the pathname from a path
 * @param {string} path - The path to get the pathname from
 * @returns {string} - The pathname
 *
 * @example
 * GetPathname("/path") // "Path"
 * GetPathname("/path/1") // "Path 1"
 *
 */

export function GetPathname(path: string): string {
  return path
    .split("/")
    .filter((p) => p !== "")
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join(" ")
}
