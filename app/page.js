import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import Faq from "./components/Faq";

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
