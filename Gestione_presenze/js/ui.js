/**
 * DOM layer: builds and updates the page elements.
 * Functions here receive data/callbacks and touch the DOM; they never call
 * the API directly and hold no application state (state lives in main.js).
 */

import { SLOTS } from "./constants.js";
import { formatDayLabel } from "./utils.js";

/**
 * One button per event day, kept to sync the active state.
 * @type {Map<string, HTMLButtonElement>}
 */
const g_dayButtons = new Map();

/**
 * The three time-slot buttons (morning / afternoon / full).
 * @type {Map<string, HTMLButtonElement>}
 */
const g_slotButtons = new Map();

/**
 * Builds one date button per event day inside `containerEl`.
 * @param {HTMLElement} containerEl the #daysGrid element
 * @param {string[]} isoDays event days in ISO format
 * @param {(iso: string) => void} onDayPick callback wired by main.js
 */
export function buildDayButtons(containerEl, isoDays, onDayPick) {
	isoDays.forEach(isoDay => {
		const dayButton = document.createElement("button");
		dayButton.type = "button";
		dayButton.className = "day-btn";
		dayButton.textContent = formatDayLabel(isoDay);
		dayButton.setAttribute("aria-pressed", "false");
		dayButton.addEventListener("click", () => onDayPick(isoDay));
		containerEl.appendChild(dayButton);
		g_dayButtons.set(isoDay, dayButton);
	});
}

/**
 * Builds the single row with the three time-slot buttons.
 * @param {HTMLElement} containerEl the #slotRow element
 * @param {(slotId: string) => void} onSlotPick callback wired by main.js
 */
export function buildSlotButtons(containerEl, onSlotPick) {
	SLOTS.forEach(slot => {
		const slotButton = document.createElement("button");
		slotButton.type = "button";
		slotButton.className = "slot-btn";
		slotButton.textContent = slot.label;
		slotButton.setAttribute("aria-pressed", "false");
		slotButton.addEventListener("click", () => onSlotPick(slot.id));
		containerEl.appendChild(slotButton);
		g_slotButtons.set(slot.id, slotButton);
	});
}

/**
 * Syncs the date buttons and the slot buttons with the current selection,
 * and updates the summary text in the sticky footer bar.
 * @param {string|null} selectedDay ISO day currently selected, or null
 * @param {string|null} selectedSlot slot id currently selected, or null
 */
export function refreshSelection(selectedDay, selectedSlot) {
	g_dayButtons.forEach((button, isoDay) => {
		const isActive = isoDay === selectedDay;
		button.classList.toggle("active", isActive);
		button.setAttribute("aria-pressed", String(isActive));
	});
	g_slotButtons.forEach((button, slotId) => {
		const isActive = slotId === selectedSlot;
		button.classList.toggle("active", isActive);
		button.setAttribute("aria-pressed", String(isActive));
	});

	const infoEl = document.getElementById("selectionInfo");
	if (selectedDay && selectedSlot) {
		infoEl.innerHTML =
			`<b>${formatDayLabel(selectedDay)}</b> · ${slotLabel(selectedSlot)}`;
	} else if (selectedDay) {
		infoEl.innerHTML = `<b>${formatDayLabel(selectedDay)}</b> · scegli la fascia`;
	} else {
		infoEl.textContent = "Nessun giorno selezionato";
	}
}

/**
 * Shows an error message above the submit bar.
 * @param {string} message Italian text shown to the user
 */
export function showError(message) {
	const errBox = document.getElementById("errBox");
	errBox.textContent = message;
	errBox.style.display = "block";
}

/** Hides the error message box. */
export function hideError() {
	document.getElementById("errBox").style.display = "none";
}

/**
 * Enables/disables the submit button (used while the form is incomplete).
 * @param {boolean} isEnabled true when every required field is filled
 */
export function setSubmitEnabled(isEnabled) {
	document.getElementById("submitBtn").disabled = !isEnabled;
}

/**
 * Toggles the submit button between idle and "sending" state.
 * @param {boolean} isSending true while the request is in flight
 */
export function setSubmitting(isSending) {
	const submitButton = document.getElementById("submitBtn");
	submitButton.disabled = isSending;
	submitButton.textContent = isSending ? "Invio…" : "Invia presenze";
}

/**
 * Hides the form and shows the confirmation screen with a summary.
 * @param {{firstName: string, lastName: string,
 *          date: string, slot: string}} payload data just sent (one day)
 * @param {boolean} isDemo true when nothing was actually sent (demo mode)
 */
export function showDone(payload, isDemo) {
	const rows = [
		summaryRow("Nome", payload.firstName),
		summaryRow("Cognome", payload.lastName),
		summaryRow("Giorno", formatDayLabel(payload.date)),
		summaryRow("Fascia", slotLabel(payload.slot)),
	];
	document.getElementById("doneSummary").innerHTML = rows.join("");

	if (isDemo) {
		document.getElementById("doneText").textContent =
			"Anteprima demo — imposta SCRIPT_URL in js/constants.js per registrare le presenze sul Google Sheet.";
	}

	document.getElementById("formArea").style.display = "none";
	document.getElementById("doneScreen").classList.add("show");
	window.scrollTo({ top: 0, behavior: "smooth" });
}

/** Returns from the confirmation screen to the form. */
export function showForm() {
	document.getElementById("doneScreen").classList.remove("show");
	document.getElementById("formArea").style.display = "";
	setSubmitting(false);
}

/**
 * Returns the Italian label of a slot id (falls back to the id itself).
 * @param {string} slotId "morning" | "afternoon" | "full"
 * @returns {string}
 */
function slotLabel(slotId) {
	const slot = SLOTS.find(candidate => candidate.id === slotId);
	return slot ? slot.label : slotId;
}

/**
 * Builds one summary line (label + value) as HTML.
 * @param {string} label left column text
 * @param {string} value right column text
 * @returns {string} HTML for one .row element
 */
function summaryRow(label, value) {
	return `<div class="row"><span>${escapeHtml(label)}</span><span>${escapeHtml(value)}</span></div>`;
}

/**
 * Escapes HTML special characters so user input is rendered as plain text.
 * @param {string} text raw text
 * @returns {string} HTML-safe text
 */
function escapeHtml(text) {
	return String(text)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
}
