import React from "react";

function Products() {
  const products = [
    {
      productImage: "/yogurtBan.png",
      productName: "Banana Strawberry",
      productPrice: 11.99,
      bgColor: "#FCDDB0",
    },
    {
      productImage: "/yogurtPe.png",
      productName: "Yogurt Peach",
      productPrice: 10.99,
      bgColor: "#FF9F9F",
    },
    {
      productImage: "/yogurtCho.png",
      productName: "Yogurt Chocolate",
      productPrice: 9.99,
      bgColor: "#DCB4A0",
    },
  ];

  return (
    <section data-aos="fade-up">
      <div>
        <div className="max-w-7xl font-fira mx-auto pt-36 px-4 md:px-8 lg:px-16">
          <h1 className="text-center text-xl md:text-2xl lg:text-4xl">
            Our Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 py-20 md:py-32 gap-6 items-center">
            {products.map((prod, index) => (
              <div key={index} data-aos="fade-out" className="py-10">
                <div className="flex justify-center">
                  <div
                    style={{
                      ["--background-color"]: prod.bgColor, // Adding 80 for 50% opacity
                      ["--hover-bg"]: prod.bgColor + "80",
                    }}
                    className="group w-[65%] md:w-[90%] lg:w-[65%] rounded-xl transition-all duration-300 hover:shadow-xl hover:bg-[var(--background-color)] cursor-pointer"
                  >
                    <div className="p-3 pt-6 flex justify-center rounded-xl transition-colors duration-300 bg-[color:var(--hover-bg)]">
                      <img
                        className="hover:scale-105 ml-8 group-hover:animate-float transition-transform duration-300"
                        src={prod.productImage}
                        alt={prod.productName}
                      />
                    </div>
                    <h1 className="py-4 px-4 font-medium sm:text-lg">
                      {prod.productName}
                    </h1>
                    <h1 className="px-4 font-medium sm:text-lg">
                      ${prod.productPrice.toFixed(2)}
                    </h1>
                    <button className="bg-[#F26666] my-3 mx-4 py-1 px-10 hover:bg-red-500 rounded-xl text-white transition-colors">
                      Buy now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
