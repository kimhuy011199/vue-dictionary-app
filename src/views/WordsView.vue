<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue';
import Result from '@/components/Result.vue';
import Loading from '@/components/Loading.vue';
import Error from '@/components/Error.vue';
import WordNotFound from '@/components/WordNotFound.vue';
import { useRouteParams } from '@/composables/useRouteParams';
import { useLookupWord } from '@/composables/useLookupWord';
import { FetchStatus } from '@/utils/enum';

const word = useRouteParams('word');
const { wordData, error, status, isNotFound } = useLookupWord(word);
</script>

<template>
  <div class="z-10 mx-auto max-w-2xl w-full mb-auto px-5 md:px-0">
    <SearchBar />
    <Loading v-if="status === FetchStatus.FETCHING" />
    <Result v-if="status === FetchStatus.RESOLVED && wordData" :result="wordData" />
    <Error v-if="status === FetchStatus.REJECTED && error" />
    <WordNotFound v-if="isNotFound" :word="word" />
  </div>
</template>
