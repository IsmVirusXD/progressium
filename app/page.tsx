import { CheckTable } from "./features/trackerBuilder/components/checkTable";
import TextList from "./features/trackerBuilder/components/textList/index";
import TrackerHeader from "./features/trackerBuilder/components/trackerHeader/index";

const personagensBase = [
  "Naruto",
  "Sasuke",
  "Sakura",
  "Rock Lee",
  "Shikamaru",
  "Kakashi",
  "Neji",
  "Hinata",
  "Haku",
  "Zabuza",
  "Gaara",
  "Orochimaru",
];

const allPersonagensBase = [
  "Naruto",
  "Sasuke",
  "Sakura",
  "Rock Lee",
  "Shikamaru",
  "Kakashi",
  "Neji",
  "Hinata",
  "Haku",
  "Zabuza",
  "Gaara",
  "Orochimaru",
  "Nine-Tails Naruto",
  "Cursed Mark Sasuke",
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <section>
        <TrackerHeader
          author="Igor Mendes"
          image="https://media.retroachievements.org/Images/126564.png"
          title="Naruto Ultimate Ninja - Retro Achievement"
        />
      </section>
      <section className="flex flex-row gap-1">
        <TextList
          key={"scenario-mode"}
          title="Scenario Mode"
          items={personagensBase}
        />
        <TextList
          key={"hardcore-senario"}
          title="Scenario Mode - Hardcore"
          info="Complete the scenario without using any retries."
          items={personagensBase}
        />
        <TextList
          key={"training-mode"}
          title="Training Mode"
          info="Complete training with all available forms."
          items={allPersonagensBase}
        />
        <CheckTable
          title={"Missions"}
          key={"mission"}
          info="Complete the missions"
          data={[
            { label: "Practice", count: 5 },
            { label: "D-Rank", count: 6 },
            { label: "C-Rank", count: 7 },
            { label: "B-Rank", count: 10 },
            { label: "A-Rank", count: 9 },
          ]}
        />
      </section>
    </main>
  );
}
