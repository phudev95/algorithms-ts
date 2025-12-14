import { solution } from "./LinearSearch";

describe("Linear Search", () => {
  it.each([
    { A: [2, 6, 7, 90, 103], F: 90, expectedResult: 3 },
    { A: [2, 6, 7, 90, 103], F: 103, expectedResult: 4 },
    { A: [2, 6, 7, 90, 103], F: 8, expectedResult: -1 },
    { A: [], F: 8, expectedResult: -1 },
  ])(
    "should return correct value for A=$A, F=$F",
    ({ A, F, expectedResult }) => {
      expect(solution(A, F)).toStrictEqual(expectedResult);
    }
  );
});
