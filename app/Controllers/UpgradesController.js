import { appState } from "../AppState.js";
import { upgradesService } from "../Services/UpgradesService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawClickUpgrades() {
  let template = ''
  appState.upgrades.forEach(u => {
    if (u.type == 'click') {
      template += u.ClickUpgradeTemplate
    }
  })
  setHTML('click-upgrades', template)
}

function _drawAutoUpgrades() {
  let template = ''
  appState.upgrades.forEach(u => {
    if (u.type == 'auto') {
      template += u.AutoUpgradeTemplate
    }
  })
  setHTML('auto-upgrades', template)
}

function _drawUpgradeCounts() {
  let template = ''
  appState.upgrades.forEach(u => template += u.UpgradeCountTemplate)
  setHTML('upgrade-counts', template)
}

export class UpgradesController {
  constructor() {
    // console.log('hello from my upgrade controller')
    _drawClickUpgrades()
    appState.on('upgrades', _drawClickUpgrades)
    _drawAutoUpgrades()
    appState.on('upgrades', _drawAutoUpgrades)
    _drawUpgradeCounts()
    appState.on('upgrades', _drawUpgradeCounts)
  }

  buyClickUpgrade(upgradeName) {
    console.log('buying click upgrade', upgradeName);
    upgradesService.buyClickUpgrade(upgradeName)
  }

}