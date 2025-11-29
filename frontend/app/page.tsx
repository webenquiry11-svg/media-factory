import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import OurWork from "@/components/sections/OurWork";
import Service from "@/components/sections/service";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <section id="services">
        <Service />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="our-work">
        <OurWork />
      </section>
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}