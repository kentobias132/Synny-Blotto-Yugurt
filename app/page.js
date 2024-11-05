import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Products />
      <WhyUs />
    </main>
  );
}
