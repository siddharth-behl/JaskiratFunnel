import { transformations } from "@/data/transformations";

export default function ResultsSection() {
  return (
    <section id="results" className="section py-5 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          <span className="text-secondary">Transformation</span> of a Few of My
          Clients Just Like You...
        </h2>

        <p className="text-center text-lg mb-12">
          Clients' <strong>RESULTS</strong> with my personalized fitness
          coaching...
        </p>

        {/* Transformations Grid - Stylish Before/After Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {transformations.map((transformation, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative">
                {/* Cool Before/After Comparison UI */}
                <div className="relative aspect-square">
                  {/* BEFORE */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden border-r-2 border-white">
                    <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded">
                      BEFORE
                    </div>
                    <img
                      src={transformation.beforeImg}
                      alt="Before"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  normal   {/* AFTER */}
                  <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
                    <div className="absolute top-2 right-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded">
                      AFTER
                    </div>
                    {/* <img
                      src={transformation.afterImg}
                      alt="After"
                      className="w-full h-full object-cover"
                    /> */}
                  </div>

                  {/* Middle badge */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-secondary text-white font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                      {transformation.weightLoss}
                    </div>
                  </div>
                </div>

                {/* Text content */}
                {/* <div className="p-6">
                  <h3 className="font-bold text-xl mb-3">
                    {transformation.name}, {transformation.profession}
                  </h3>
                  <p className="text-[#555]">{transformation.testimonial}</p>
                </div> */}
              </div>
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
            ~ For Corporate Professionals ONLY!
          </p>
        </div>
      </div>
    </section>
  );
}
