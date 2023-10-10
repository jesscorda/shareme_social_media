import React, { useState } from "react";
import { CreatePin, Feed, Navbar, PinDetail, Search } from "../components";
import { Route, Routes } from "react-router-dom";

const Pins = ({ user, toggleSidebar }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="px-2 md:px-5">
      <div
        className={`bg-gray-50 sticky top-0 pt-1 ${!toggleSidebar && "z-10"}`}
      >
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          user={user && user}
        />
      </div>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route path="/create-pin" element={<CreatePin />} />
          <Route path="/pin-detail/:pinId" element={<PinDetail />} />
          <Route path="/search" element={<Search searchTerm={searchTerm} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Pins;
