import React from "react";
import { useRouter } from "next/navigation";

const ProfessionalCard = ({ professional }) => {
  const router = useRouter();
  
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start bg-white shadow-md rounded-lg p-4 mb-4 w-full">
      {/* Left Section - Profile Picture and Badges */}
      <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
        <img
          src={professional.image}
          alt={professional.name}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-4"
        />
        <div className="flex items-center flex-wrap gap-2">
          {professional.badges.map((badge, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Middle Section - Information */}
      <div className="flex-1 px-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          {professional.name}
          {professional.verified && (
            <span className="text-green-600 text-lg">✔️</span>
          )}
        </h2>
        <p className="text-sm text-gray-500">{professional.title}</p>
        <p className="text-sm text-gray-500 mb-2">
          {professional.experience} years of experience
        </p>
        <p className="text-gray-700">
          {professional.languages.join(", ")}
        </p>
        <p className="mt-2 text-sm text-gray-600">{professional.description}</p>
      </div>

      {/* Right Section - Booking Info */}
      <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-1/3 mt-4 md:mt-0">
        <p className="text-green-600 text-sm">
          {professional.availableTime}
        </p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        onClick={() => router.push(`/professionals/${professional.id}`)}>
          Book Your Session
        </button>
        <p className="text-sm text-gray-500">
          Individuals: ₹{professional.individualPrice} for 50 min
        </p>
        <p className="text-sm text-gray-500">
          Couples Session: ₹{professional.couplePrice} for 50 min
        </p>
      </div>
    </div>
  );
};

export default ProfessionalCard;
