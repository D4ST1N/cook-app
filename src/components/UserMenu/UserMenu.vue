<template>
  <div>
    <ion-buttons>
      <ion-button>
        <div v-if="currentUser">{{ currentUser.displayName }}</div>
        <div v-else>{{ $t('general.app.login') }}</div>
        <ion-icon slot="end" :icon="personCircleSharp"></ion-icon>
      </ion-button>
    </ion-buttons>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { IonButtons, IonButton, IonIcon } from '@ionic/vue';
import { personCircleSharp } from 'ionicons/icons';
import Db from '@/firebase/db';

const auth = getAuth();
console.log(auth);

const store = useUserStore();
const { user: currentUser } = storeToRefs(store);
const { setUser, unsetUser } = store;

onAuthStateChanged(auth, (user) => {
  if (user) {
    setUser(user);
    Db.getUserRecipes(user);
  } else {
    unsetUser();
  }
});
</script>