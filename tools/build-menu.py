#!/usr/bin/env python3
"""
build-menu.py — Generate js/menu-data.js from the two canteen-menu Excel files.

WHAT
    Reads the daily canteen menu (managed by Sagre Prelibate) from the Italian
    and English spreadsheets and writes a single JS data file consumed by the
    website (js/menu-data.js).

WHY
    The menu is a large, changeable table (11 days x 3 lunch + 3 dinner options).
    Keeping it out of index.html and regenerating a data file on every update is
    far easier and less error-prone than editing markup by hand. Only Italian and
    English exist in the source; the site falls back to English for the other
    languages, so we only store `it` and `en`.

USAGE
    python tools/build-menu.py
    (run from the repo root; requires `openpyxl`)

INPUT LAYOUT (both files, sheet "Menu")
    row 1 : title            (ignored)
    row 2 : column headers   (ignored)
    rows 3..N : one day each
        col A : date label ("16-lug" / "16 Jul")   -> parsed for the day number
        col B..D : lunch  options 1, 2, 3(vegetarian)
        col E..G : dinner options 1, 2, 3(vegetarian)
    A dish cell is a multi-line string (first course / main / side); we split it
    into an array of trimmed, non-empty lines. An empty cell means "no option"
    (e.g. the arrival day has no lunch at all).
"""

import json
import re
from pathlib import Path

import openpyxl

# All championship days fall in July 2026; only the day number varies.
EVENT_YEAR = 2026
EVENT_MONTH = 7

REPO_ROOT = Path(__file__).resolve().parent.parent
IT_FILE = REPO_ROOT / "menu.xlsx"
EN_FILE = REPO_ROOT / "menu_english.xlsx"
OUTPUT_FILE = REPO_ROOT / "js" / "menu-data.js"

# Column indices (0-based) inside each row tuple.
DATE_COL = 0
LUNCH_COLS = (1, 2, 3)
DINNER_COLS = (4, 5, 6)

# Data rows start after the title row and the header row.
FIRST_DATA_ROW_INDEX = 2


def split_dish(cell):
    """Split a multi-line dish cell into a list of trimmed, non-empty lines.

    Returns None when the cell is empty (no option served)."""
    if cell is None:
        return None
    lines = [line.strip() for line in str(cell).split("\n")]
    lines = [line for line in lines if line]
    return lines or None


def parse_day_number(date_cell):
    """Extract the leading day number from a label such as '16-lug' or '16 Jul'."""
    match = re.match(r"\s*(\d+)", str(date_cell))
    if not match:
        raise ValueError(f"Cannot parse day number from date cell: {date_cell!r}")
    return int(match.group(1))


def read_rows(xlsx_path):
    """Return the list of data rows (each a tuple of cell values) from a file."""
    workbook = openpyxl.load_workbook(xlsx_path, data_only=True)
    worksheet = workbook["Menu"]
    all_rows = list(worksheet.iter_rows(values_only=True))
    return all_rows[FIRST_DATA_ROW_INDEX:]


def build_menu():
    """Merge the Italian and English spreadsheets into the site data structure."""
    it_rows = read_rows(IT_FILE)
    en_rows = read_rows(EN_FILE)
    if len(it_rows) != len(en_rows):
        raise ValueError(
            f"Row count mismatch: {IT_FILE.name} has {len(it_rows)}, "
            f"{EN_FILE.name} has {len(en_rows)}"
        )

    days = []
    for it_row, en_row in zip(it_rows, en_rows):
        # Skip fully empty trailing rows, if any.
        if it_row[DATE_COL] is None:
            continue

        day_number = parse_day_number(it_row[DATE_COL])
        iso_date = f"{EVENT_YEAR:04d}-{EVENT_MONTH:02d}-{day_number:02d}"

        def build_meal(columns):
            """Build one meal (lunch or dinner) as a list of bilingual options.

            An empty cell becomes a null hole (None) so the position of the
            options after it is preserved. The website and the ordering form
            both key the vegetarian tag to the 3rd position, so a day that
            serves only option 1 and the vegetarian option 3 (e.g. a light
            lunch) must keep option 2's slot as None instead of shifting the
            vegetarian option into position 2. Trailing empty slots are dropped,
            and a meal with no options at all yields an empty list."""
            options = []
            for col in columns:
                it_lines = split_dish(it_row[col])
                en_lines = split_dish(en_row[col])
                # An option exists only if at least one language has content;
                # otherwise keep None as a placeholder for the empty position.
                if it_lines is None and en_lines is None:
                    options.append(None)
                else:
                    options.append({"it": it_lines or en_lines, "en": en_lines or it_lines})
            # Drop trailing empty slots; internal gaps (a missing middle
            # option) are kept so later options do not shift position.
            while options and options[-1] is None:
                options.pop()
            return options

        days.append({
            "date": iso_date,
            "lunch": build_meal(LUNCH_COLS),
            "dinner": build_meal(DINNER_COLS),
        })

    return days


def write_output(days):
    """Write the JS data file with a generated-file banner."""
    payload = json.dumps(days, ensure_ascii=False, indent=2)
    content = (
        "/* ═══════════════════════════════════════════════════════════\n"
        "   menu-data.js – Menù della mensa (a cura di Sagre Prelibate)\n"
        "\n"
        "   AUTO-GENERATED by tools/build-menu.py from menu.xlsx /\n"
        "   menu_english.xlsx. Do NOT edit by hand: update the Excel\n"
        "   files and re-run the script instead.\n"
        "\n"
        "   Each day: { date, lunch[], dinner[] }. Each meal option is\n"
        "   { it: [lines], en: [lines] } where the lines are the courses\n"
        "   (first course / main / side). Option index 2 is vegetarian.\n"
        "   ═══════════════════════════════════════════════════════════ */\n"
        "\n"
        f"const MENSA_MENU = {payload};\n"
    )
    OUTPUT_FILE.write_text(content, encoding="utf-8")


def main():
    days = build_menu()
    write_output(days)
    print(f"Wrote {OUTPUT_FILE.relative_to(REPO_ROOT)} ({len(days)} days)")


if __name__ == "__main__":
    main()
