import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card() {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate("/add");
  };
  return (
    <div
      onClick={handleClick}
      className="border border-gray-400 rounded-lg hover:bg-red-200 "
    >
      <div className="AF p-2 ">
        <h1 className="text-lg font-bold  text-gray-600">Company Name</h1>
        <h1 className="text-xl font-bold  text-gray-800">Software Engineer </h1>
        <h1 className="text-md font-bold  text-gray-500">Dehiwala, Colombo</h1>
      </div>
    </div>
  );
}
