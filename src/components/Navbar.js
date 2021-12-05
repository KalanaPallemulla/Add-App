import React from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "../assets/search.png";

export default function Navbar() {
  const location = useLocation().pathname;

  return (
    <div className="flex justify-center ">
      <div className="w-2/3 bg-white shadow-lg fixed top-6">
        <div className="flex justify-between px-4  h-20 items-center text-gray-700">
          <Link className="TF md:text-5xl text-3xl font-bold" to="/">
            <span className="text-red-600">M</span>y{" "}
            <span className="text-blue-600">J</span>ob
          </Link>
          <div className="hidden md:block">
            <div className="pt-2 relative mx-auto text-gray-600">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-20 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-5 mr-4"
              >
                <img className="h-4 w-4" src={Search} alt="search-icon" />
              </button>
            </div>
          </div>
          <div className="space-x-4">
            <Link
              className={`AF text-lg text-gray-600 hover:text-gray-900 font-bold ${
                location === "/" && "border-b py-2 border-blue-600"
              }`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`AF text-lg text-gray-600 hover:text-gray-900 font-bold ${
                location === "/join" && "border-b py-2 border-blue-600"
              }`}
              to="/join"
            >
              Join
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
