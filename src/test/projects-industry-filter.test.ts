import { describe, expect, it } from "vitest";
import {
  englishIndustries,
  matchesIndustry,
  portugueseIndustries,
  uniqueIndustries,
} from "@/pages/Projects";

describe("projects industry filter", () => {
  it("lists each industry once, in alphabetical order", () => {
    expect(uniqueIndustries(englishIndustries)).toEqual([
      "Finance",
      "Healthcare",
      "Technology",
    ]);
  });

  it("shows the industries of the language being viewed", () => {
    expect(uniqueIndustries(portugueseIndustries)).toEqual([
      "Finanças",
      "Saúde",
      "Tecnologia",
    ]);
  });

  it("shows every card while no industry is selected", () => {
    expect(matchesIndustry("Finance", "")).toBe(true);
    expect(matchesIndustry("", "")).toBe(true);
  });

  it("keeps only the cards of the selected industry", () => {
    expect(matchesIndustry("Finance", "Finance")).toBe(true);
    expect(matchesIndustry("Healthcare", "Finance")).toBe(false);
    expect(matchesIndustry("Technology", "Healthcare")).toBe(false);
  });

  it("hides the LinkedIn posts, which have no industry", () => {
    expect(matchesIndustry("", "Finance")).toBe(false);
  });
});
