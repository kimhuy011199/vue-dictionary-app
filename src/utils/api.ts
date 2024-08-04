import axios from 'axios';
import type { Word } from './type';

const DICTIONARY_API = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export const lookupWord = async (word: string): Promise<Word | undefined> => {
  try {
    const data = await axios.get(`${DICTIONARY_API}/${word}`);
    return data;
  } catch (error) {
    console.log('error', error);
  }
};
