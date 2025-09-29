import React from "react";
import Button from "../Button/Button";
import { useTheme } from "../../hooks/useTheme";

export default function Company() {
  const { isDark } = useTheme();
  
  return (
    <>
      <section className={`relative py-32 transition-colors duration-300 ${
        isDark ? 'bg-[#18191B]' : 'bg-gray-50'
      }`}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap items-center -mx-4 ">
            <div className="w-full lg:w-5/12 px-4 mb-12 lg:mb-0 g-8">
              <div className="text-center lg:text-left gap-5 flex flex-col items-center md:items-start ">
                <Button />
                <h2 className={`text-4xl lg:text-5xl font-bold leading-tight transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Trusted Our Company
                </h2>
                <p className={`text-lg transition-colors duration-300 ${
                  isDark ? 'text-[#9E9FA0]' : 'text-gray-600'
                }`}>
                  We are a{" "}
                  <span className={`font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Digital Creative agency
                  </span>{" "}
                  with 25 years of experience, specializing in delivering
                  cutting-edge
                </p>
              </div>
            </div>

            {/* Clients Grid */}
            <div className="w-full lg:w-7/12 px-4">
              <div className="grid grid-cols-3 ">
                <div className="client-item border border-gray-200 dark:border-[#313131] py-[58px] px-[20px] text-center hover:border-primary transition-colors">
                  <img
                    src="./src/assets/client6.png"
                    alt="Client"
                    className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>

                <div className="client-item border border-gray-200 dark:border-[#313131] py-[58px] px-[20px] text-center hover:border-primary transition-colors">
                  <img
                    src="./src/assets/client5.png"
                    alt="Client"
                    className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>

                <div className="client-item border border-gray-200 dark:border-[#313131] py-[58px] px-[20px] text-center hover:border-primary transition-colors">
                  <img
                    src="./src/assets/client4.png"
                    alt="Client"
                    className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>

                <div className="client-item border border-gray-200 dark:border-[#313131] py-[58px] px-[20px] text-center hover:border-primary transition-colors">
                  <img
                    src="./src/assets/client3.png"
                    alt="Client"
                    className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>

                <div className="client-item border border-gray-200 dark:border-[#313131] py-[58px] px-[20px] text-center hover:border-primary transition-colors">
                  <img
                    src="./src/assets/client2.png"
                    alt="Client"
                    className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>

                <div className="client-item border border-gray-200 dark:border-[#313131] py-[58px] px-[20px] text-center hover:border-primary transition-colors">
                  <img
                    src="./src/assets/client1.png"
                    alt="Client"
                    className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
