<script setup lang="ts">
import Header from './components/Header.vue';
</script>

<template>
  <UApp>
    <Header/>
    <UMain class="pt-[64px]">    
      <NuxtLoadingIndicator color="#19CD9D" :height="3" :throttle="0" :duration="3000" />
      <NuxtPage />
    </UMain>

  </UApp>
</template>
