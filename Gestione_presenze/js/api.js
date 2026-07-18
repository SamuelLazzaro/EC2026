/**
 * HTTP layer: the only file that talks to the Apps Script Web App.
 */

import { SCRIPT_URL } from "./constants.js";

/**
 * True while SCRIPT_URL still contains the placeholder, i.e. the Web App
 * has not been deployed/configured yet. In demo mode nothing is sent.
 * @returns {boolean}
 */
export function isDemoMode() {
	return SCRIPT_URL.indexOf("INCOLLA") !== -1;
}

/**
 * Sends the attendance payload to the Apps Script Web App.
 *
 * The request uses Content-Type text/plain: it is a CORS "simple request",
 * so the browser skips the preflight OPTIONS call that Apps Script Web Apps
 * do not answer. The body is still JSON, parsed server-side in doPost.
 *
 * @param {{
 *   firstName: string,
 *   lastName: string,
 *   date: string,
 *   slot: string,
 *   notes: string,
 *   website: string
 * }} payload attendance for one day (website is the honeypot, always empty)
 * @returns {Promise<void>} resolves on success, throws Error otherwise
 */
export async function sendAttendance(payload) {
	const response = await fetch(SCRIPT_URL, {
		method: "POST",
		headers: { "Content-Type": "text/plain;charset=utf-8" },
		body: JSON.stringify(payload),
		redirect: "follow",
	});
	const result = await response.json();
	if (result.status !== "success") {
		throw new Error(result.message || "Server error");
	}
}
