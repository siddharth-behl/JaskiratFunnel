import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-[#F5F5F5] py-4 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-4 md:gap-16">
          {/* Hero Image */}
          <div className="flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
              <img
                src="/Jaskirat.png"
                alt="Fitness Coach"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="w-full text-center">
            <h1 className="text-lg md:text-5xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight">
              I help <span className="text-secondary">Punjabi Men</span> who are
              tired of struggling with 'poor sleep & stress-linked weight gain'
              to lose 10-12 kgs of stubborn belly fat in 90 days
            </h1>

            <p className="text-sm md:text-xl font-medium mb-3 md:mb-4">
              and achieve a{" "}
              <span className="text-secondary">lean, confident physique</span>{" "}
              while developing sustainable fitness habits using my P.O.W.E.R.
              Framework
            </p>

            <p className="text-sm md:text-lg mb-6 md:mb-8">
              with personalized nutrition plans, efficient strength training, &
              accountability support...
            </p>

            <p className="text-sm md:text-lg font-medium mb-6 md:mb-8">
              Using my 30+ client-proven P.O.W.E.R. Framework
            </p>
            {/* ✅ Wistia Embed */}
            <div className="w-full mt-6 md:mt-10 mb-4 md:mb-8">
              <div
                className="wistia_responsive_padding"
                style={{ padding: "56.25% 0 0 0", position: "relative" }}
              >
                <div
                  className="wistia_responsive_wrapper"
                  style={{
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%",
                  }}
                >
                  <iframe
                    src="https://fast.wistia.net/embed/iframe/z6wqp9mnrh"
                    title="Wistia video player"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    width="100%"
                    height="100%"
                    frameBorder="0"
                  ></iframe>
                </div>
              </div>
            </div>
            <a
              href="#booking"
              className="inline-block bg-secondary text-white px-6 md:px-8 py-3 md:py-4 rounded-md text-sm md:text-lg font-bold hover:bg-opacity-90 transition-all shadow-md"
            >
              YES, I WANT TO LOSE FAT, GAIN MUSCLE & LOOK MUSCULAR!
            </a>

            <p className="mt-3 md:mt-4 text-[10px] md:text-sm text-[#888888] italic">
              ~ For Punjabi Men ONLY!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
