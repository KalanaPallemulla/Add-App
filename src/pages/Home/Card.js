import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ add }) {
  const navigate = useNavigate();
  const handleClick = () => {
    setTimeout(() => {
      navigate(`/add/${add._id}`);
    }, 100);
  };
  return (
    <div
      onClick={handleClick}
      className="border border-gray-400 rounded-lg hover:bg-red-200 cursor-pointer "
    >
      <div className="AF p-2 ">
        <h1 className="text-lg font-bold  text-gray-600">{add.company}</h1>
        <h1 className="text-xl font-bold  text-gray-800">{add.position}</h1>
        <h1 className="text-md font-bold  text-gray-500">
          {add.city}, {add.district}
        </h1>
      </div>
    </div>
  );
}
