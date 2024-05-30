import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import ContextApi from "../../ContextApi";

function Products() {
  const { searchedName } = useContext(ContextApi);
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const [clickedToDetails, setClickedToDetails] = useState(false);
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    if (clickedToDetails) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [clickedToDetails]);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item?.title?.toLowerCase().includes(searchedName.toLowerCase())
    );
    setSearchedData(filtered);
  }, [searchedName, data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleDetails = (id) => {
    const result = data.filter((item) => item.id === id);
    setSingleData(result);
    setClickedToDetails(true);
  };

  return (
    <section className="grid grid-cols-3 gap-5 px-5 mt-9">
      {!searchedData
        ? data
        : searchedData.map((item) => (
            <div
              className="block rounded-lg bg-white mt-3"
              key={item.id}
            >
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="rounded-lg sm:h-64 md:h-64 w-full"
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <div className="p-2">
                <div className="flex justify-between">
                  <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800">
                    {item.title}
                  </h5>
                </div>

                <div className="flex justify-between">
                  <p className="mb-4 text-base text-neutral-600">
                    Category - {item.category}
                  </p>

                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 ml-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="mb-4 pr-6 text-base">{item.rating.rate}</p>
                  </div>
                </div>

                <h5 className="mb-2 text-sm font-bold leading-tight text-neutral-800">
                  Price: {Math.floor(item.price)} $
                </h5>

                <button
                  className="border border-neutral-800 rounded-lg p-3"
                  onClick={() => handleDetails(item.id)}
                >
                  More details
                </button>
              </div>
            </div>
          ))}
      {clickedToDetails && (
        <>
          <Modal
            singleData={singleData}
            setClickedToDetails={setClickedToDetails}
          />
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setClickedToDetails(false)}
          ></div>
        </>
      )}
    </section>
  );
}

export default Products;
