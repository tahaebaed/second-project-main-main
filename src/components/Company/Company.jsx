import React from "react";
import Button from "../Button/Button";

export default function Company() {
  return (
    <>
      <section className=" relative py-32 bg-[#18191B] transition-colors duration-300">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap items-center -mx-4 ">
            <div className="w-full lg:w-5/12 px-4 mb-12 lg:mb-0 g-8">
              <div className="text-center lg:text-left gap-5 flex flex-col items-center md:items-start ">
                <Button />
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Trusted Our Company
                </h2>
                <p className="text-[#9E9FA0] text-lg">
                  We are a{" "}
                  <span className="text-white font-semibold">
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
                <div className="client-item border border-[#313131] py-[58px] px-[20px] text-center hover:border-primary transition-colors">
                  <img
                    src="./src/assets/client6.png"
                    alt="Client"
                    className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>

                <div className="client-item border border-[#313131] py-[58px] px-[20px] text-center hover:border-primary transition-colors">
                  <img
                    src="./src/assets/client5.png"
                    alt="Client"
                    className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>

                <div className="client-item border border-[#313131] py-[58px] px-[20px] text-center hover:border-primary transition-colors">
                  <img
                    src="./src/assets/client4.png"
                    alt="Client"
                    className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>

                <div className="client-item border border-[#313131] py-[58px] px-[20px] text-center hover:border-primary transition-colors">
                  <img
                    src="./src/assets/client3.png"
                    alt="Client"
                    className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>

                <div className="client-item border border-[#313131] py-[58px] px-[20px] text-center hover:border-primary transition-colors">
                  <img
                    src="./src/assets/client2.png"
                    alt="Client"
                    className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>

                <div className="client-item border border-[#313131] py-[58px] px-[20px] text-center hover:border-primary transition-colors">
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
