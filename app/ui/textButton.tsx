"use client";

import { twJoin } from "tailwind-merge";
import { typography } from "../styles/fonts/typografy";

type buttonSize = "medium" | "small";
type buttonType = "confirm" | "cancel" | "text";

interface TextButtonProps {
  text: string;
  activate: boolean;
  onClick: () => void;
  size: buttonSize;
  type: buttonType;
  cyId: string;
}

export function TextButton({
  text,
  activate,
  onClick,
  size,
  type,
  cyId,
}: TextButtonProps) {
  const baseStyle = "h-9 border text-center rounded-md";

  const colorStyles = {
    confirm:
      "text-done border border-done hover:border-0 hover:bg-done hover:text-background",
    cancel:
      "text-secondary border border-secondary hover:border-0 hover:bg-secondary hover:text-background",
    text: "text-primary border border-primary hover:border-0 hover:bg-primary hover:text-background",
    deactivate: "border-0 bg-muted text-background opacity-30",
  };

  const componentSize = {
    medium: "w-40 h-9",
    small: "w-28 h-9",
  };

  const tailwindConfig: string = [
    componentSize[size],
    baseStyle,
    typography.button,
  ].join(" ");

  return (
    <button
      className={twJoin(
        tailwindConfig,
        activate ? colorStyles[type] : colorStyles["deactivate"],
      )}
      onClick={onClick}
      id={`${cyId}-text-button`}
    >
      {text}
    </button>
  );
}
