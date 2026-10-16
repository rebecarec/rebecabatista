import { describe, expect, it } from "vitest";
import {
  FEED_DATES,
  matchesDate,
  matchesKeyword,
  projectDates,
  uniqueDates,
} from "@/pages/Projects";

const pageDates = uniqueDates([...projectDates, ...Object.values(FEED_DATES)]);

describe("projects date filter", () => {
  it("lists every month/year on the page, newest first, without repeats", () => {
    expect(pageDates).toEqual([
      "10/2026",
      "08/2026",
      "04/2026",
      "03/2026",
      "01/2026",
      "11/2025",
    ]);
  });

  it("shows every card while no month is selected", () => {
    expect(matchesDate("11/2025", "")).toBe(true);
    expect(matchesDate("10/2026", "")).toBe(true);
  });

  it("keeps only the cards of the selected month/year", () => {
    expect(matchesDate("10/2026", "10/2026")).toBe(true);
    expect(matchesDate("08/2026", "10/2026")).toBe(false);
    expect(matchesDate("11/2025", "11/2025")).toBe(true);
  });

  it("does not mix up two months of the same year", () => {
    expect(matchesDate("03/2026", "04/2026")).toBe(false);
  });

  it("combines with the keyword search", () => {
    const cards = [
      { date: "11/2025", text: "Software optimization for data-centers" },
      { date: "04/2026", text: "Engaging gig workers with M&T capabilities" },
      { date: "11/2025", text: "Autodesk research on data-centers" },
    ];
    const hits = cards.filter(
      (card) =>
        matchesDate(card.date, "11/2025") && matchesKeyword("data-centers", [card.text]),
    );
    expect(hits.map((card) => card.text)).toEqual([
      "Software optimization for data-centers",
      "Autodesk research on data-centers",
    ]);
  });
});
