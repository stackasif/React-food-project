import { useState } from "react";

function FastFood() {

  const images = [
    "/hero-burger.jpg",
    "/rest.webp",
    "/hero-burger.jpg",
    "/hero-burger.jpg",
    "/hero-burger.jpg",
  ];

  const [openImage, setOpenImage] = useState(null);

  return (
    <section className="w-full bg-[#f8f5f0]">

      {/* 1280px Content */}
      <div className="max-w-[1280px] mx-auto px-5 py-10">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-red-500 italic">
            Food Showcase
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Let's See Our{" "}
            <span className="text-red-500">
              Fast Food
            </span>
          </h1>

          <div className="w-16 h-1 bg-red-500 mx-auto mt-5"></div>

        </div>


        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {images.map((image, index) => (

            <img
              key={index}
              src={image}
              onClick={() => setOpenImage(index)}
              className="w-full h-64 object-cover rounded-2xl cursor-pointer hover:scale-105 transition"
            />

          ))}

        </div>

      </div>


      {/* Image Popup */}
      {openImage !== null && (

        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

          {/* Close */}
          <button
            onClick={() => setOpenImage(null)}
            className="absolute top-5 right-5 text-white text-4xl"
          >
            ×
          </button>


          {/* Big Image */}
          <img
            src={images[openImage]}
            className="max-w-[90%] max-h-[70%] object-contain"
          />


          {/* Previous */}
          <button
            onClick={() =>
              setOpenImage(
                openImage === 0
                  ? images.length - 1
                  : openImage - 1
              )
            }
            className="absolute left-5 text-white text-xl border border-white rounded-full px-5 py-2"
          >
            ← Prev
          </button>


          {/* Next */}
          <button
            onClick={() =>
              setOpenImage(
                openImage === images.length - 1
                  ? 0
                  : openImage + 1
              )
            }
            className="absolute right-5 text-white text-xl border border-white rounded-full px-5 py-2"
          >
            Next →
          </button>

        </div>

      )}

    </section>
  );
}

export default FastFood;