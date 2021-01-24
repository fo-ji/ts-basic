export default function typeAliasSample() {
  // 型エイリアス
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'tokyo',
    language: 'japanese',
    name: 'japan',
  }

  console.log('object alias sample 1: ', japan)

  const America: Country = {
    capital: 'washington, D.C',
    language: 'unites states of america',
    name: 'English',
  }

  console.log('object alias sample 2: ', America)

  // 合併型(union)と交差型(intersection)
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 合併型... KnightまたはWizardの型を持っている
  // 全てのキーを持てるが、どちらかの型を持っていれば持たなくてもOK
  type Adventurer = Knight | Wizard

  // 交差型... KnightかつWizardの型を持っている
  // 全てのキーを持っている必要がある
  type Paladin = Knight & Wizard

  // Knightよりの冒険者
  const Adventurer1: Adventurer = {
    hp: 100,
    // [注意]どちらのキーも持てる
    // mp: 30,
    sp: 30,
    weapon: '木の剣',
    swordSkill: '三連斬り',
  }

  // Wizardよりの冒険者
  const Adventurer2: Adventurer = {
    hp: 100,
    mp: 30,
    weapon: '木の杖',
    magicSkill: 'ファイアボール',
    // swordSkill: '三連斬り'
  }

  console.log('object alias sample 3: ', Adventurer1)
  console.log('object alias sample 4: ', Adventurer2)

  const paladin: Paladin = {
    hp: 300,
    sp: 100,
    mp: 100,
    weapon: '鉄の剣',
    swordSkill: '三連斬り',
    magicSkill: 'ファイアボール',
  }

  console.log('object alias sample 5: ', paladin)
}
