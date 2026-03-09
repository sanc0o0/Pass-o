import React from "react";

const Footer = () => {
  return (
    <footer className="border-gray-200 bg-transparent ">
      <div className="bg-slate-500 h-px opacity-50"></div>
      <div className="container mx-auto px-6 py-6 flex flex-col items-center text-center">
        <h2 className="text-lg font-semibold text-purple-700">Pass-O</h2>

        <p className="text-gray-500 text-sm">
          Securely manage your passwords in one place.
        </p>

        <p className="text-gray-400 text-xs pt-2">
          © {new Date().getFullYear()} Pass-O. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
