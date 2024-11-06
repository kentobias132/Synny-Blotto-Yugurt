import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 font-fira">
      <div className="grid md:space-x-10 grid-cols-3 justify-center space-x-4">
        <div className="flex flex-col py-2">
          <h1 className="font-semibold py-2">Products</h1>
          <Link className="py-2 hover:underline" href="/">
            Overview
          </Link>
          <Link className="py-2 hover:underline" href="/">
            Pricing
          </Link>
          <Link className="py-2 hover:underline" href="/">
            Customer story
          </Link>
        </div>
        <div className="flex flex-col py-2">
          <h1 className="font-semibold py-2">Resources</h1>
          <Link className="py-2 hover:underline" href="/">
            Blog
          </Link>
          <Link className="py-2 hover:underline" href="/">
            Guilds & tutorials
          </Link>
          <Link className="py-2 hover:underline" href="/">
            Help center
          </Link>
        </div>
        <div className="flex flex-col py-2">
          <h1 className="font-semibold py-2">Company</h1>
          <Link className="py-2 hover:underline" href="/">
            About us
          </Link>
          <Link className="py-2 hover:underline" href="/">
            Careers
          </Link>
          <Link className="py-2 hover:underline" href="/">
            Media kit
          </Link>
        </div>
      </div>
      <div className="border-t-2 py-4 text-center">
        <p>
          Made with <span className="text-rose-500">❤</span> by kentobias{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
