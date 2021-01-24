export default function objectSample() {
  // const a: object = {
  //   name: 'fo-ji',
  //   age: 34
  // }
  // a.name

  // オブジェクトリテラル記法で型定義
  const country: {
    language: string
    name: string
  } = {
    language: 'japanese',
    name: 'takeshi',
  }

  console.log('Object object sample 1: ', country)

  // オプショナルとreadonly
  const torahack: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 23,
    lastName: 'kamado',
    firstName: 'tanjiro',
  }

  torahack.gender = 'male'
  torahack.lastName = 'tanaka'
  // torahack.firstName = 'tanaka'

  console.log('Object object sample 2: ', torahack)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'tokyo',
    Korea: 'Seoul',
  }

  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('Object object sample 3: ', capitals)
}
