import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Destinations } from "./components/Destinations";
import { WhyUs } from "./components/WhyUs";
import { Reviews } from "./components/Reviews";
import { PlanTrip } from "./components/PlanTrip";
import { Footer } from "./components/Footer";
import { Login } from "./components/Login";

function App() {
  const path = window.location.pathname;

  if (path === "/login") {
    return <Login initialMode="sign-in" />;
  }

  if (path === "/signup") {
    return <Login initialMode="sign-up" />;
  }

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
