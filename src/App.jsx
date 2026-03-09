import Navbar from "./components/Navbar";
import Manager from "./components/Manager";
import Footer from "./components/Footer";
import SavedCredentials from "./components/SavedCredentials";
import  { Toaster } from "react-hot-toast";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Toaster position="top-right" />

      <div className=" min-h-screen flex flex-col ">
      {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size-[6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div> */}
        <Navbar />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Manager />} />
            <Route path="/saved" element={<SavedCredentials />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
