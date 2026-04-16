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
  cargo: ['Dorothy', 'Zelda', 'Tallulah']
}

function receiveDelivery <T> (cargo: T): T {
  console.log('I received this cargo:', cargo)
  return cargo
}

const bakeryReceived = receiveDelivery(bakeryDelivery.cargo)
const schoolReceived = receiveDelivery(schoolDelivery.cargo)
function formatNumber (value: number) {
  const formatted = value.toFixed(2) // 5 -> 5.00
  console.log(formatted)
}
formatNumber(bakeryReceived)
function formatString (value: string[]) {
  const formatted = value.map(v => v.toUpperCase())
  console.log(formatted)
}
formatString(schoolReceived)