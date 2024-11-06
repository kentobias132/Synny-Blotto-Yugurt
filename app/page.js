import React from "react";
import Header from "./pageComponents/Header";
import Hero from "./pageComponents/Hero";
import Products from "./pageComponents/Products";
import WhyUs from "./pageComponents/WhyUs";
import Faq from "./pageComponents/Faq";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Products />
      <WhyUs />
      <Faq />
    </main>
  );
}
