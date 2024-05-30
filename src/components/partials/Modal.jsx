import React from "react";
import { IoIosStar } from "react-icons/io";

function Modal({ singleData, setClickedToDetails }) {
  return (
    <>
      {singleData.map((data) => (
        <div
          key={data.id}
          className="fixed inset-0 overflow-scroll flex items-center justify-center z-50"
        >
          <div
            className="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all absolute left-52 right-52 top-5 p-5 giveWidth"
          >
            <div className="flex imageSizing">
              <img
                src={data.image}
                alt={data.title || "Image"}
                className="w-96 h-96"
              />

              <div className="m-5 mx-10 relative">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium text-center">
                    {data.title}
                  </h3>
                  <small className="flex">
                    <IoIosStar />
                    {data.rating.rate} by {data.rating.count} people
                  </small>
                </div>
                <p className="text-xl text-justify font-light my-8">
                  {data.description.charAt(0).toUpperCase() +
                    data.description.slice(1)}
                </p>

                <p className="text-xl relative float-right right-0 bottom-0 p-4 border border-[#cde8e5]">
                  <span className="font-semibold">Price: </span>
                  {Math.ceil(data.price)} $
                </p>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                onClick={() => setClickedToDetails(false)}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Close
              </button>
            </div>
          </div>
          
        </div>
      ))}
    </>
  );
}

export default Modal;
