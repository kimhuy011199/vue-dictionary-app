import axios from 'axios';
import type { Word } from './type';

const DICTIONARY_API = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export const fetchWord = async (word: string): Promise<Word | undefined> => {
  const data = await axios.get(`${DICTIONARY_API}/${word}`);
  return data.data[0];
};
