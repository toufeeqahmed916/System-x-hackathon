import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Perks from "./components/Perks";
import HowItWorks from "./components/HowItWorks";
import Prizes from "./components/Prizes";
import Judges from "./components/Judges";
import Countdown from "./components/Countdown";
import Registration from "./components/Registration";
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
        <Countdown />
        <About />
        <Prizes />
        <Perks />
        <HowItWorks />
        <Judges />
        <Registration />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
