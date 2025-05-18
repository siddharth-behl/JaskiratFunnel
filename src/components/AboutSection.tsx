export default function AboutSection() {
  return (
    <section id="about" className="section py-8 md:py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          This is Where <span className="text-secondary">I Help</span>
        </h2>
        
        <div className="flex flex-col items-center gap-8 md:gap-16">
          {/* Coach Image - Now centered at the top */}
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-secondary">
              <img 
                src="/profile2nd.png" 
                alt="Fitness Coach" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Coach Info */}
          <div className="w-full md:max-w-3xl mx-auto text-center">
            <h3 className="font-bold text-xl md:text-2xl mb-4">I'm Jaskirat – a Fat Loss Coach & Body Transformation Specialist</h3>
            
            <p className="mb-6 text-lg">
              As a certified Fitness Coach & Nutritionist with FBA (ENU level 1) certification, I understand the unique challenges that Punjabi professionals face in their fitness journey.
            </p>
            
            <p className="mb-6 text-lg">
              My own transformation story during the 2020 lockdown, overcoming depression, sleep issues, and body image struggles, drives my passion to help others.
            </p>
            
            <p className="mb-8 text-lg font-semibold">
              I've helped numerous Punjabi men transform their bodies and reclaim their confidence using my proven P.O.W.E.R. Framework.
            </p>
            
            <h3 className="font-bold text-xl mb-6">INTRODUCING THE P.O.W.E.R. FRAMEWORK</h3>
            <p className="mb-4 font-semibold text-lg text-secondary">Here's What Makes My P.O.W.E.R. Framework Different:</p>
            
            <ul className="space-y-6 mb-8 text-left">
              <li>
                <h4 className="font-bold">Personal Goal Setting:</h4>
                <p>Customized fitness plans that align with your professional and personal life</p>
              </li>
              <li>
                <h4 className="font-bold">Optimize Daily Habits:</h4>
                <p>Time-efficient workouts and practical nutrition strategies that fit your busy schedule</p>
              </li>
              <li>
                <h4 className="font-bold">Win with Nutrition:</h4>
                <p>Enjoy traditional Punjabi food while still achieving your fitness goals</p>
              </li>
              <li>
                <h4 className="font-bold">Elevate Energy & Mood:</h4>
                <p>Improve sleep, reduce stress, and boost productivity naturally</p>
              </li>
              <li>
                <h4 className="font-bold">Results-Driven Accountability:</h4>
                <p>Regular check-ins and adjustments to ensure consistent progress</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
