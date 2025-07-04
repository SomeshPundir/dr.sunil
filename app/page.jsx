import About from "@/components/About/About";
import Appoinment from "@/components/Appoinment/Appoinment";
import Counter from "@/components/Counter/Counter";
import Features from "@/components/Features/Features";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Services from "@/components/Services/Services";
import Testimonial from "@/components/Testimonial/Testimonial";
// import Clients from "@/components/Clients/Clients";
import DialysisCenters from "@/components/Services/DialysisCenters";

export default function Home() {
  return (
    <main id="main">
      <HeroBanner />
      <About />
      <Counter />
      <Services />
      <Appoinment />
      <Testimonial />
            <Features />
<DialysisCenters />

      {/* <Clients /> */}
    </main>
  );
}
