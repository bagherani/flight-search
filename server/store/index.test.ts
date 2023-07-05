import { beforeAll, beforeEach, describe, expect, test } from "bun:test";
import { has, get, set, clear } from "./";

beforeEach(() => {
  clear();
});

describe("has tests", () => {
  test("has(arg) should return false when entry not exists", () => {
    expect(has(Math.random().toFixed())).toBe(false);
  });

  test("has(arg) should return true when entry exists", () => {
    const key = "entry";
    set(key, {});
    expect(has(key)).toBe(true);
  });
});

describe("set tests", () => {
  test("set(args) should set entries", () => {
    const key = "entry";
    set(key, {});
    expect(has(key)).toBe(true);

    const key2 = "entry2";
    set(key2, {});
    expect(has(key2)).toBe(true);
  });
});

describe("get tests", () => {
  test("get(arg) should return the entry", () => {
    const key = "entry";
    const val = {};
    set(key, val);

    expect(get(key)).toBe(val);
  });
});
