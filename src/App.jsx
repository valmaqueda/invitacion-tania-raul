import Hero from "./sections/Hero";
import QuoteCountdown from "./sections/QuoteCountdown";
import FamilySection from "./sections/FamilySection";
import PhotoHighlight from "./sections/PhotoHighlight";   // 👈 nuevo
import EventTimeline from "./sections/EventTimeline";
import LocationSection from "./sections/LocationSection.jsx";
import GiftSection from "./sections/GiftSection";
import DresscodeSection from "./sections/DresscodeSection";
import Footer from "./sections/Footer";
import StaySection from "./sections/StaySection";


import FloatingNav from "./components/FloatingNav";

function App() {
  return (
    <>
      <FloatingNav />
      <Hero />
      <QuoteCountdown />
      <FamilySection />
      <PhotoHighlight />   {/* 👉 aquí va la foto bonita */}
      <EventTimeline />
      <LocationSection />
      <StaySection />
      <GiftSection />   {/* 👈 mesa de regalos */}
      <DresscodeSection /> 
      <Footer />
    </>
  );
}

export default App;
