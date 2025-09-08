truffle console
let instance = await SimpleStorage.deployed();
await instance.set(123);
let value = await instance.get();
console.log(value.toString());
