import { DurationPipe } from "./duration.pipe";

describe("DurationPipe", () => {
  const pipe = new DurationPipe();
  it("create an instance", () => {
    expect(pipe).toBeTruthy();
  });

  it("should transform to hours and mins", () => {
    const input = 88;
    const result = "1h 87min";
    expect(pipe.transform(input)).toBe(result);
  });

  it("should transform to only mins", () => {
    const input = 15;
    const result = "15min";
    expect(pipe.transform(input)).toBe(result);
  });
});
