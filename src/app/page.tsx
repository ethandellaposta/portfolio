import { ExperienceTimeline } from "./components/ExperienceTimeline/ExperienceTimeline";
import { Header } from "./components/Header";
import { SkewedBackground } from "./components/common/SkewedBackground";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen h-full flex-col">
      <SkewedBackground square_side="top" height="40rem" />
      <Header />
      <ExperienceTimeline />

      <SkewedBackground square_side="bottom" height="50rem" />
    </main>
  );
}
