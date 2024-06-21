export function solution(A: number[], findingValue: number): number {
  const N = A.length;
  let result = -1;
  if (!N) return result;

  for (let i = 0; i < N; i++) {
    if (A[i] === findingValue) {
      result = i;
      break;
    }
  }

  return result;
}

const A0 = [2, 6, 7, 90, 103];
console.log("A0", solution(A0, 90));
