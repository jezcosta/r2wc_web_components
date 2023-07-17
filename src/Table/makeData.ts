export type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  progress: number
  status: 'relationship' | 'complicated' | 'single'
  subRows?: Person[]
}

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const nameArr = ['fulano1', 'fulano2', 'fulano3', 'fulano4']
const lastNameArr = ['last1', 'last2', 'last3', 'last4']
const ageArr = [19, 20, 21, 24]

const newPerson = (index: number): Person => {
  return {
    firstName: nameArr[index],
    lastName: lastNameArr[index],
    age: ageArr[index],
    visits: 100,
    progress: 90,
    status: 'single'
  }
}

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!
    return range(len).map((): Person => {
      return {
        ...newPerson(Math.floor(Math.random() * nameArr.length)),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      }
    })
  }

  return makeDataLevel()
}
