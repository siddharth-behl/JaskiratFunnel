import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function FloatingButton() {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Only show on desktop after scrolling a bit
    if (isMobile) return;
    
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);
  
  if (isMobile || !isVisible) return null;
  
  return (
    <a 
      href="#booking" 
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-secondary text-white py-10 px-3 font-bold tracking-wider text-lg hover:bg-opacity-90 transition-all shadow-lg writing-mode-vertical-rl transform rotate-180"
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'translateY(-50%) rotate(180deg)' }}
    >
      BOOK CALL NOW
    </a>
  );
}
