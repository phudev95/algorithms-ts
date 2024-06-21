import { solution } from "./LinearSearch";

describe("Linear Search", () => {
  it.each`
    A                     | F      | expectedResult
    ${[2, 6, 7, 90, 103]} | ${90}  | ${3}
    ${[2, 6, 7, 90, 103]} | ${103} | ${4}
    ${[2, 6, 7, 90, 103]} | ${8}   | ${-1}
    ${[]}                 | ${8}   | ${-1}
  `("should return correct value", ({ A, F, expectedResult }) => {
    expect(solution(A, F)).toStrictEqual(expectedResult);
  });
});
