import { transformations } from "@/data/transformations";

export default function ResultsSection() {
  return (
    <section id="results" className="section py-5 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 leading-snug">
          <span className="italic text-black">Client </span>
          <span className="italic text-red-600 font-bold">Wins...</span>
        </h2>

        <p className="text-center text-xl md:text-2xl text-gray-700 mb-14">
          What clients have to say about <br className="hidden sm:block" />{" "}
          their progress...
        </p>

        {/* Screenshots Grid */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {transformations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg w-[20rem] shadow-md overflow-hidden hover:shadow-xl transition-all p-4 "
            >
              <img
                src={item.screenshot}
                alt={`Client Result ${index + 1}`}
                className="w-full h-full object-cover rounded-lg "
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
