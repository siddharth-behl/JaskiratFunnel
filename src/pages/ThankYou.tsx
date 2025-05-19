import { useEffect } from "react";
import { Link } from "wouter";
import { CheckIcon } from "lucide-react";
import Footer from "@/components/Footer";

export default function ThankYou() {
  useEffect(() => {
    const wistiaScript = document.createElement("script");
    wistiaScript.src = "https://fast.wistia.com/player.js";
    wistiaScript.async = true;
    document.body.appendChild(wistiaScript);

    const embedScript = document.createElement("script");
    embedScript.src = "https://fast.wistia.com/embed/z6wqp9mnrh.js";
    embedScript.type = "module";
    embedScript.async = true;
    document.body.appendChild(embedScript);

    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      wistia-player[media-id='z6wqp9mnrh']:not(:defined) {
        background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/z6wqp9mnrh/swatch');
        display: block;
        filter: blur(5px);
        padding-top: 56.25%;
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      // Optional cleanup
      document.body.removeChild(wistiaScript);
      document.body.removeChild(embedScript);
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="flex-grow flex items-center justify-center py-16 mx-auto">
        <div className="text-center w-full px-4 max-w-3xl">
          <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckIcon className="h-12 w-12 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">Congratulations!!</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Your Application has been Submitted</h2>

          <div className="text-left mx-auto mb-8">
            <h3 className="font-bold text-xl mb-4 text-secondary">PLEASE READ THE GUIDELINES BELOW:</h3>

            <p className="mb-4">
              In just a few seconds, you will receive a meeting invitation via email, so:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>Check your email inbox (including spam or promotions folders if necessary)</li>
              <li>Save the meeting details to your Google Calendar</li>
            </ul>

            <p className="mb-4">For our meeting to be productive, please ensure you have:</p>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>A laptop with stable internet connectivity</li>
              <li>A quiet, distraction-free environment</li>
              <li>Materials for note-taking (pen and paper)</li>
            </ul>

            <p className="mb-6">
              I will dedicate 60 minutes to helping you. I'll highly appreciate it if you show up on time.
            </p>

            <p className="mb-8">I look forward to our meeting.</p>

            <p className="font-semibold mb-8">
              Jaskirat Singh (Fat Loss Coach & Body Transformation Specialist)
            </p>

            <h3 className="font-bold text-xl mb-4 text-secondary">Here's Your 3 Most Important Steps Before Our Call:</h3>
            <p className="mb-6">
              Watch This Quick Bonus Training: 3 Secrets to achieve a lean, confident physique while developing sustainable fitness habits using my P.O.W.E.R. Framework
            </p>

            {/* 🎥 Wistia Video Embed */}
            <div className="w-full mb-8">
              <wistia-player media-id="z6wqp9mnrh" aspect="1.7777777777777777"></wistia-player>
            </div>

            <p className="text-sm text-gray-500 italic">
              This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of META, Inc
            </p>
          </div>

          <Link href="/">
            <a className="inline-block bg-secondary text-white px-6 py-3 rounded-md font-bold hover:bg-opacity-90 transition-all">
              Return to Home
            </a>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
