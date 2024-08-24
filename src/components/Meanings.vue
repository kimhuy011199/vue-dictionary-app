<script setup lang="ts">
import type { Meaning } from '@/models/Word';

defineProps<{
  meanings: Meaning[];
}>();
</script>

<template>
  <div class="px-7 pt-5 pb-8">
    <ul class="flex flex-col gap-8">
      <li v-for="meaning in meanings" :key="meaning.partOfSpeech">
        <span class="text-primary text-xl font-semibold">{{ meaning.partOfSpeech }}</span>
        <div class="mt-2">
          <span class="text-gray-500">Meanings: </span>
          <ul class="list-disc pl-6 marker:text-primary flex flex-col gap-2 mt-2">
            <li v-for="definition in meaning.definitions" :key="definition.definition">
              <span class="text-black leading-5">{{ definition.definition }}</span>
              <div v-if="definition.example" class="text-gray-500">
                Ex: {{ definition.example }}
              </div>
            </li>
          </ul>
        </div>
        <div v-if="meaning.synonyms.length" class="flex mt-2">
          <span class="text-gray-500 pr-2">Synonyms:</span>
          <span v-for="(synonym, index) in meaning.synonyms" :key="index">
            <RouterLink :to="`/words/${synonym}`" class="text-primary">
              {{ synonym }}
            </RouterLink>
            <span v-if="index !== meaning.synonyms.length - 1" class="text-gray-500">,&nbsp;</span>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
