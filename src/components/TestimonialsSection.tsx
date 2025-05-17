import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section py-16 md:py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-16">
          Hear From <span className="text-secondary">My Clients</span>
        </h2>
        
        {/* Video Testimonials with Before/After Details */}
        <div className="grid grid-cols-1 gap-12 mb-16">
          {testimonials.videoTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Video Side */}
                <div className="aspect-video md:aspect-auto">
                  {testimonial.videoId ? (
                    <iframe 
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                      title={`${testimonial.name} Testimonial`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-r from-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-4xl text-secondary mb-2">🏆</div>
                        <p className="font-bold">Success Story</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Details Side */}
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-4">{testimonial.name} - {testimonial.profession}</h3>
                  <p className="text-[#555] italic mb-6">{testimonial.quote}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Initial Challenges */}
                    <div>
                      <h4 className="font-semibold text-lg text-primary mb-2">Initial Challenges:</h4>
                      <ul className="space-y-1">
                        {testimonial.challenges.map((challenge, i) => (
                          <li key={i} className="flex">
                            <span className="text-secondary mr-2">→</span>
                            <span className="text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-lg text-primary mb-2">Transformation/Results:</h4>
                      <ul className="space-y-1">
                        {testimonial.results.map((result, i) => (
                          <li key={i} className="flex">
                            <span className="text-secondary mr-2">→</span>
                            <span className="text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="#booking" 
            className="inline-block bg-secondary text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-opacity-90 transition-all shadow-md"
          >
            YES, I WANT RESULTS LIKE THESE!
          </a>
        </div>
      </div>
    </section>
  );
}
