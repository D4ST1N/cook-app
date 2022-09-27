<template>
  <page-wrapper :page-title="$t('general.pages.ingridients.title')" default-link="/">
    <div :class="$style.container">
      <div v-for="ingridient in allIngridients" :key="ingridient.id" :class="$style.ingridient">
        <ion-img :src="ingridient.icon" :class="$style.image"></ion-img>
        <div>{{ getIngridientName(ingridient) }}</div>
      </div>
    </div>
  </page-wrapper>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { IonImg } from '@ionic/vue';
import PageWrapper from '@/components/PageWrapper/PageWrapper.vue';
import Db from '@/firebase/db';
import { IngridientFromDatabase } from '@/ts/interfaces/Ingridient.interface';

const { te, t } = useI18n();

let allIngridients: Ref<IngridientFromDatabase[]> = ref([]);

getIngridients();

async function getIngridients() {
  const ingridients = await Db.getAllIngridients();
  console.log(ingridients);
  allIngridients.value = ingridients.map(ingridient => ({ ...ingridient.data(), id: ingridient.id }) as IngridientFromDatabase);
  console.log(allIngridients);
}

function getIngridientName(ingridient: IngridientFromDatabase) {
  const translationPath = `ingridients.${ingridient.slug}`;

  return te(translationPath) ? t(translationPath) : ingridient.name;
}
</script>

<style lang="scss" module>
  .container {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .ingridient {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image {
    max-width: 64px;
  }
</style>
