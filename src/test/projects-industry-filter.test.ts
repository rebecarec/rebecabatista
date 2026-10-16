import { describe, expect, it } from "vitest";
import {
  INDUSTRY_NAMES,
  matchesIndustry,
  projectIndustryKeys,
  uniqueIndustries,
} from "@/pages/Projects";

describe("projects industry filter", () => {
  it("lists each industry once, in alphabetical order", () => {
    expect(uniqueIndustries(projectIndustryKeys)).toEqual([
      "finance",
      "healthcare",
      "technology",
    ]);
  });

  it("names the industries in the language being viewed", () => {
    const keys = uniqueIndustries(projectIndustryKeys);
    expect(keys.map((key) => INDUSTRY_NAMES.en[key])).toEqual([
      "Finance",
      "Healthcare",
      "Technology",
    ]);
    expect(keys.map((key) => INDUSTRY_NAMES.pt[key])).toEqual([
      "Finanças",
      "Saúde",
      "Tecnologia",
    ]);
  });

  it("shows every card while no industry is selected", () => {
    expect(matchesIndustry("finance", "")).toBe(true);
    expect(matchesIndustry("", "")).toBe(true);
  });

  it("keeps only the cards of the selected industry", () => {
    expect(matchesIndustry("finance", "finance")).toBe(true);
    expect(matchesIndustry("healthcare", "finance")).toBe(false);
    expect(matchesIndustry("technology", "healthcare")).toBe(false);
  });

  it("filters by a language-neutral key, not by the translated name", () => {
    expect(matchesIndustry("technology", "technology")).toBe(true);
    expect(matchesIndustry("tecnologia", "technology")).toBe(false);
  });

  it("hides the LinkedIn posts, which have no industry", () => {
    expect(matchesIndustry("", "finance")).toBe(false);
  });
});
