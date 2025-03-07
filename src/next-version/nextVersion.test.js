import nextVersion from './nextVersion.js';

test("increments the last number", () => {
  expect(nextVersion("1.2.3")).toBe("1.2.4");
  expect(nextVersion("2.4")).toBe("2.5");
  expect(nextVersion("1.2.3.4.5.6.7.8")).toBe("1.2.3.4.5.6.7.9");
  expect(nextVersion("1.0.0.0.0")).toBe("1.0.0.0.1");
});

test("handles full carry-over correctly", () => {
  expect(nextVersion("0.9.9")).toBe("1.0.0");
  expect(nextVersion("9.9.9")).toBe("10.0.0");
  expect(nextVersion("9.9")).toBe("10.0");
  expect(nextVersion("99999999.9.9.9.9")).toBe("100000000.0.0.0.0");
});

test("handles one number", () => {
  expect(nextVersion("9")).toBe("10");
  expect(nextVersion("10")).toBe("11");
  expect(nextVersion("1")).toBe("2");
  expect(nextVersion("19")).toBe("20");
});

test("does not affect numbers that don't need carry-over", () => {
  expect(nextVersion("3.5.9")).toBe("3.6.0");
  expect(nextVersion("1.2.3.4.5.6.7.8.9")).toBe("1.2.3.4.5.6.7.9.0");
  expect(nextVersion("1.2.3.4.5.6.9.9.9")).toBe("1.2.3.4.5.7.0.0.0");
  expect(nextVersion("8.9.9.9")).toBe("9.0.0.0");
});
