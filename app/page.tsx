import { Sidebar } from "@/components/layout/Sidebar";
import { ContactBar } from "@/components/layout/ContactBar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { CursorFollower } from "@/components/effects/CursorFollower";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { ScrollIndicator } from "@/components/effects/ScrollIndicator";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CursorFollower />
      <ScrollIndicator />
      <MobileMenu />

      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] min-h-screen">
        <Sidebar />

        <main className="px-6 sm:px-10 lg:px-16 pt-20 lg:pt-0 pb-16">
          <About />
          <Projects />
          <Experience />
        </main>
      </div>

      <ContactBar />
    </>
  );
}
