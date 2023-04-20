import React from "react";

const Projects: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1521657245455-5a810fda9664?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="project"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-5 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-700 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                dapibus libero, quis ornare nunc. Etiam eu mi fringilla, lacinia
                eros sed, scelerisque risus.
              </p>
              <a
                href="#"
                className="mt-auto font-medium text-blue-500 hover:text-blue-700"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1484515991644-cb8497664daf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="project"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-5 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-700 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                dapibus libero, quis ornare nunc. Etiam eu mi fringilla, lacinia
                eros sed, scelerisque risus.
              </p>
              <a
                href="#"
                className="mt-auto font-medium text-blue-500 hover:text-blue-700"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1546238239-27d8df21cedf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="project"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-5 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Project 3</h3>
              <p className="text-gray-700 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
                dapibus libero, quis ornare nunc. Etiam eu mi fringilla, lacinia
                eros sed, scelerisque risus.
              </p>
              <a
                href="#"
                className="mt-auto font-medium text-blue-500 hover:text-blue-700"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;