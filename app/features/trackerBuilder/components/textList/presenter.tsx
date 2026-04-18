import { ChevronDown, Circle, CircleCheckBig, Minus } from "lucide-react";
import { twJoin } from "tailwind-merge";

interface TextListPresenterProps {
  idBase: string;
  title: string;
  info: string | null;
  items: string[];
  isListComplete: boolean;
  showInfo: boolean;
  changeInfoVisibility: () => void;
  handleClickItem: (index: number) => void;
  checkIsItemDoneIndex: (index: number) => boolean;
}

export default function TextListPresenter({
  idBase,
  title,
  info,
  items,
  isListComplete,
  showInfo,
  handleClickItem,
  checkIsItemDoneIndex,
  changeInfoVisibility,
}: TextListPresenterProps) {
  const Icon = showInfo ? Minus : ChevronDown;
  const iconColor = isListComplete ? "text-done" : "text-primary";

  return (
    <div
      className={twJoin(
        "flex m-5 border-2 w-fit px-4 py-2 shadow-md flex-col text-center",
        isListComplete ? "border-done" : "border-primary",
      )}
    >
      <button
        id={idBase}
        className="flex flew-row gap-2 content-center"
        onClick={changeInfoVisibility}
      >
        {info &&
          (showInfo ? (
            <Minus className={twJoin("my-1.5", iconColor)} />
          ) : (
            <ChevronDown className={twJoin("my-1.5", iconColor)} />
          ))}
        {isListComplete ? (
          <del className="font-heading text-2xl font-medium">{title}</del>
        ) : (
          <p className="font-heading text-2xl font-medium text-primary">
            {title}
          </p>
        )}
      </button>
      {showInfo && info ? (
        <div
          key={idBase + info}
          className=" flex border my-2 p-2 text-primary border-primary font-body"
        >
          <h3
            className={twJoin(
              "my-1.5 ",
              isListComplete ? "text-done" : "text-primary",
            )}
          >
            {info}
          </h3>
        </div>
      ) : null}
      {items.map((item: string, index: number) => (
        <button
          key={idBase + index.toString()}
          onClick={() => {
            handleClickItem(index);
          }}
          className="flex flex-row gap-2 ml-3 my-2"
        >
          {checkIsItemDoneIndex(index) ? (
            <>
              <CircleCheckBig className={"text-done"} />
              <del className={"text-done"}>{item}</del>
            </>
          ) : (
            <>
              <Circle className={"text-secondary"} />
              <p className={"text-foreground font-heading"}>{item}</p>
            </>
          )}
        </button>
      ))}
    </div>
  );
}
