/**
 * Pure helper functions (no DOM access, no state, no side effects).
 */

/**
 * Formats an ISO date ("2026-07-19") as an Italian label like "Dom 19 luglio".
 * The Date is built from the split parts (not from the ISO string) to avoid
 * the UTC-midnight shift that `new Date("YYYY-MM-DD")` introduces.
 * @param {string} isoDate date in YYYY-MM-DD format
 * @returns {string} localized label, e.g. "Dom 19 luglio"
 */
export function formatDayLabel(isoDate) {
	const [year, month, day] = isoDate.split("-").map(Number);
	const date = new Date(year, month - 1, day);
	const weekday = date.toLocaleDateString("it-IT", { weekday: "short" }).replace(".", "");
	const monthName = date.toLocaleDateString("it-IT", { month: "long" });
	const capitalizedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);
	return `${capitalizedWeekday} ${day} ${monthName}`;
}

/**
 * Normalizes a person name: trims and collapses internal whitespace.
 * @param {string} rawName value read from the input field
 * @returns {string} cleaned name (may be empty)
 */
export function normalizeName(rawName) {
	return String(rawName || "").trim().replace(/\s+/g, " ");
}
