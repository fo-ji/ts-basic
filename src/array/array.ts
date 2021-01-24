export default function arraySample() {
  // シンプルな配列の型定義
  const colors: string[] = ['red', 'blue']
  colors.push('yellow')
  // colors.push(123)
  console.log(colors)

  const even: Array<number> = [2, 4, 5]
  console.log(even)

  const ids: (string | number)[] = ['adc', 123]
  console.log(ids)
}
