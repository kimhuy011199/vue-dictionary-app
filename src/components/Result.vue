<script setup lang="ts">
import type { Word } from '@/utils/type';
import Phonetic from './Phonetic.vue';
import Meaning from './Meaning.vue';

defineProps<{
  result: Word;
}>();
</script>

<template>
  <div class="flex flex-col">
    <Phonetic />
    <Meaning />
  </div>
</template>
