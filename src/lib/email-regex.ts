/**
 *
 * @param email - The email address to validate
 * @description Validates the format of an email address using a regular expression.
 * The regex checks for a basic structure of an email, ensuring it contains characters before and after the '@' symbol, and a domain with at least one '.' character.
 * @returns {boolean} - Returns true if the email format is valid, otherwise false.
 */

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
