import React from "react";
import Container from "../../components/Container";

export default function Join() {
  return (
    <Container>
      <div className="flex justify-center">
        <form className="w-full max-w-xl px-4 md:px-2 py-4 border border-gray-300 rounded-md">
          <h1 className="AF text-center text-2xl text-red-500 mb-8">
            Lets create your add
          </h1>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Company Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder=""
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Contact no
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Company Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                placeholder=""
              />
              <p className="text-gray-600 text-xs italic">
                Company email is required
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-city"
              >
                City
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder=""
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                District
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option></option>
                  <option>Ampara</option>
                  <option>Anuradhapura</option>
                  <option>Badulla</option>
                  <option>Batticaloa</option>
                  <option>Colombo</option>
                  <option>Galle</option>
                  <option>Gampaha</option>
                  <option>Hambantota</option>
                  <option>Jaffna</option>
                  <option>Kalutara</option>
                  <option>Kandy</option>
                  <option>Kegalle</option>
                  <option>Kilinochchi</option>
                  <option>Kurunegala</option>
                  <option>Mannar</option>
                  <option>Matale</option>
                  <option>Matara</option>
                  <option>Monaragala</option>
                  <option>Mullaitivu</option>
                  <option>Nuwara Eliya</option>
                  <option>Polonnaruwa</option>
                  <option>Puttalam</option>
                  <option>Ratnapura</option>
                  <option>Trincomalee</option>
                  <option>Vavuniya</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-zip"
              >
                Zip
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="text"
                placeholder="90210"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0 mt-8">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Position
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder=""
              />
            </div>
            <div className="w-full md:w-2/4 px-3 mb-4 md:mb-0 mt-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Field
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option></option>
                  <option>Ampara</option>
                  <option>Anuradhapura</option>
                  <option>Badulla</option>
                  <option>Batticaloa</option>
                  <option>Galle</option>
                  <option>Gampaha</option>
                  <option>Hambantota</option>
                  <option>Jaffna</option>
                  <option>Kalutara</option>
                  <option>Kandy</option>
                  <option>Kegalle</option>
                  <option>Kilinochchi</option>
                  <option>Kurunegala</option>
                  <option>Mannar</option>
                  <option>Matale</option>
                  <option>Matara</option>
                  <option>Monaragala</option>
                  <option>Mullaitivu</option>
                  <option>Nuwara Eliya</option>
                  <option>Polonnaruwa</option>
                  <option>Puttalam</option>
                  <option>Ratnapura</option>
                  <option>Trincomalee</option>
                  <option>Vavuniya</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Salary
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="number"
                placeholder=""
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Image
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="file"
                placeholder=""
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="border border-gray-500 hover:bg-gray-700 text-gray-600 hover:text-white  py-2 px-4 rounded-md">
              Submit
            </button>
          </div>
        </form>{" "}
      </div>
    </Container>
  );
}
