<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import Background from '@/components/Background.vue';
</script>

<template>
  <div class="flex flex-col h-full min-h-screen bg-gradient-to-b from-[#15803d] to-[#42b883]">
    <AppHeader />
    <RouterView />
    <AppFooter />
    <Background />
  </div>
</template>
