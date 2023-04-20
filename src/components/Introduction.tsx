import React from "react";

const Introduction = () => {
  return (
    <section className="hero relative py-20">
      <div
        className="bg-cover bg-center object-fill h-screen w-full absolute z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1573497499088-2d3d3e5260fb')",
          filter: "brightness(50%)",
        }}
      ></div>
      <div className="container mx-auto px-6 sm:px-12 relative z-10">
        <div className="flex flex-wrap justify-center text-center">
          <div className="w-full md:w-2/3 px-2">
            <h1 className="text-5xl sm:text-6xl text-white font-semibold mb-2">
              Hi, I'm Jaseunda
            </h1>
            <h2 className="text-3xl text-gray-200 mb-4">
              Web Developer
            </h2>
            <p className="text-gray-200 text-lg mb-8">
              I specialize in building responsive and user-friendly web applications that deliver great user experiences.
            </p>
            <div className="flex justify-center">
              <button className="bg-white py-2 px-4 font-medium text-gray-800 rounded hover:bg-gray-200">
                View portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;