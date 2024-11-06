"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./pageComponents/Header";
import Hero from "./pageComponents/Hero";
import Products from "./pageComponents/Products";
import WhyUs from "./pageComponents/WhyUs";
import Faq from "./pageComponents/Faq";
import Footer from "./pageComponents/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Products />
      <WhyUs />
      <Faq />
      <Footer />
    </main>
  );
}

// import "./globals.css";
// import React, { useRef, useEffect } from "react";
// // import clsx from "clsx";
// import Header from "./pageComponents/Header";
// import Hero from "./pageComponents/Hero";
// import Products from "./pageComponents/Products";
// import WhyUs from "./pageComponents/WhyUs";
// import Faq from "./pageComponents/Faq";
// import Footer from "./pageComponents/Footer";

// export default function Home() {
//   const pageRef = useRef(null);

//   useEffect(() => {
//     const pageElements = pageRef.current.querySelectorAll("[data-animate]");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("animate-fade-in");
//           } else {
//             entry.target.classList.remove("animate-fade-in");
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     pageElements.forEach((element) => {
//       observer.observe(element);
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <main ref={pageRef}>
//       <Header data-animate />
//       <Hero data-animate />
//       <Products data-animate />
//       <WhyUs data-animate />
//       <Faq data-animate />
//       <Footer data-animate />
//     </main>
//   );
// }
