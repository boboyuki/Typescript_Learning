// interface
interface Card<T> {
  title: string
  desc: T
}

function printCardInfo<TT> (desc: TT): Card<TT> {
  const data: Card<TT> = {
    title: 'bruce',
    desc
  }
  return data
}

console.log(printCardInfo<number>(9999))

interface CarProps<T> {
  name: T
}

class Car<TT> implements CarProps<TT> {
  name: TT
  constructor(value: TT) {
    this.name = value
  }
}

const car = new Car<string>('bruce car')
console.log(car);
