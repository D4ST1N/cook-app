import Recipe from '@/ts/interfaces/Recipe.interface';
import { defineStore } from 'pinia';

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    recipes: [] as Recipe[],
  }),
  getters: {
    allRecipes: (state) => {
      console.log(state.recipes);
      return state.recipes;
    },
  },
  actions: {
    addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
    },
  },
});
