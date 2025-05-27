/* Home.tsx */
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Ecosystem from './components/Ecosystem';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Roadmap from './components/Roadmap';
import CTA from './components/CTA';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Problem />
      <Ecosystem />
      <Features />
      <HowItWorks />
      {/* <Metrics /> */}
      <Roadmap />
      {/* <Team /> */}
      <CTA />
    </main>
  );
}