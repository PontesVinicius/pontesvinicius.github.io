import { Navbar } from "@/components/_navbar";
import { HeroComponent } from "@/components/_hero";
import { Footer } from "@/components/_footer";
import { Carousel } from "@/components/_carousel";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Navbar />
        <HeroComponent />
        <Carousel />
      </main>
      <Footer />
    </>
  );
}
