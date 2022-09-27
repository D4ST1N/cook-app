<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar mode="md">
        <ion-buttons slot="start">
          <ion-back-button :default-href="defaultLink"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ props.pageTitle }}</ion-title>
        <user-menu slot="end" />
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <slot />  
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/vue';
import UserMenu from '../UserMenu/UserMenu.vue';

const props = defineProps({
  pageTitle: String,
  defaultLink: String,
});
</script>