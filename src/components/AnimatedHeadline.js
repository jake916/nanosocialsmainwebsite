"use client";

import { useState, useEffect, useRef } from "react";

export default function AnimatedHeadline() {
  const initialText = "Pay the influencer and hope.";
  const finalPart1 = "Open a campaign. ";
  const finalPart2 = "Watch creators run it.";
  const fullFinalText = finalPart1 + finalPart2;

  // Phases: 'idle' -> 'showing-old' -> 'selecting' -> 'selected' -> 'cleared' -> 'typing' -> 'done'
  const [phase, setPhase] = useState("showing-old");
  const [selectProgress, setSelectProgress] = useState(0); // 0 to initialText.length
  const [typeProgress, setTypeProgress] = useState(0); // 0 to fullFinalText.length
  const [cursorVisible, setCursorVisible] = useState(false);

  useEffect(() => {
    let timeoutId;
    let intervalId;

    if (phase === "showing-old") {
      // Show old text for 1.2s before cursor appears
      setSelectProgress(0);
      setTypeProgress(0);
      setCursorVisible(false);

      timeoutId = setTimeout(() => {
        setCursorVisible(true);
        setPhase("selecting");
      }, 1200);
    } else if (phase === "selecting") {
      // Drag cursor across characters from left to right (or right to left)
      let current = 0;
      intervalId = setInterval(() => {
        current += 1;
        setSelectProgress(current);
        if (current >= initialText.length) {
          clearInterval(intervalId);
          setPhase("selected");
        }
      }, 45);
    } else if (phase === "selected") {
      // Hold the full selection highlight for 350ms (simulating the backspace tap)
      timeoutId = setTimeout(() => {
        setCursorVisible(false);
        setPhase("cleared");
      }, 350);
    } else if (phase === "cleared") {
      // Short pause before starting to type
      timeoutId = setTimeout(() => {
        setPhase("typing");
      }, 250);
    } else if (phase === "typing") {
      // Type out character by character
      let current = 0;
      intervalId = setInterval(() => {
        current += 1;
        setTypeProgress(current);
        if (current >= fullFinalText.length) {
          clearInterval(intervalId);
          setPhase("done");
        }
      }, 40);
    } else if (phase === "done") {
      // Hold the finished headline for 9 seconds before cycling again
      timeoutId = setTimeout(() => {
        setPhase("showing-old");
      }, 9000);
    }

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [phase, fullFinalText.length, initialText.length]);

  // Click to fast-forward to done
  const handleSkip = () => {
    setPhase("done");
    setTypeProgress(fullFinalText.length);
    setCursorVisible(false);
  };

  return (
    <div
      onClick={handleSkip}
      title="Click to lock headline"
      className="relative min-h-[90px] sm:min-h-[110px] md:min-h-[125px] lg:min-h-[148px] flex items-center justify-center cursor-pointer select-none"
    >
      <h1 className="nano-pixel text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-normal leading-[0.98] tracking-[0.02em] text-white m-0 text-center relative inline-block">
        {/* State 1: Showing or Selecting the old text */}
        {(phase === "showing-old" || phase === "selecting" || phase === "selected") && (
          <span className="relative inline-block text-white">
            {/* Highlighted selected slice */}
            <span className="bg-[#fed701] text-[#0c0a0b] px-1 py-0.5 box-decoration-clone">
              {initialText.slice(0, selectProgress)}
            </span>
            {/* Unselected remaining slice */}
            <span className="text-[#a9a4a0]">
              {initialText.slice(selectProgress)}
            </span>

            {/* Retro Pixel Mouse Pointer that tracks selection */}
            {cursorVisible && (
              <span
                className="absolute top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-75 z-20"
                style={{
                  left: `${(selectProgress / initialText.length) * 100}%`,
                }}
              >
                <svg
                  width="26"
                  height="30"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="nano-pixelated drop-shadow-[2px_3px_0_rgba(0,0,0,0.9)] -translate-x-1 -translate-y-1"
                >
                  <path
                    d="M1 1V17L5 13L8 19L11 17.5L8 11.5L13.5 11.5L1 1Z"
                    fill="#ffffff"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinejoin="miter"
                  />
                </svg>
              </span>
            )}
          </span>
        )}

        {/* State 2: Cleared (empty with text caret) */}
        {phase === "cleared" && (
          <span className="inline-block w-3 sm:w-4 lg:w-5 h-8 sm:h-12 lg:h-16 bg-[#fed701] align-middle animate-pulse" />
        )}

        {/* State 3: Actively Typing or Completed */}
        {(phase === "typing" || phase === "done") && (
          <>
            {/* Part 1: "Open a campaign. " */}
            <span className="text-white">
              {fullFinalText
                .slice(0, Math.min(typeProgress, finalPart1.length))}
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
          </>
        )}
      </h1>
    </div>
  );
}
