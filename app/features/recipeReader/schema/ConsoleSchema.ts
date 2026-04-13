import z from "zod";
import { ConsoleList } from "../constants/console";

const consoleCodes = Object.keys(ConsoleList) as [
  keyof typeof ConsoleList,
  ...(keyof typeof ConsoleList)[],
];

export const ConsoleSchema = z.enum(consoleCodes);

export type ConsoleCode = z.infer<typeof ConsoleSchema>;
