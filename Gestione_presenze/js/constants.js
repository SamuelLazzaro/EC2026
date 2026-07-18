/**
 * Shared constants for the attendance form.
 * No logic here: only configuration and fixed data.
 */

/**
 * Google Apps Script Web App URL (must end with /exec).
 * Paste it here after deploying codice_apps_script.gs.
 * While the placeholder is still present the page runs in demo mode:
 * nothing is sent, the confirmation screen is shown locally.
 * @type {string}
 */
export const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbziDmuiep7xAd1Ja-dnxBTDCB54gdO4AUv8vdoHgEeJ3kshVu1zZyJzEG-7LbOqQZA/exec";

/**
 * Event days (ISO format YYYY-MM-DD), 19–26 July 2026.
 * @type {string[]}
 */
export const EVENT_DAYS = [
	"2026-07-19",
	"2026-07-20",
	"2026-07-21",
	"2026-07-22",
	"2026-07-23",
	"2026-07-24",
	"2026-07-25",
	"2026-07-26",
];

/**
 * Time slots selectable for each day.
 * `id` is what gets sent to the server; `label` is the Italian UI text.
 * @type {{id: string, label: string}[]}
 */
export const SLOTS = [
	{ id: "morning", label: "Mattina" },
	{ id: "afternoon", label: "Pomeriggio" },
	{ id: "full", label: "Tutto il giorno" },
];
