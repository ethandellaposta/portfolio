import { ExperienceTimeline } from "./components/ExperienceTimeline/ExperienceTimeline";
import { Header } from "./components/Header/Header";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen h-full flex-col">
      <Header />
      <ExperienceTimeline />
    </main>
  );
}
