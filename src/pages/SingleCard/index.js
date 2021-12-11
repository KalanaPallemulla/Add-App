/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Container from "../../components/Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleAdd } from "../../actions/add";
import { useParams } from "react-router-dom";
import moment from "moment";
import { port } from "../../actions/types";

export default function SingleCard() {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getSingleAdd(params.id));
  }, [dispatch, params.id]);

  const { add, singleAddLoading } = useSelector((state) => state.add);

  const [image, setImage] = useState();

  useEffect(() => {
    setImage(`${port}/addimage/${params.id}`);
  }, [params.id]);
  return (
    <Container>
      {!singleAddLoading ? (
        <div className="md:px-36">
          <div className="border border-gray-300 p-4 rounded-lg bg-gray-700">
            {image && (
              <img
                className="w-full bg-contain rounded-xl"
                src={image}
                alt="Image"
              />
            )}
            <div>
              <h1 className="text-gray-300 text-sm AF font-bold mt-2">
                {!singleAddLoading &&
                  add.createdAt &&
                  moment(add.createdAt).format("Do MMMM YYYY")}
              </h1>
              <div className="space-y-2 md:space-y-4 mt-4 AF">
                <h1 className="text-gray-100 text-lg font-bold">
                  {add.company}
                </h1>
                <h1 className="text-white text-2xl font-bold">
                  {add.position}
                </h1>
                <h1 className="text-gray-400  text-md font-bold">
                  {add.city}, {add.district}
                </h1>
                {add.salary && (
                  <h1 className="text-gray-200  text-md font-bold">
                    Salary: {add.salary} LKR
                  </h1>
                )}
                <h1 className="text-gray-200  text-lg font-bold">
                  {add.companyEmail}
                </h1>
                <h1 className="text-gray-400  text-lg font-bold">
                  +94 {add.companyContact}
                </h1>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <button className="py-2 px-4 bg-red-300 rounded-md hover:bg-red-600 text-gray-700 hover:text-white">
                Apply now
              </button>
            </div>
          </div>
        </div>
      ) : (
        "Loading"
      )}
    </Container>
  );
}
