import { appState } from "../AppState.js";
import { fruitsService } from "../Services/FruitsService.js";
import { setText } from "../Utils/Writer.js";

function _drawFruit() {
  // NOTE V using getElementById to draw to the page
  // @ts-ignore
  // document.getElementById('total-fruit').innerText = appState.fruit
  // NOTE using setText utility to draw to the page...both act the same!
  setText('total-fruit', appState.fruit)
}

function _drawClickCount() {
  let clickCount = 1
  appState.upgrades.forEach(u => {
    if (u.quantity > 0 && u.type == 'click') {
      clickCount += u.multiplier * u.quantity
      console.log('[CURRENT CLICKCOUNT]', clickCount);
    }
  })
  document.getElementById('click-count').innerText = clickCount
}

export class FruitsController {
  constructor() {
    // console.log('hello from the fruits controller');
    _drawFruit()
    appState.on('fruit', _drawFruit)
    _drawClickCount()
    appState.on('upgrades', _drawClickCount)
  }

  mineFruit() {
    // console.log('mining fruit!');
    fruitsService.mineFruit()
  }
}