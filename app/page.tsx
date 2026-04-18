import TextList from "./features/trackerBuilder/components/textList/index";
import TrackerHeader from "./features/trackerBuilder/components/trackerHeader/index";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <section>
        <TrackerHeader
          author="Igor Mendes"
          image="https://yt3.googleusercontent.com/Anq7ei3motwtTuVzloCjpy114Lx2H96PEakkaKmjhSjTcjH-rs0YVLDqjLlQVUe3Gb9zBw1hNg=s160-c-k-c0x00ffffff-no-rj"
          title="TESTE MODE"
        />
      </section>
      <section className="flex flex-row gap-1">
        <TextList
          key={"A"}
          title="Lista de Tarefas A"
          info="Tem que fazer algo na Lista A"
          items={[
            "A - Tarefa 01",
            "A - Tarefa 02",
            "A - Tarefa 03",
            "A - Tarefa 04",
            "A - Tarefa 05",
          ]}
        />
        <TextList
          key={"B"}
          title="Lista de Tarefa B"
          info="Tem que fazer algo na Lista B"
          items={[
            "B - Tarefa 01",
            "B - Tarefa 02",
            "B - Tarefa 03",
            "B - Tarefa 04",
            "B - Tarefa 05",
          ]}
        />
      </section>
    </main>
  );
}
