<template>
  <page-wrapper :page-title="$t('general.app.title')">
    <ion-button expand="block" href="/ingridients">
      {{ $t('general.pages.ingridients.title') }}
    </ion-button>
    <ion-accordion-group expand="inset">
      <ion-accordion v-for="(recipes, categoryKey) in categories" :key="categoryKey" :value="categoryKey">
        <ion-item slot="header" color="light">
          <ion-label>{{ $t(`categories.${categoryKey}`) }}</ion-label>
        </ion-item>
        <ion-list slot="content">
          <ion-item v-for="recipe in recipes" :key="recipe.name">
            <ion-label>{{ recipe.name }}</ion-label>
          </ion-item>
        </ion-list>
      </ion-accordion>
    </ion-accordion-group>
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <router-link to="add-ingridient">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </router-link>
    </ion-fab>
  </page-wrapper>
</template>

<script lang="ts" setup>
import { IonItem, IonAccordionGroup, IonAccordion, IonLabel, IonList, IonFab, IonFabButton, IonIcon, IonButton } from '@ionic/vue';
import { useRecipesStore } from '@/store/recipes';
import { lasagna, carbonara, rabioli } from '../../mockData/recipes';
import Recipe from '@/ts/interfaces/Recipe.interface';
import Category from '@/ts/enums/Category.enum';
import PageWrapper from '@/components/PageWrapper/PageWrapper.vue';
import { add } from 'ionicons/icons';

const store = useRecipesStore();
const { allRecipes, addRecipe } = store;

addRecipe(lasagna);
addRecipe(carbonara);
addRecipe(rabioli);

type CategoryObject = { [key in Category]?: Recipe[]; }
const categories = allRecipes.reduce((cats: CategoryObject, recipe) => {
  const { category } = recipe;

  if (!Array.isArray(cats[category])) {
    cats[category] = [];
  }

  cats[category]!.push(recipe);

  return cats;
}, {});
console.log(categories);
</script>