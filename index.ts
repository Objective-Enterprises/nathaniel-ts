type Message <T> = string | number | T

const message1: Message<boolean> = true

const message2: Message<[5]> = [5]