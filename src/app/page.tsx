import HeroPage from "./hero/page";
import Aboutpage from "./about/page";
import CarrerPage from "./career/page";



export default function HomePage() {
  return (
    <main className="w-full">

      <section data-theme-section="dark" className="min-h-screen bg-black text-white">
        <HeroPage />
      </section>
      <section data-theme-section="light" className="min-h-screen bg-white text-black py-30">
        <Aboutpage />
      </section>
       <section data-theme-section="dark" className="min-h-screen bg-black text-white py-30">
       <CarrerPage/>
      </section>
    </main>
  );
}
