import { computed, type Ref } from 'vue';
import { useFetch } from './useFetch';
import { Word, type WordResponse } from '@/models/Word';
import { HttpStatus } from '@/utils/enum';

const DICTIONARY_API = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export function useLookupWord(word: Ref<string>) {
  const url = computed(() => `${DICTIONARY_API}/${word.value}`);
  const { data, error: fetchError, status } = useFetch<WordResponse[]>(url);

  // Transform the data if needed
  const wordData = computed(() => {
    return data.value ? new Word(data.value[0]) : null;
  });
  const isNotFound = computed(() => {
    return fetchError.value?.response?.status === HttpStatus.NOT_FOUND;
  });
  const error = computed(() => {
    return isNotFound.value ? null : fetchError;
  });

  return { wordData, error, status, isNotFound };
}
