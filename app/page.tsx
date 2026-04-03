import { ThemeTestHeader } from "./ui/theme-test-header";

export default function Home() {

  
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <ThemeTestHeader />

      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-6 py-10">
        <div className="rounded-3xl bg-surface p-8 shadow-sm ring-1 ring-foreground/10">
          <p className="font-body text-sm text-muted">font-body</p>
          <p className="mt-2 font-body text-lg text-foreground">
            Este paragrafo usa a fonte principal definida pelo tema.
          </p>
        </div>

        <div className="rounded-3xl bg-surface p-8 shadow-sm ring-1 ring-foreground/10">
          <p className="text-sm text-muted">font-heading</p>
          <h2 className="mt-2 font-heading text-4xl text-foreground">
            Titulo usando a fonte de destaque do tema
          </h2>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="rounded-2xl bg-background px-5 py-4 ring-1 ring-foreground/10">
            <p className="text-sm text-muted">Background</p>
            <p className="font-body text-foreground">bg-background</p>
          </div>
          <div className="rounded-2xl bg-surface px-5 py-4 ring-1 ring-foreground/10">
            <p className="text-sm text-muted">Surface</p>
            <p className="font-body text-foreground">bg-surface</p>
          </div>
          <div className="rounded-2xl bg-primary px-5 py-4">
            <p className="text-sm text-white/80">Primary</p>
            <p className="font-body text-white">bg-primary</p>
          </div>
        </div>
      </section>
    </main>
  );
}
