import World from './world'

const root = document.getElementById('root')
const world = new World('Hello World!')
world.sayHello(root)

// 関数の型定義
import { logMessage } from './function/basic'

logMessage('hello.')
