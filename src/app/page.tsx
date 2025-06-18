import HeroPage from "./hero/page";
import Aboutpage from "./about/page";
import { Feature108Demo } from "./projects/page";


export default function HomePage() {
  return (
    <main className="w-full">

      <section data-theme-section="dark" className="min-h-screen bg-black text-white">
        <HeroPage />
      </section>
      <section data-theme-section="light" className="min-h-screen bg-white text-black">
        <Aboutpage />
      </section>
       <section data-theme-section="dark" className="min-h-screen bg-black text-white">
       <Feature108Demo/>
      </section>
    </main>
  );
}
