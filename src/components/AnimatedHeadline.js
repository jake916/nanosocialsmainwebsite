"use client";

import { useState, useEffect } from "react";

export default function AnimatedHeadline() {
  const finalPart1 = "Open a campaign. ";
  const finalPart2 = "Watch creators run it.";
  const fullFinalText = finalPart1 + finalPart2;

  // Phases: 'typing' -> 'done'
  const [phase, setPhase] = useState("typing");
  const [typeProgress, setTypeProgress] = useState(0); // 0 to fullFinalText.length

  useEffect(() => {
    let intervalId;

    if (phase === "typing") {
      let current = 0;
      intervalId = setInterval(() => {
        current += 1;
        setTypeProgress(current);
        if (current >= fullFinalText.length) {
          clearInterval(intervalId);
          setPhase("done");
        }
      }, 40);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [phase, fullFinalText.length]);

  // Click to fast-forward to done
  const handleSkip = () => {
    setPhase("done");
    setTypeProgress(fullFinalText.length);
  };

  return (
    <div
      onClick={handleSkip}
      title="Click to lock headline"
      className="relative min-h-[90px] sm:min-h-[110px] md:min-h-[125px] lg:min-h-[148px] flex items-center justify-center cursor-pointer select-none"
    >
      <h1 className="nano-pixel text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-normal leading-[0.98] tracking-[0.02em] text-white m-0 text-center relative inline-block">
        {/* Part 1: "Open a campaign. " */}
        <span className="text-white">
          {fullFinalText.slice(0, Math.min(typeProgress, finalPart1.length))}
        </span>

        {/* Part 2: "Watch creators run it." (in #fed701 yellow) */}
        {typeProgress > finalPart1.length && (
          <span className="text-[#fed701]">
            {fullFinalText.slice(
              finalPart1.length,
              Math.min(typeProgress, fullFinalText.length)
            )}
          </span>
        )}

        {/* Blinking block text cursor while typing or right after */}
        <span className="inline-block w-2.5 sm:w-3.5 lg:w-4 h-7 sm:h-10 lg:h-14 bg-[#fed701] ml-2 align-middle animate-pulse" />
      </h1>
    </div>
  );
}
