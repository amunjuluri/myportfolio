import GithubGrid from "./components/GithubGrid";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import WorkGrid from "./components/WorkGrid";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <div className="fixed inset-0">
        <BackgroundGradientAnimation />
      </div>
      
      <div className="relative z-10 w-full min-h-screen overflow-auto">
        <div className="px-4 md:px-8 py-8 md:py-16 max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold">
              Hi, I&apos;m Anand Munjuluri
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mt-2">
              Full Stack Developer | Creative Thinker
            </p>
          </div>

          <div className="space-y-12">
            <GithubGrid />
            <WorkGrid />
          </div>
        </div>
      </div>
    </main>
  );
}