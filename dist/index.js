"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bakeryDelivery = {
    from: 'flour factory',
    to: 'bakery',
    price: 1000,
    cargo: 20 // how many bags
};
const schoolDelivery = {
    from: "bus stop",
    to: 'school',
    price: 0,
    cargo: ['Dorothy', 'Zelda', 'Tallulah']
};
function receiveDelivery(cargo) {
    console.log('I received this cargo:', cargo);
    return cargo;
}
const bakeryReceived = receiveDelivery(bakeryDelivery.cargo);
const schoolRecevied = receiveDelivery(schoolDelivery.cargo);
//# sourceMappingURL=index.js.map