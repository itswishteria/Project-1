<template>
  <div class="main-container div-center">
    <MainNavbar />
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script setup>
import MainNavbar from './components/MainNavbar.vue'
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  max-width: 1600px;
}
</style>
