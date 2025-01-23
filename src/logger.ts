// 数値の二乗を計算する関数
// function square(n: number): number {
//   return n * n;
// }

// 配列の合計を計算する関数
function sumArray(arr: number[]): number {
  return arr.reduce((sum, current) => sum + current, 0);
}

// フィボナッチ数列のn番目を計算する関数
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const logs = () => {
  const a = ['a','tytyty']
  return a;
}

export function performLogging() {
  const results = [
    {
      name: "logs",
      result: logs()
    },
    {
      name: "sumArray([1, 2, 3, 4, 5])",
      result: sumArray([1, 2, 3, 4, 5])
    },
    {
      name: "fibonacci(8)",
      result: fibonacci(8)
    }
  ];

  return results.map((item, index) => ({
    id: index,
    content: `${item.name} = ${item.result}`,
    type: typeof item.result
  }));
}