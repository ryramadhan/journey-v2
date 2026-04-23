/**
 * Join class names, skipping falsy values.
 * @param {...(string | undefined | null | false)} parts
 * @returns {string}
 */
export function classNames(...parts) {
  return parts.filter(Boolean).join(' ');
}
