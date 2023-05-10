export class Upgrade {
  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.quantity = data.quantity
    this.multiplier = data.multiplier
    this.type = data.type
  }

  get ClickUpgradeTemplate() {
    return `
    <button onclick="app.upgradesController.buyClickUpgrade('${this.name}')" class="btn btn-purple w-75 my-1">
    <span>
      <p>${this.name}</p>
      <h5>${this.price} <i class="mdi mdi-fruit-pineapple"></i></h5>
    </span>
  </button>
    `
  }

  get AutoUpgradeTemplate() {
    return `
    <button class="btn btn-purple w-75 my-1">
    <span>
      <p>${this.name}</p>
      <h5>${this.price} <i class="mdi mdi-fruit-pineapple"></i></h5>
    </span>
  </button>
    `
  }

  get UpgradeCountTemplate() {
    return `  
    <h5 class="my-2">${this.name}:  <span> ${this.quantity} </span></h5>
    `
  }
}