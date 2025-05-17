export default function FrameworkSection() {
  return (
    <section id="framework" className="section py-16 md:py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-16">
          Transform Your Health with My <span className="text-secondary">P.O.W.E.R. Framework</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl mb-6">
              I'm Jaskirat – a Fat Loss Coach & Body Transformation Specialist who understands 
              the unique challenges that Punjabi professionals face in their fitness journey.
            </p>
            
            <p className="mb-6">
              Click below to schedule your FREE Strategy Call and discover how to transform your health 
              while maintaining your Punjabi lifestyle and professional success.
            </p>
            
            <a 
              href="#booking" 
              className="inline-block bg-secondary text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-opacity-90 transition-all shadow-md"
            >
              SCHEDULE MY FREE STRATEGY CALL NOW
            </a>
          </div>
          
          <div className="grid grid-cols-1 gap-8 mt-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-secondary">The P.O.W.E.R. Framework That Gets Results</h3>
              
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/6">
                    <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      P
                    </div>
                  </div>
                  <div className="md:w-5/6">
                    <h4 className="text-lg font-bold">Personal Goal Setting</h4>
                    <p>Customized fitness plans that align with your professional and personal life</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/6">
                    <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      O
                    </div>
                  </div>
                  <div className="md:w-5/6">
                    <h4 className="text-lg font-bold">Optimize Daily Habits</h4>
                    <p>Time-efficient workouts and practical nutrition strategies that fit your busy schedule</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/6">
                    <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      W
                    </div>
                  </div>
                  <div className="md:w-5/6">
                    <h4 className="text-lg font-bold">Win with Nutrition</h4>
                    <p>Enjoy traditional Punjabi food while still achieving your fitness goals</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/6">
                    <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      E
                    </div>
                  </div>
                  <div className="md:w-5/6">
                    <h4 className="text-lg font-bold">Elevate Energy & Mood</h4>
                    <p>Improve sleep, reduce stress, and boost productivity naturally</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/6">
                    <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      R
                    </div>
                  </div>
                  <div className="md:w-5/6">
                    <h4 className="text-lg font-bold">Results-Driven Accountability</h4>
                    <p>Regular check-ins and adjustments to ensure consistent progress</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}