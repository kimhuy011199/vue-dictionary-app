<script setup lang="ts">
import type { Phonetic } from '@/models/Word';
import PlayButton from './PlayButton.vue';

defineProps<{
  phonetic: Phonetic;
  word: string;
}>();
</script>

<template>
  <div class="flex justify-between items-center px-7 py-5">
    <div class="flex flex-col">
      <span class="text-black text-3xl pb-1 font-semibold">{{ word }}</span>
      <span class="text-primary text-lg">{{ phonetic.text }}</span>
    </div>
    <PlayButton :audio="phonetic.audio" />
  </div>
</template>
