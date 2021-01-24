export default function tupleSample() {
  // 一般的なタプルの型定義
  const response: [number, string] = [200, 'ok']
  // response = [400, 'bad request', 'email parameters is missing']
  // reaponse = ['400', 'bad request']
  console.log(response)

  // 可変長引数を使ったタプル
  const girlfriends: [string, ...string[]] = ['kana', 'saki', 'emi']
  girlfriends.push('misa')
  console.log(girlfriends)
}
