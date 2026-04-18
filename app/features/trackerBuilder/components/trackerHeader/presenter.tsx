interface TrackerHeaderPresenterProps {
  title: string;
  author: string;
  image: string;
  theme: string;
  clickHandler: () => void;
}

export default function TrackerHeaderPresenter({
  title,
  author,
  image,
  theme,
  clickHandler,
}: TrackerHeaderPresenterProps) {
  return (
    <div
      id="header_dashboard"
      className="grid grid-cols-[100px_1fr_300px] grid-rows-2 border-3 m-5 px-6 py-4 gap-x-4 border-secondary shadow-md"
    >
      <img
        src={image}
        className="h-20 w-20 row-span-2 col-start-1 row-start-1 content-center"
      />
      <h1 className=" font-heading text-4xl font-bold content-end-safe">
        {title}
      </h1>
      {/* //Subtitle */}

      <h2 className="row-start-2 font-heading text-2xl font-medium content-baseline">
        <span className="text-base text-primary font-light mr-2">Made By:</span>
        {author}
      </h2>
      <h3 className="col-start-3 font-heading text-2xl font-medium content-baseline">
        <span className="text-base text-primary font-light mr-2">Theme:</span>
        {theme}
      </h3>
      <button
        className="border col-start-3 row-start-2 rounded-3xl hover:bg-done hover:text-background"
        onClick={clickHandler}
      >
        Change Theme
      </button>
    </div>
  );
}
