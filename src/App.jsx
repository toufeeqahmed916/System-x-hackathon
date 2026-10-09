import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Perks from "./components/Perks";
import HowItWorks from "./components/HowItWorks";
import Winners from "./components/Winners";
import Judges from "./components/Judges";
import Testimonials from "./components/Testimonials";
import StickyNotes from "./components/StickyNotes";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CursorFollow from "./components/CursorFollow";

export default function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <CursorFollow />
      <Header />
      <main>
        <Hero />
        <About />
        <Winners />
        <Perks />
        <HowItWorks />
        <Judges />
        <Testimonials />
<StickyNotes />
<Gallery />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
