import './scss/index.scss'
console.log('Work webpack build!')
class Car {
  constructor(model = '') {
    this.model = model;
  }
  info(){
    console.log(`I'm ${this.model}`)
  }
}
const porshe = new Car('Porshe');
porshe.info();
