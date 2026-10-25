export interface IeltsWord {
  text: string;
  phonetic: string;
  pos: string;
  meaning: string;
  example: string;
  example_cn: string;
  emoji: string;
}

export interface IeltsUnit {
  grade: number;
  term: string;
  name: string;
  words: IeltsWord[];
}
