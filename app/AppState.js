import { Upgrade } from "./Models/Upgrade.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])

  /** @type {number} */
  fruit = 0

  upgrades = [
    new Upgrade({
      name: 'Rock Tool',
      price: 10,
      quantity: 0,
      multiplier: 2,
      type: 'click'
    }),
    new Upgrade({
      name: 'Kelp Basket',
      price: 50,
      quantity: 0,
      multiplier: 5,
      type: 'click'
    }),
    new Upgrade({
      name: 'Oslo',
      price: 100,
      quantity: 0,
      multiplier: 10,
      type: 'auto'
    }),
    new Upgrade({
      name: 'Space Station',
      price: 500,
      quantity: 0,
      multiplier: 100,
      type: 'auto'
    })
  ]
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
