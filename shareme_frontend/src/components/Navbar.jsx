import React from "react";
import { IoMdAdd, IoMdSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ searchTerm, setSearchTerm, user }) => {
  const navigate = useNavigate();

  if (!user) return;

  return (
    <div className="flex justify-between gap-2 md:gap-5 mt-5 pb-7">
      <div className="flex items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm ">
        <IoMdSearch fontSize={21} className="ml-1" />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onFocus={() => navigate("/search")}
          className="p-2 w-full bg-white outline-none"
        />
      </div>
      <div className="flex gap-2">
        <Link className="hidden md:block" to={`user-profile/${user?._id}`}>
          {" "}
          <img
            src={user.image}
            alt="user-pic"
            className="w-14 h-12 rounded-lg "
          />
        </Link>
        <Link
          to="/create-pin"
          className="bg-black text-white rounded-lg w-12 h-12 md:w-14 md:h-12 flex justify-center items-center"
        >
          <IoMdAdd />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
