"use client";

import { useMemo, useState } from "react";
import TextListPresenter from "./presenter";

interface TextListProps {
  title: string;
  info?: string;
  items: string[];
}

export default function TextList({ title, info, items }: TextListProps) {
  const idBase = title.toLocaleLowerCase().replace(/\s+/g, "");

  const [itemDone, setItemDone] = useState<boolean[]>(
    new Array(items.length).fill(false),
  );
  const isListComplete = useMemo(() => itemDone.every(Boolean), [itemDone]);
  const [showInfo, setShowInfo] = useState<boolean>(true);

  const toggleItemDoneIndex = (index: number) => {
    const newState = [...itemDone];
    newState[index] = !newState[index];
    setItemDone(newState);
  };

  const checkIsItemDoneIndex = (index: number): boolean => {
    return itemDone[index];
  };

  const changeInfoVisibility = () => {
    setShowInfo(!showInfo);
  };

  return (
    <TextListPresenter
      idBase={idBase}
      title={title}
      info={info ? info : null}
      items={items}
      isListComplete={isListComplete}
      showInfo={showInfo}
      changeInfoVisibility={changeInfoVisibility}
      handleClickItem={toggleItemDoneIndex}
      checkIsItemDoneIndex={checkIsItemDoneIndex}
    />
  );
}
