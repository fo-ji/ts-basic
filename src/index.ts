import World from './world'

const root = document.getElementById('root')
const world = new World('Hello World!')
world.sayHello(root)

// 関数の型定義
// import { logMessage } from './function/basic'
// import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'

// logMessage('hello.')
// isUserSignedIn('ABC', 'takeshi')
// isUserSignedIn('BC')
// isUserSignedIn2('ABC', 'takeshi')
// isUserSignedIn2('BC')
// const sum = sumProductsPrice(1, 3, 3, 4, 500, 22)
// console.log('function parameters sample: ', sum)

// オブジェクトの型定義
import objectSample from './object/object'
import typeAliasSample from './object/alias'
objectSample()
typeAliasSample()
