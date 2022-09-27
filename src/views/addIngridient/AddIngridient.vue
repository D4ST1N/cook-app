<template>
  <page-wrapper :page-title="$t('general.pages.addIngridient.title')" default-link="/">
    <form class="ion-padding" @submit.stop.prevent="addIngridient">
      <ion-list>
        <ion-item>
          <ion-label position="floating">
            {{ $t('general.pages.addIngridient.name') }}
          </ion-label>
          <ion-input v-model="name" type="text" :placeholder="$t('general.pages.addIngridient.namePlaceholder')"
            required />
        </ion-item>

        <ion-item>
          <ion-thumbnail slot="start">
            <ion-img alt="Icon" :src="thumbnailUrl" />
          </ion-thumbnail>
          <ion-label position="floating">
            {{ $t('general.pages.addIngridient.icon') }}
          </ion-label>
          <ion-input v-model="iconUrl" type="text" :placeholder="$t('general.pages.addIngridient.iconPlaceholder')"
            required />
        </ion-item>

        <ion-item>
          <ion-label position="floating">
            {{ $t('general.pages.addIngridient.identifier') }}
          </ion-label>
          <ion-input v-model="identifier" type="text"
            :placeholder="$t('general.pages.addIngridient.identifierPlaceholder')" required />
        </ion-item>

        <ion-item>
          <ion-label position="floating">
            {{ $t('general.pages.addIngridient.unit') }}
          </ion-label>
          <ion-select v-model="unit" :placeholder="$t('general.pages.addIngridient.unitPlaceholder')">
            <ion-select-option v-for="unit in units" :key="unit.key" :value="unit.key">
              {{ $t(`units.${ unit.label }`) }}
            </ion-select-option>
          </ion-select>
        </ion-item>
      </ion-list>

      <ion-button expand="block" :disabled="submitDisabled" type="submit">
        {{ $t('general.pages.addIngridient.submit') }}
      </ion-button>
    </form>
  </page-wrapper>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { IonList, IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption, IonImg, IonThumbnail } from '@ionic/vue';
import PageWrapper from '@/components/PageWrapper/PageWrapper.vue';
import Unit from '@/ts/enums/Unit.enum';
import Db from '@/firebase/db';

interface UnitInfo {
  key: Unit;
  label: Unit;
}

const name = ref('');
const unit = ref(Unit.Grams);
const identifier = ref('')
const iconUrl = ref('');

const units: Record<Unit, UnitInfo> = {
  [Unit.Grams]: {
    key: Unit.Grams,
    label: Unit.Grams,
  },
  [Unit.Mililiters]: {
    key: Unit.Mililiters,
    label: Unit.Mililiters,
  },
  [Unit.Pcs]: {
    key: Unit.Pcs,
    label: Unit.Pcs,
  },
};
const thumbnailUrl = computed(() => {
  return iconUrl.value ? iconUrl.value : 'https://cdn-icons-png.flaticon.com/512/6506/6506038.png';
});
const submitDisabled = computed(() => {
  return name.value === '' || iconUrl.value === '';
});

async function addIngridient() {
  await Db.addUserIngridient({
    name: name.value,
    unit: unit.value,
    icon: iconUrl.value,
    slug: identifier.value,
  });
  clear();
}

function clear() {
  name.value = '';
  unit.value = Unit.Grams;
  iconUrl.value = '';
}
</script>
