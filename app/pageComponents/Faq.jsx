"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, ChevronDownCircle, ChevronUp } from "lucide-react";

function Faq() {
  const faqData = [
    {
      question: "Greek yogurt is healthy?",
      answer:
        "Yes, Greek yogurt is very healthy! It's high in protein, contains beneficial probiotics, and is an excellent source of calcium. It's also lower in lactose and contains essential nutrients like vitamin B12, potassium, and zinc.",
    },
    {
      question: "Why greek yogurt is natural?",
      answer:
        "Greek yogurt is natural because it's made through traditional straining methods that remove excess whey, resulting in a thicker consistency. It contains no artificial preservatives or additives, just milk and live bacterial cultures.",
    },
    {
      question: "Why our product is the best choice for you?",
      answer:
        "Our Greek yogurt stands out because of its authentic preparation method, high-quality ingredients, and rich, creamy texture. We maintain strict quality control and use only the finest milk sources, resulting in a product that's both delicious and nutritious.",
    },
    {
      question: "How yogurt affects health?",
      answer:
        "Yogurt positively affects health in multiple ways: it promotes gut health through probiotics, supports immune function, aids in digestion, helps maintain bone health through calcium content, and can contribute to weight management due to its protein content.",
    },
  ];

  // const [isQuestOpen, setIsQuestOpen] = useState(-1);

  // const handleAccordionClick = (index) => {
  //   setIsQuestOpen(isQuestOpen === index ? -1 : index);
  // };

  return (
    <section data-aos="fade-up">
      <div className="max-w-7xl font-fira mx-auto pt-20 px-4 md:px-8 lg:px-16">
        <h1 className="text-center text-xl md:text-2xl lg:text-4xl">FAQ</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8 md:py-0">
          <div className="space-y-6">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger
                    data-aos="fade-up"
                    className="text-left flex items-center justify-between"
                  >
                    {item.question}
                    {/* <ChevronDown className="w-5 h-5 text-rose-500 " /> */}
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/Cherryyogurt22.png"
                alt="main image"
                data-aos="fade-left"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="absolute inset-0 z-20">
              <div className="absolute bottom-32 left-28  md:bottom-40 md:left-52 w-24 h-24 animate-float-delayed">
                <img src="/cherry.png" alt="peach" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
