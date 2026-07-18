/**
 * Entry point: holds the selection state, wires the UI callbacks and
 * handles form validation + submit.
 *
 * One submission covers ONE day (like meal_ordering). The page shows one
 * button per date plus a single row with the three time slots:
 *  - the date buttons are an exclusive choice (tapping the active one
 *    deselects it);
 *  - the slot buttons work the same way: exclusive choice, nothing
 *    pre-selected, tapping the active one deselects it.
 * Submit is blocked with an error until name, surname, a date and a time
 * slot are all provided. After a submission the user can send another day
 * via the "again" button.
 */

import { EVENT_DAYS } from "./constants.js";
import { normalizeName } from "./utils.js";
import { isDemoMode, sendAttendance } from "./api.js";
import {
	buildDayButtons, buildSlotButtons, refreshSelection,
	showError, hideError, setSubmitEnabled, setSubmitting, showDone, showForm,
} from "./ui.js";

/**
 * Currently selected day (ISO format) or null when nothing is selected.
 * @type {string|null}
 */
let g_selectedDay = null;

/**
 * Selected time slot ("morning" | "afternoon" | "full") or null when
 * nothing is selected.
 * @type {string|null}
 */
let g_selectedSlot = null;

/**
 * True when every required field is filled: non-empty name and surname,
 * a selected day and a selected time slot.
 * @returns {boolean}
 */
function isFormComplete() {
	const firstName = normalizeName(document.getElementById("firstName").value);
	const lastName = normalizeName(document.getElementById("lastName").value);
	return Boolean(firstName && lastName && g_selectedDay && g_selectedSlot);
}

/** Enables the submit button only while the form is complete. */
function updateSubmitState() {
	setSubmitEnabled(isFormComplete());
}

/**
 * Selects a day; tapping the already-active day deselects it.
 * @param {string} isoDay day in YYYY-MM-DD format
 */
function pickDay(isoDay) {
	g_selectedDay = (g_selectedDay === isoDay) ? null : isoDay;
	refreshSelection(g_selectedDay, g_selectedSlot);
	updateSubmitState();
}

/**
 * Selects a time slot; tapping the already-active slot deselects it.
 * @param {string} slotId "morning" | "afternoon" | "full"
 */
function pickSlot(slotId) {
	g_selectedSlot = (g_selectedSlot === slotId) ? null : slotId;
	refreshSelection(g_selectedDay, g_selectedSlot);
	updateSubmitState();
}

/** Validates the form and sends the attendance to the Web App. */
async function submit() {
	hideError();

	const firstName = normalizeName(document.getElementById("firstName").value);
	const lastName = normalizeName(document.getElementById("lastName").value);
	if (!firstName || !lastName) {
		showError("Inserisci nome e cognome prima di inviare.");
		return;
	}
	if (!g_selectedDay) {
		showError("Seleziona il giorno di presenza.");
		return;
	}
	if (!g_selectedSlot) {
		showError("Seleziona la fascia oraria (mattina, pomeriggio o tutto il giorno).");
		return;
	}
	// Honeypot filled -> bot: silently drop.
	if (document.getElementById("website").value) {
		return;
	}

	const payload = {
		firstName,
		lastName,
		date: g_selectedDay,
		slot: g_selectedSlot,
		notes: document.getElementById("notes").value.trim(),
		website: "",
	};

	if (isDemoMode()) {
		showDone(payload, true);
		return;
	}

	setSubmitting(true);
	try {
		await sendAttendance(payload);
		showDone(payload, false);
	} catch (error) {
		setSubmitting(false);
		showError(`Impossibile inviare la presenza. Controlla la connessione e riprova. (${error.message})`);
	}
}

/**
 * "Send another day": back to the form keeping name and surname, with a
 * clean day/slot selection and empty notes (notes are per-day).
 */
function startNewSubmission() {
	g_selectedDay = null;
	g_selectedSlot = null;
	refreshSelection(g_selectedDay, g_selectedSlot);
	document.getElementById("notes").value = "";
	showForm();
	// showForm/setSubmitting re-enable the button: lock it again because
	// the day/slot selection has just been cleared.
	updateSubmitState();
}

/* ---- Init ---- */
buildDayButtons(document.getElementById("daysGrid"), EVENT_DAYS, pickDay);
buildSlotButtons(document.getElementById("slotRow"), pickSlot);
refreshSelection(g_selectedDay, g_selectedSlot);
updateSubmitState();

document.getElementById("firstName").addEventListener("input", updateSubmitState);
document.getElementById("lastName").addEventListener("input", updateSubmitState);
document.getElementById("submitBtn").addEventListener("click", submit);
document.getElementById("againBtn").addEventListener("click", startNewSubmission);
