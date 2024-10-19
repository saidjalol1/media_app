<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isLoginPage = computed(() => {
  return route.path === '/login';
});
</script>
<template>
  <div>
    <Header v-if="!isLoginPage"/>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style scoped>
</style>
