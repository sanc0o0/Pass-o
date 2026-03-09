import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import  eye  from "../assets/eye.svg";
import  eyeCrossed  from "../assets/eye-crossed.svg";
import  copyIcon  from "../assets/copy-alt.svg";


const SavedCredentials = () => {

  const [passwords, setPasswords] = useState(() => {
    try {
      const stored = localStorage.getItem("passwords");
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      return [];
    }
  });

  const [visiblePasswords, setVisiblePasswords] = useState({});

  const togglePassword = (id) => {
    setVisiblePasswords(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const copyPassword = (password) => {
    navigator.clipboard.writeText(password)
    toast.success("Password copied to clipboard");
  };

  const deletePassword = (id) => {
    const updated = passwords.filter((item) => item.id !== id);

    if (updated.length === 0) {
      localStorage.removeItem("passwords");
    } else {
      localStorage.setItem("passwords", JSON.stringify(updated));
    }

    setPasswords(updated);

    toast.success("Password deleted successfully");
  };

  return (
    <div className="container mx-auto px-6 py-6 max-w-5xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-700">
        Saved Credentials
      </h1>

      <div className="w-full bg-white shadow-lg rounded-xl border border-purple-200 min-h-75 max-h-[55vh] overflow-hidden flex flex-col">
        {passwords.length === 0 ? (
          <div className="flex flex-col items-center justify-center grow text-center p-8">
            <p className="text-gray-600 text-lg mb-4">
              No passwords saved yet.
            </p>

            <Link
              to="/"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition"
            >
              Go to Password Manager
            </Link>
          </div>
        ) : (
          <>
            <div className="overflow-y-auto max-h-[55vh]">
              <div className="w-full overflow-x-auto ">
                <table className="w-full min-w-160">
                  <thead className="bg-purple-600 text-white sticky top-0">
                    <tr>
                      <th className="py-3 px-4 text-left">Website</th>
                      <th className="py-3 px-4 text-left">Username</th>
                      <th className="py-3 px-4 text-left">Password</th>
                      <th className="py-3 px-4 text-center">Action</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {passwords.map((item) => (
                      <tr key={item.id} className="hover:bg-purple-50">
                        <td className="py-3 px-4 whitespace-nowrap overflow-hidden text-ellipsis max-w-55">
                          {item.website}
                        </td>

                        <td className="py-3 px-4 whitespace-nowrap overflow-hidden text-ellipsis max-w-45">
                          {item.username}
                        </td>

                        <td className="py-3 px-4 font-mono whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            {visiblePasswords[item.id]
                              ? item.password
                              : "•".repeat(Math.min(item.password.length, 12))}
                            <button
                              onClick={() => togglePassword(item.id)}
                              className="text-purple-600 hover:scale-110 transition"
                            >
                              <img
                                src={visiblePasswords[item.id] ? eyeCrossed : eye}
                                alt="toggle password"
                                className="w-5 h-5"
                              />
                            </button>
                            <button
                              onClick={() => copyPassword(item.password)}
                              className="text-gray-600 hover:scale-110"
                            >
                              <img
                                src={copyIcon}
                                alt="copy password"
                                className="w-5 h-5"
                              />
                            </button>
                          </div>
                        </td>

                        <td className="py-3 px-4 text-center whitespace-nowrap">
                          <button
                            onClick={() => deletePassword(item.id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SavedCredentials;