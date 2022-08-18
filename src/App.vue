<template>
  <div>
    <MainNavbar />
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </div>
</template>

<script setup>
import MainNavbar from './components/MainNavbar.vue'
</script>

<style scoped></style>
