<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import MainLayout from './layout/mainLayout.vue'

const route = useRoute()

// Check if current route is login
const isLoginPage = computed(() => route.path === '/login')
</script>

<template>
  <MainLayout v-if="!isLoginPage">
    <RouterView />
  </MainLayout>
  <RouterView v-else />
</template>

<style scoped>
</style>
