import Header from "./components/Header";
import Hero from "./components/Hero";
import Winners from "./components/Winners";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import Judges from "./components/Judges";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1100] focus:bg-lime focus:px-4 focus:py-2 focus:font-bold focus:text-black"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Winners />
        <About />
        <HowItWorks />
        <Judges />
        <Gallery />
        {/* <Testimonials /> */}
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
