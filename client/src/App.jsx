import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Destinations } from "./components/Destinations";
import { WhyUs } from "./components/WhyUs";
import { Reviews } from "./components/Reviews";
import { PlanTrip } from "./components/PlanTrip";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Destinations />
        <WhyUs />
        <Reviews />
        <PlanTrip />
      </main>
      <Footer />
    </>
  );
}

export default App;
