import z from "zod";
import { ModeList } from "../constants/mode";

const modeCodes = Object.keys(ModeList) as [
  keyof typeof ModeList,
  ...(keyof typeof ModeList)[],
];

export const ModeSchema = z.enum(modeCodes);

export type ModeCode = z.infer<typeof ModeSchema>;
