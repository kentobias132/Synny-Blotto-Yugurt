import Image from "next/image";
import Link from "next/link";
import React from "react";

function WhyUs() {
  return (
    <div className="max-w-7xl font-fira mx-auto pt-6 px-4 md:px-8 lg:px-16">
      <h1 className="text-center text-xl md:text-2xl lg:text-4xl">Why Us?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
        <div className="relative">
          <div className="relative z-10">
            <img
              src="/cherryyogurt.png"
              alt="main image"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="absolute inset-0 z-20">
            <div className="absolute top-40 right-32 w-24 h-24 animate-float-delayed">
              <img src="/Strawberry.png" alt="peach" />
            </div>
            <div className="absolute bottom-56 left-10 w-24 h-24 animate-float">
              <img src="/Strawberry1.png" alt="peach" />
            </div>
            <div className="absolute bottom-32 right-16 w-24 h-24 animate-float">
              <img src="/Strawberry2.png" alt="leaf" />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-gray-600 max-w-lg">
            Greek Yogurt is healthier than regular yogurt. It's made with live
            active cultures and is an excellent source of calcium for healthy
            bones.
          </p>{" "}
          {/* <br /> */}
          <p className="text-gray-600 max-w-lg">
            It's high in protein and low in sugar, which makes it perfect for
            breakfast, lunch, or dinner! Greek yogurt is made by straining out
            the whey from regular yogurt. This results in a thicker, creamier
            product that's higher in protein and lower in sugar than regular
            yogurt. Greek yogurt is also much more versatile than regular
            yogurt. It can be used in a variety of recipes, from breakfast
            dishes to desserts.
          </p>
          <p className="text-gray-600 max-w-lg">
            <a href="/" className="text-[#F26666]">
              Help site.
            </a>{" "}
            Help site is the complete source to solve all your worries and
            problems. It has everything you need to achieve your goal.
          </p>
          <p className="text-gray-600 max-w-lg">
            <a href="/" className="text-[#F26666]">
              Community.
            </a>{" "}
            Community site is a fantastic new way to gain support from us.
            Gather and share advice, guidance, and ideas with like-minded
            people. With Community site, the power is in the hands of the
            people!
          </p>
          <p className="text-gray-600 max-w-lg">
            <a href="/" className="text-[#F26666]">
              Contact us.
            </a>{" "}
            Contact us if you have any questions! This site is managed by the
            community and relies on the support of users as well as donations.
            Questions related to our product? Contact our community manager at
            the link below.
          </p>
          <button className="bg-[#F26666] py-1.5 px-8 hover:bg-red-500 rounded-xl text-white transition-colors ">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
