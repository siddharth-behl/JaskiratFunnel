import { transformations } from "@/data/transformations";

export default function ResultsSection() {
  return (
    <section id="results" className="section py-5 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          <span className="text-secondary">Results</span> From Clients Just Like You
        </h2>

        <p className="text-center text-lg mb-12">
          Screenshots of <strong>REAL RESULTS</strong> from my personalized fitness coaching...
        </p>

        {/* Screenshots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {transformations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all"
            >
              <img
                src={item.screenshot}
                alt={`Client Result ${index + 1}`}
                className="w-full h-full object-cover "
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#booking"
            className="inline-block bg-secondary text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-opacity-90 transition-all shadow-md"
          >
            YES, I WANT TO LOSE FAT, GAIN MUSCLE & LOOK MUSCULAR!
          </a>
          <p className="mt-4 text-sm text-[#888888] italic">
            ~ For Punjabi Men ONLY!
          </p>
        </div>
      </div>
    </section>
  );
}
