export const ModeList = {
  hundr: "100%",
  compl: "Complishionist",
  achiv: "Achievement Hunter",
  retro: "Retro Achievement",
  chall: "Challenge Runs",
  rcomp: "Retro Achievement + Complishionist",
} as const;

export type ModeCode = keyof typeof ModeList;
