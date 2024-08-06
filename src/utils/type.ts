export type Word = {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
};

type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms?: string[];
  antonyms?: string[];
};

type Definition = {
  definition: string;
  synonyms?: string[];
  antonyms?: string[];
  example?: string;
};

type Phonetic = {
  text?: string;
  audio?: string;
  sourceUrl?: string;
};
