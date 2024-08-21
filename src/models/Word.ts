export type WordResponse = {
  word: string;
  phonetics: PhoneticResponse[];
  meanings: MeaningResponse[];
};

type MeaningResponse = {
  partOfSpeech: string;
  definitions: DefinitionResponse[];
  synonyms?: string[];
  antonyms?: string[];
};

type DefinitionResponse = {
  definition: string;
  synonyms?: string[];
  antonyms?: string[];
  example?: string;
};

type PhoneticResponse = {
  text?: string;
  audio?: string;
  sourceUrl?: string;
};

export class Phonetic {
  public text: string;
  public audio: string;

  constructor(phonetics: PhoneticResponse[]) {
    const phonetic = phonetics.find((phonetic) => phonetic?.audio) || phonetics[0];
    this.text = phonetic?.text || '';
    this.audio = phonetic?.audio || '';
  }
}

export class Meaning {
  public partOfSpeech: string;
  public definitions: Definition[];
  public synonyms: string[];

  constructor(data: MeaningResponse) {
    this.partOfSpeech = data?.partOfSpeech || '';
    this.definitions = data?.definitions.map((definition) => new Definition(definition)) || [];
    // Just get 5 synonyms
    this.synonyms = [...new Set(data?.synonyms)].splice(0, 5) || [];
  }
}

class Definition {
  public definition: string;
  public example: string;

  constructor(data: DefinitionResponse) {
    this.definition = data?.definition || '';
    this.example = data?.example || '';
  }
}

export class Word {
  public word: string;
  public phonetic: Phonetic;
  public meanings: Meaning[];

  constructor(data: WordResponse) {
    this.word = data?.word || '';
    this.phonetic = new Phonetic(data.phonetics);
    this.meanings = data?.meanings.map((meaning) => new Meaning(meaning)) || [];
  }
}
