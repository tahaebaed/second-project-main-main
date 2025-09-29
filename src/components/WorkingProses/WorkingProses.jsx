import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export default function WorkingProcess() {
  const { isDark } = useTheme();

  const steps = [
    {
      number: "01",
      title: "Research",
      description: "In-depth research to uncover insights and drive informed"
    },
    {
      number: "02",
      title: "Concept Design",
      description: "Creative concept designs that transform ideas into impactful"
    },
    {
      number: "03",
      title: "Implementation",
      description: "Efficient implementation of the tailored strategies to achieve"
    },
    {
      number: "04",
      title: "Testing",
      description: "Testing to ensure flawless functionality and optimal user"
    }
  ];

  return (
    <div
      className={`min-h-screen px-8 py-16 flex flex-col items-center justify-center transition-colors duration-300 
      ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      {/* Header Badge */}
      <div className="mb-8">
        <span
          className={`border px-5 py-1.5 rounded-full text-xs font-normal 
          ${isDark ? "border-[#9CFE4F] text-[#9CFE4F]" : "border-green-500 text-green-600"}`}
        >
          Working Process
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-20 leading-tight">
        The Process Behind the
        <br />Magic Step by Step
      </h1>

      {/* Steps Container */}
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Horizontal Line - Desktop Only */}
          <div
            className={`hidden lg:block absolute top-[18px] left-[1%] right-[1%] h-[1px] 
            ${isDark ? "bg-zinc-800" : "bg-gray-300"}`}
          ></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              {/* Step Number Badge with Line */}
              <div className="flex flex-col items-center">
                <div
                  className={`relative z-10 px-4 py-1.5 rounded-full text-xs font-semibold 
                  ${isDark ? "bg-[#9CFE4F] text-black" : "bg-green-500 text-white"}`}
                >
                  Step {step.number}
                </div>
                <div
                  className={`w-[1px] h-16 
                  ${isDark ? "bg-zinc-800" : "bg-gray-300"}`}
                ></div>
              </div>

              {/* Card */}
              <div
                className={`rounded p-6 min-h-[240px] flex flex-col items-center justify-center text-center border transition-colors duration-300
                ${isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-200 shadow-md"}`}
              >
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p
                  className={`text-sm leading-relaxed 
                  ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
