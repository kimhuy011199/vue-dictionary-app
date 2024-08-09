<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { fetchWord } from '@/utils/api';
import { HttpStatus } from '@/utils/enum';
import SearchBar from '@/components/SearchBar.vue';
import Result from '@/components/Result.vue';
import type { Word } from '@/utils/type';

const route = useRoute();
const word = route.params.word as string;

const result = ref<Word | undefined>(undefined);
const isError = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const isNotFound = ref<boolean>(false);

const lookupWord = async (word: string) => {
  // Reset states
  isLoading.value = true;
  isNotFound.value = false;
  isError.value = false;
  result.value = undefined;

  try {
    const data = await fetchWord(word);
    if (data) {
      console.log('data', data);
      result.value = data;
    } else {
      isNotFound.value = true;
    }
  } catch (error: any) {
    if (error?.response?.status === HttpStatus.NOT_FOUND) {
      isNotFound.value = true;
    } else {
      isError.value = true;
    }
  } finally {
    isLoading.value = false;
  }
};

watch(
  () => route.params.word,
  (newWord) => {
    lookupWord(newWord as string);
  }
);

onMounted(() => {
  lookupWord(word);
});
</script>

<template>
  <main>
    <div class="mx-auto max-w-2xl w-full">
      <SearchBar />
      <Result v-if="result" :result="result" />
    </div>
  </main>
</template>
