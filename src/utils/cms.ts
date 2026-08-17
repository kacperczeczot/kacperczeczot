export const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * Zwraca prawidłowy URL dla zasobu z CMS / katalogu publicznego,
 * uwzględniając base URL projektu (np. GitHub Pages subpath).
 */
export function cmsImage(path?: string | null, fallback: string = ''): string {
  if (!path) return fallback;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
