type Message = string | number

const message1 = Math.random()
console.log(message1)

const message2 = 100
console.log(message2)

function printMessage (message: Message) {
  console.log('Here is the message:', message)
  return 'hello'
}
const result = printMessage(message1)
console.log('result.length', result.length)

function saveMessage (message: Message) {
  const string = String(message)
  localStorage.setItem('message', string)
}