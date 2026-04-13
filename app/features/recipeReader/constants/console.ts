export const ConsoleList = {
  stm: "Steam",
  psx: "PlayStation",
  ps2: "PlayStation 2",
  ps3: "PlayStation 3",
  ps4: "PlayStation 4",
  ps5: "PlayStation 5",
  nes: "Nintendo Entertainment System",
  sns: "Super Nintendo Entertainment System",
  n64: "Nintendo 64",
  gcb: "GameCube",
  gby: "Game Boy",
  gbc: "Game Boy Color",
  gba: "Game Boy Advance",
  nds: "Nintendo DS",
  wii: "Wii",
  msm: "Master System",
  gmd: "Genesis / Mega Drive",
  drc: "Dreamcast",
} as const;

export type ConsoleCode = keyof typeof ConsoleList;
