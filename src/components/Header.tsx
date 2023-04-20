import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full sticky top-0 z-10 bg-gradient-to-b from-primary to-secondary text-white py-4 px-6">
      <h1 className="text-2xl font-bold">Jaseunda</h1>
      <p className="text-lg">Web Developer</p>
    </header>
  );
};

export default Header;