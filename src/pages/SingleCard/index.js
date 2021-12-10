/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Container from "../../components/Container";
import Add from "../../assets/Add.jpeg";

export default function SingleCard() {
  return (
    <Container>
      <div className="md:px-36">
        <div className="border border-gray-300 p-4 rounded-lg bg-gray-700">
          <img className="w-full bg-contain rounded-xl" src={Add} alt="Image" />
          <div>
            <h1 className="text-gray-300 text-sm AF font-bold mt-2">
              10th December 2021
            </h1>
            <div className="space-y-2 md:space-y-4 mt-4 AF">
              <h1 className="text-gray-100 text-lg font-bold">Company Name</h1>
              <h1 className="text-white text-2xl font-bold">
                Software Engineer
              </h1>
              <h1 className="text-gray-400  text-md font-bold">
                Dehiwala, Colombo
              </h1>
              <h1 className="text-gray-200  text-md font-bold">
                Salary: 150,000 LKR
              </h1>
              <h1 className="text-gray-200  text-lg font-bold">
                O2solutions@gmail.com
              </h1>
              <h1 className="text-gray-400  text-lg font-bold">076 705 1802</h1>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button className="py-2 px-4 bg-red-300 rounded-md hover:bg-red-600 text-gray-700 hover:text-white">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
