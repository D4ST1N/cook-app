import Unit from "../enums/Unit.enum";

export interface Ingridient {
  name: string;
  unit: Unit;
  icon: string;
  slug: string;
}

export interface IngridientFromDatabase extends Ingridient {
  id: string;
}

export interface IngridientInRecipe extends Ingridient {
  quantity: number;
}
