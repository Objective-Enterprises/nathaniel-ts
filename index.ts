type StringAndSomething <T> = string | T

const stringOrNumber: StringAndSomething<number> = 'a'


interface Delivery <Cargo> {
  from: string
  to: string
  price: number
  cargo: Cargo
}
const bakeryDelivery: Delivery<number> = {
  from: 'flour factory',
  to: 'bakery',
  price: 1000,
  cargo: 20 // how many bags
}
const schoolDelivery: Delivery<string[]> = {
  from: "bus stop",
  to: 'school',
  price: 0,
  cargo: ['Dorothy', 'Zelda', 'Tallulah'] // What studnet names
}

// function receiveDelivery (cargo: number | string[]) {
//   console.log('I received this cargo:', cargo)
//   return cargo
// }
const auditor = 'David'
function receiveDelivery <T> (cargo: T) {
  console.log('I received this cargo:', cargo)
  const receipt = {
    data: cargo,
    timestamp: new Date(),
    auditor
  }
  return receipt
}

const bakeryReceipt = receiveDelivery(bakeryDelivery.cargo)
const schoolReceipt = receiveDelivery(schoolDelivery.cargo)

function printNumber (value: number) {
  const formatted = value.toFixed(2) // 1.00
  console.log(formatted)
}
printNumber(bakeryReceipt.data)

function printStrings (value: string[]) {
  const formatted = value.map(v => v.toUpperCase())
  console.log(formatted)
}
printStrings(schoolReceipt.data)