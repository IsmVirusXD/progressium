"use client";

import { useState } from "react";
import TextListPresenter from "./presenter";

interface TextListProps {
  title: string;
  info: string;
  items: string[];
}

export default function TextList({ title, info, items }: TextListProps) {
  const idBase = title.toLocaleLowerCase().replace(/\s+/g, "");

  const [itemDone, setItemDone] = useState<boolean[]>(
    new Array(items.length).fill(false),
  );
  const [isListComplete, setIsListComplete] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(true);

  const toggleItemDoneIndex = (index: number) => {
    const newState = [...itemDone];
    newState[index] = !newState[index];
    setItemDone(newState);
    setIsListComplete(newState.every(Boolean));
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
      info={info}
      items={items}
      isListComplete={isListComplete}
      showInfo={showInfo}
      changeInfoVisibility={changeInfoVisibility}
      handleClickItem={toggleItemDoneIndex}
      checkIsItemDoneIndex={checkIsItemDoneIndex}
    />
  );
}
