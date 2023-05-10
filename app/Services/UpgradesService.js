import { appState } from "../AppState.js";

class UpgradesService {
  buyClickUpgrade(upgradeName) {
    // console.log('buying upgrade from service');
    let foundUpgrade = appState.upgrades.find(u => u.name == upgradeName)
    console.log('[PURCHASED A]', foundUpgrade)

    if (!foundUpgrade || foundUpgrade.type == 'auto') { return }
    if (appState.fruit >= foundUpgrade.price) {
      appState.fruit -= foundUpgrade.price
      console.log('[NEW FRUIT COUNT]', appState.fruit);

      foundUpgrade.quantity++
      foundUpgrade.price += foundUpgrade.price * foundUpgrade.multiplier
      console.log('[NEW PRICE]', foundUpgrade.price);
      appState.emit('upgrades')
    } else {
      alert('Keep mining those pineapples!')
    }
  }

}

export const upgradesService = new UpgradesService();