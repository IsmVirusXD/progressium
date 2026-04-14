"use client";

import { useState } from "react";
import { ChevronDown, Circle, CircleCheckBig, Minus } from "lucide-react";
import { twJoin } from "tailwind-merge";

interface textListProps {
  title: string;
  items: string[];
}

export default function TextList({ title, items }: textListProps) {
  const idBase = title.toLocaleLowerCase().replace(/\s+/g, "");

  const [done, setDone] = useState<boolean[]>(
    new Array(items.length).fill(false),
  );
  const [allDone, setAllDone] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(true);

  const toggleDoneIndex = (index: number) => {
    const newState = [...done];
    newState[index] = !newState[index];
    setDone(newState);
    setAllDone(newState.every(Boolean));
    setProgress(newState.filter(Boolean).length);
  };

  return (
    <div
      className={twJoin(
        "flex m-5 border-2 w-fit px-4 py-2 shadow-md flex-col text-center",
        allDone ? "border-done" : "border-primary",
      )}
    >
      <button
        id={idBase}
        className="flex flew-row gap-2 content-center"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {allDone ? (
          <del className="font-heading text-2xl font-medium">{title}</del>
        ) : (
          <p className="font-heading text-2xl font-medium text-primary">
            {title}
            <span className="pl-2">
              [{progress}/{items.length}]
            </span>
          </p>
        )}
        {open ? (
          <Minus
            className={twJoin(
              "my-1.5 ",
              allDone ? "text-done" : "text-primary",
            )}
          />
        ) : (
          <ChevronDown
            className={twJoin(
              "my-1.5 ",
              allDone ? "text-done" : "text-primary",
            )}
          />
        )}
      </button>
      {open
        ? items.map((item: string, index: number) => (
            <button
              key={idBase + index.toString()}
              onClick={() => {
                toggleDoneIndex(index);
              }}
              className="flex flex-row gap-2 ml-3 my-2"
            >
              {done[index] ? (
                <>
                  <CircleCheckBig className={"text-done"} />
                  <del className={"text-done"}>{item}</del>
                </>
              ) : (
                <>
                  <Circle className={"text-secondary"} />
                  <p className={"text-foreground"}>{item}</p>
                </>
              )}
            </button>
          ))
        : null}
    </div>
  );
}
