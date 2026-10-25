export interface IeltsWord {
  text: string;
  phonetic: string;
  pos: string;
  meaning: string;
  example: string;
  example_cn: string;
  emoji: string;
}

export interface WordLexical {
  syn: string[];
  note?: string;
  fam: { text: string; pos: string; meaning: string }[];
}

export interface IeltsUnit {
  grade: number;
  term: string;
  name: string;
  words: IeltsWord[];
}
