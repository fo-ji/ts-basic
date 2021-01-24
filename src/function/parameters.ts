// オプションパラメーターを持つ関数
export const isUserSignedIn = (userId: string, userName?: string): boolean => {
  if (userId === 'ABC') {
    console.log('login username: ', userName)
    return true
  } else {
    console.log('unlogin username: ', userName)
    return false
  }
}

// デフォルトパラメーターを持つ関数
export const isUserSignedIn2 = (userId: string, userName = 'satoshi'): boolean => {
  if (userId === 'ABC') {
    console.log('login username: ', userName)
    return true
  } else {
    console.log('unlogin username: ', userName)
    return false
  }
}

// レストパラメーターを持つ関数(可変長引数)
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice
  }, 0)
}
