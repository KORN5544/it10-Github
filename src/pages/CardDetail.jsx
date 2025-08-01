import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import cardData from "./../services/cardData";

const CardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const cardDetail = cardData.find((item) => item.id === parseInt(id));

  return (
    <>
      <main className="flex-grow">
        <div className="container mx-auto py-10 px-4">
            <button onClick={() => navigate(-1)} className="bg-pink-400 text-white font-semibold rounded-full hover:bg-pink-500 transition cursor-pointer px-3 py-2">Back</button>
          <div
            className="mt-8 bg-white rounded-lg overflow-hidden flex flex-col 
            md:flex-row"
          >
            <div className="md:w-1/2 w-full">
              <img
                src={cardDetail.imageUrl}
                alt=""
                className="w-full h-full object-fit-cover"
              />
            </div>

            <div className="md:w-1/2 w-full p-6 flex flex-col">
              <h1 className="texr-3xl font-bold mb-4 text-purple-800">
                {cardDetail.title}
              </h1>
              <p className="text-gray-700 text-lg leading-relaxed">
                {cardDetail.description}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CardDetail;
