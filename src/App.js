import "./App.css";
import Campaigns from "./components/Campaigns";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Settings from "./components/Settings";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <main className="flex flex-row min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex flex-row flex-1 w-full px-6 py-8 mx-auto xl:px-12">
        <div className="flex items-center justify-center w-full px-4 border-4 border-dotted">
          <div className="mx-auto mt-4 text-center mb-2 w-full">
            <Routes>
              <Route path="/" element={<Settings />} />
              <Route path="/new" element={<Campaigns />} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
