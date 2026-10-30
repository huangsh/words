import { IeltsUnit } from "./types";
import { TOPIC1_EDUCATION } from "./topic1_education";
import { TOPIC2_ENVIRONMENT } from "./topic2_environment";
import { TOPIC3_TECHNOLOGY } from "./topic3_technology";
import { TOPIC4_HEALTH } from "./topic4_health";
import { TOPIC5_SOCIETY } from "./topic5_society";
import { TOPIC6_ECONOMY } from "./topic6_economy";
import { TOPIC7_CULTURE } from "./topic7_culture";
import { TOPIC8_URBAN } from "./topic8_urban";
import { TOPIC9_PSYCHOLOGY } from "./topic9_psychology";
import { TOPIC10_ACADEMIC } from "./topic10_academic";

export * from "./types";

export const IELTS_BOOK = {
  name: "雅思核心高频词汇 1500",
  description: "按 10 大常考话题分类 · 涵盖听说读写核心词、词性、音标与真题语境例句",
};

export const IELTS_UNITS: IeltsUnit[] = [
  ...TOPIC1_EDUCATION,
  ...TOPIC2_ENVIRONMENT,
  ...TOPIC3_TECHNOLOGY,
  ...TOPIC4_HEALTH,
  ...TOPIC5_SOCIETY,
  ...TOPIC6_ECONOMY,
  ...TOPIC7_CULTURE,
  ...TOPIC8_URBAN,
  ...TOPIC9_PSYCHOLOGY,
  ...TOPIC10_ACADEMIC,
];
