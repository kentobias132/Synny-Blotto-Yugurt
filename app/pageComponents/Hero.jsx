import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section data-aos="fade-up">
      <div className="min-h-screen pt-16 bg-rose-50/30 ">
        <div className="max-w-7xl font-fira mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-shadow-default leading-tight">
                Take The World's <br />
                <span className="text-3xl md:text-4xl lg:text-5xl font-light">
                  Best Yogurt
                </span>
              </h1>
              <p className="text-gray-600 max-w-lg">
                Greek Yogurt is a unique traditional product which contains no
                additives and preservatives. It is a healthy appetit, source of
                energy and the best way to start the day.
              </p>
              <button className="bg-[#F26666] py-1.5 px-8 hover:bg-red-500 rounded-xl text-white transition-colors ">
                Buy now
              </button>
              <div className="flex space-x-6 pt-6">
                <Link href="#" className=" text-[#FF6B6B] hover:text-rose-500">
                  <Image src={"/Instagram.png"} width={20} height={20} />
                </Link>
                <Link href="#" className=" text-[#FF6B6B] hover:text-rose-500">
                  <Image src={"/Facebook.png"} width={20} height={20} />
                </Link>
                <Link href="#" className=" text-[#FF6B6B] hover:text-rose-500">
                  <Image src={"/Google.png"} width={18} height={18} />
                </Link>
              </div>
            </div>
            <div className=" hidden md:block relative">
              <div className="relative z-10">
                <img
                  src="/Yogurthead433.png"
                  alt="main image"
                  data-aos="fade-left"
                  className="w-full  h-auto object-contain"
                />
              </div>
              <div className="absolute inset-0 z-20">
                <div className="absolute -top-5 left-8 w-24 h-24 animate-float">
                  <img
                    src="/leaf3.png"
                    alt="leaf"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute top-16 left-32 w-24 h-24 animate-float-delayed">
                  <img src="/peach.png" alt="peach" />
                </div>
                <div className="absolute bottom-40 left-10 w-24 h-24 animate-float">
                  <img src="/peach2.png" alt="peach" />
                </div>
                <div className="absolute bottom-10 left-0 w-24 h-24 animate-float-delayed">
                  <img src="/leaf.png" alt="leaf" />
                </div>
                <div className="absolute top-5 right-8 w-24 h-24 animate-float-delayed">
                  <img src="/leaf1.png" alt="leaf" />
                </div>
                <div className="absolute top-32 right-24 w-24 h-24 animate-float">
                  <img src="/peach3.png" alt="peach" />
                </div>
                <div className="absolute bottom-48 right-0 w-24 h-24 animate-float-delayed">
                  <img src="/leaf2.png" alt="leaf" />
                </div>
                <div className="absolute bottom-6 right-8 w-24 h-24 animate-float">
                  <img src="/peach1.png" alt="peach" />
                </div>
              </div>
            </div>
            <div className="  md:hidden relative">
              <div className="relative z-10">
                <img
                  src="/YogurtHEAD441.png"
                  alt="main image"
                  data-aos="fade-left"
                  className="w-full  h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
