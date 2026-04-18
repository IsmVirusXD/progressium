"use client";

import { useContext, useState } from "react";
import TrackerHeaderPresenter from "./presenter";
import { ThemeContext } from "@/app/features/themeManager/context";

interface TrackerHeaderProps {
  title: string;
  author: string;
  image: string;
}

export default function TrackerHeader({
  title,
  author,
  image,
}: TrackerHeaderProps) {
  const { changeTheme, usingTheme } = useContext(ThemeContext);
  const [nameTheme, setNameTheme] = useState<string>("Default");
  const [key, setKey] = useState<boolean>(false);

  const clickHandler = () => {
    key ? setNameTheme("Dark Theme") : setNameTheme("Light Theme");
    setKey(!key);
  };

  return (
    <TrackerHeaderPresenter
      title={title}
      author={author}
      image={image}
      theme={nameTheme}
      clickHandler={clickHandler}
    />
  );
}
