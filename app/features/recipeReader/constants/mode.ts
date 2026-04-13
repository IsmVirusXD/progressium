export const ModeList = {
  hundr: "100%",
  compl: "Completionist",
  achiv: "Achievement Hunter",
  retro: "Retro Achievement",
  chall: "Challenge Runs",
  rcomp: "Retro Achievement + Completionist",
} as const;

export type ModeCode = keyof typeof ModeList;
