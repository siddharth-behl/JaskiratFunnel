import { useLocation } from "wouter";

export default function BookingSection() {
  const [, navigate] = useLocation();

  return (
    <section id="booking" className="section py-16 md:py-24">
      <div className="container mx-auto px-1 md:px-1">
        <div className="bg-yellow-300 p-1 md:p-12 rounded-xl">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
            Book Your 60-Minute Fitness Strategy Call
          </h2>
          
          <p className="text-center mb-4 max-w-2xl mx-auto">
            Schedule your consultation, answer a few questions about your goals, and take the first step
            toward your fitness transformation.
          </p>
          
          <p className="text-center font-bold mb-8">
            ~ For Corporate Professionals ONLY!
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-2 rounded-lg md:p-12 shadow-lg w-full">
              <div className="text-center mb-6">
                <h3 className="font-bold text-xl text-secondary mb-4">
                  Select a Date & Time That Works For You
                </h3>
                <p className="text-[#555] mb-6">
                  Choose any available slot in my calendar and let's discuss how we can help you achieve your fitness goals.
                </p>
              </div>
              
              {/* Cal.com Embed */}
              <div 
                className="cal-embed-container w-full"
                style={{position: 'relative', height: '600px', overflow: 'hidden'}}
              >
                <iframe 
                  src="https://cal.com/trainedbyjas/strategy-call"
                  width="100%"
                  height="100%"
                  style={{
                    border: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                  }}
                  title="Schedule a strategy call"
                />
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-sm text-[#888888]">
                  After scheduling, you'll receive a confirmation email with all the details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
