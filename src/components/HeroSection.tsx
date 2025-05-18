import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="bg-[#F5F5F5] py-4 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-2 md:gap-16">
          {/* Hero Image - Now on top and centered */}
          <div className="flex justify-center">
            <div className="w-64 h-64 md:w-64 md:h-64 rounded-full overflow-hidden ">
              <img
                src="/Jaskirat.png"
                alt="Fitness Coach"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="w-full text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-6 leading-tight">
              I help <span className="text-secondary">Punjabi Men</span> who are
              tired of struggling with 'poor sleep & stress-linked weight gain'
              to lose 10-12 kgs of stubborn belly fat in 90 days
            </h1>

            <p className="text-lg md:text-xl font-medium mb-4">
              and achieve a{" "}
              <span className="text-secondary">lean, confident physique</span>{" "}
              while developing sustainable fitness habits using my P.O.W.E.R.
              Framework
            </p>

            <p className="text-base md:text-lg mb-8">
              with personalized nutrition plans, efficient strength training, &
              accountability support...
            </p>

            <p className="text-base md:text-lg font-medium mb-8">
              Using my 10+ client-proven P.O.W.E.R. Framework
            </p>

            <a
              href="#booking"
              className="inline-block bg-secondary text-white px-8 py-4 rounded-md text-base md:text-lg font-bold hover:bg-opacity-90 transition-all shadow-md"
            >
              YES, I WANT TO LOSE FAT, GAIN MUSCLE & LOOK MUSCULAR!
            </a>

            <p className="mt-4 text-xs md:text-sm text-[#888888] italic">
              ~ For Punjabi Men ONLY!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
