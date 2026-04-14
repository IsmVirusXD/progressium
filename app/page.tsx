import TextList from "./features/trackerBuilder/components/textList";
import TrackerHeader from "./features/trackerBuilder/components/trackerHeader";

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
          items={[
            "B - Tarefa 01",
            "B - Tarefa 02",
            "B - Tarefa 03",
            "B - Tarefa 04",
            "B - Tarefa 05",
          ]}
        />
        <TextList
          key={"C"}
          title="Lista de Tarefa C"
          items={[
            "C - Tarefa 01",
            "C - Tarefa 02",
            "C - Tarefa 03",
            "C - Tarefa 04",
            "C - Tarefa 05",
          ]}
        />
        <TextList
          key={"D"}
          title="Lista de Tarefa D"
          items={[
            "D - Tarefa 01",
            "D - Tarefa 02",
            "D - Tarefa 03",
            "D - Tarefa 04",
            "D - Tarefa 05",
          ]}
        />
        <TextList
          key={"E"}
          title="Lista de Tarefa E"
          items={[
            "E - Tarefa 01",
            "E - Tarefa 02",
            "E - Tarefa 03",
            "E - Tarefa 04",
            "E - Tarefa 05",
          ]}
        />
      </section>
    </main>
  );
}
