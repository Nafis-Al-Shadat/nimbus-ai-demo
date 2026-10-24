import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <HowItWorks />
        <Pricing />
        <Faq />
        <section className="cta">
          <div className="container cta__inner">
            <h2>Stop taking notes. <em>Start listening.</em></h2>
            <p>Free for your first 10 meetings. No credit card.</p>
            <a href="#pricing" className="btn btn--light">Get started free</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
