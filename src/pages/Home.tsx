import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ResultsSection from "@/components/ResultsSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <FloatingButton />
      {/* <Header /> */}
      <HeroSection />
      <TestimonialsSection />
      <ProcessSection />
      <ResultsSection />
      <AboutSection />
      <BookingSection />
      <Footer />
    </div>
  );
}
