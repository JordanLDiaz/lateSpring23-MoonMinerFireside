import { FruitsController } from "./Controllers/FruitsController.js";
import { UpgradesController } from "./Controllers/UpgradesController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  fruitsController = new FruitsController();
  upgradesController = new UpgradesController();

}

window["app"] = new App();
