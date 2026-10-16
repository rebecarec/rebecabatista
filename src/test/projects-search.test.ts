import { describe, expect, it } from "vitest";
import { matchesKeyword } from "@/pages/Projects";

const autodesk = [
  "PROJETO · 11/2025 · Autodesk · Tecnologia",
  "Otimização de software para data centers",
  "Quando os canteiros de obras têm novas necessidades, quão bem uma ferramenta líder consegue evoluir?",
];

const mtBank = [
  "PROJECT · 04/2026 · M&T Bank · Finance",
  "Engaging gig workers with M&T capabilities",
  "In the U.S., it is projected that by 2028, the population of gig workers will be more than half of the population.",
];

describe("projects search", () => {
  it("shows everything for an empty or whitespace query", () => {
    expect(matchesKeyword("", autodesk)).toBe(true);
    expect(matchesKeyword("   ", autodesk)).toBe(true);
  });

  it("matches a keyword ignoring case", () => {
    expect(matchesKeyword("AUTODESK", autodesk)).toBe(true);
  });

  it("matches ignoring accents typed by the visitor", () => {
    expect(matchesKeyword("otimizacao", autodesk)).toBe(true);
    expect(matchesKeyword("Otimização", autodesk)).toBe(true);
  });

  it("requires every keyword to be present", () => {
    expect(matchesKeyword("gig workers", mtBank)).toBe(true);
    expect(matchesKeyword("gig healthcare", mtBank)).toBe(false);
  });

  it("rejects a keyword that is not in the card", () => {
    expect(matchesKeyword("planet fitness", autodesk)).toBe(false);
  });
});
