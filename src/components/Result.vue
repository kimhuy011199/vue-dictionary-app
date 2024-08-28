<script setup lang="ts">
import type { Word } from '@/models/Word';
import Phonetic from './Phonetic.vue';
import Meanings from './Meanings.vue';

defineProps<{
  result: Word;
}>();
</script>

<template>
  <div class="flex flex-col bg-white rounded-[2rem] mt-4">
    <Phonetic :phonetic="result.phonetic" :word="result.word" />
    <div class="h-[1px] w-full bg-primary"></div>
    <Meanings :meanings="result.meanings" />
  </div>
</template>
