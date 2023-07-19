import { ExperienceTimeline } from "./components/ExperienceTimeline/ExperienceTimeline";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen h-full flex-col mesh overflow-hidden">
      <div className="mesh-grain-img"></div>
      <Header />
      <ExperienceTimeline />
    </main>
  );
}
