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

  return (
    <div
      id="header_dashboard"
      className="flex border-3 m-5 p-4 px-8 py 10 flex-row border-secondary gap-2 shadow-md"
    >
      <img src={image} className="h-max-20 w-20 mr-4" />
      <div className="flex flex-col">
        <h1 className="font-heading text-4xl font-bold ">{title}</h1>
        <div className="flex flex-row gap-2">
          <h2 className="font-heading text-2xl font-medium">
            <span className="text-base text-primary font-light mr-2">
              Made By:
            </span>
            {author}
          </h2>
        </div>
      </div>
    </div>
  );
}
