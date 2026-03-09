import React, { useState} from 'react'
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const [form, setForm] = useState({
    website: "",
    username: "",
    password: ""
  });

  const SavePassword = () => {
    if (!form.website || !form.username || !form.password) {
      toast.error("All fields are required");
      return;
    }

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (form.password.length > 10) {
  
      toast.error("Password must be less than 10 characters");
      return;
    }
    const existingData = JSON.parse(localStorage.getItem("passwords")) || [];

    const newEntry = [...existingData, {...form, id: uuidv4() }];

    localStorage.setItem("passwords", JSON.stringify(newEntry));

    console.log(newEntry);

    toast.success("Password saved successfully");

    setForm({
      website: "",
      username: "",
      password: ""
    });
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };


  return (
    <>
      {/* Main Container */}
      <div className="container mx-auto px-6 py-4 flex flex-col items-center">
        {/* Title */}
        <h1 className="text-4xl font-extrabold mb-4">
          <span className="text-purple-700">&lt;</span>
          Pass-O
          <span className="text-purple-700">/&gt;</span>
        </h1>

        {/* Tagline */}
        <p className="text-gray-600 text-1xl text-center max-w-xl pb-12">
          A simple and secure password manager to store your website credentials
          safely in one place. Never forget your passwords again.
        </p>

        {/* Form Card */}
        <div className="bg-white shadow-xl rounded-2xl p-8 h-fit w-full max-w-xl">
          <div className="flex flex-col gap-6">
            {/* Website */}
            <input
              name="website"
              value={form.website}
              onChange={handleChange}
              type="text"
              placeholder="Website URL"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Username */}
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              type="text"
              placeholder="Username / Email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Password */}
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            {/* Button */}
            <button 
              onClick={SavePassword}
              className="bg-purple-600 hover:bg-purple-700 cursor-pointer text-white font-semibold py-3 rounded-lg transition duration-300">
              Save Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Manager
