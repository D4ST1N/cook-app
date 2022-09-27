import Category from "../enums/Category.enum";
import { Ingridient } from "./Ingridient.interface";
import Step from "./Step.interface";

interface Recipe {
  id: string;
  name: string;
  image: string;
  ingridients: Ingridient[];
  steps: Step[];
  time: number;
  portions: number;
  category: Category;
}

export default Recipe;
