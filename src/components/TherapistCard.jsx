"use client"; // Marks this as a Client Component

import React from "react";
import { useRouter } from "next/navigation";

const TherapistCard = ({
  slug,
  name,
  verified,
  experience,
  languages,
  description,
  timing,
  individualPrice,
  couplesPrice,
  profileImage,
}) => {
  const router = useRouter();

  const handleBooking = () => {
    // Navigate to the dynamic route
    router.push(`/${slug}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col md:flex-row items-center md:items-start max-w-2xl mx-auto space-y-4 md:space-y-0 md:space-x-6">
      {/* Profile Picture */}
      <img
        src={profileImage}
        alt={`${name}'s profile`}
        className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-md"
      />

      {/* Content Section */}
      <div className="flex-grow">
        {/* Header */}
        <div className="flex items-center mb-3">
          <h2 className="font-semibold text-2xl text-gray-800 mr-2">{name}</h2>
          {verified && (
            <span className="text-green-500 text-lg" title="Verified">
              ✔
            </span>
          )}
        </div>

        {/* Experience and Languages */}
        <div className="flex flex-col space-y-1 mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Experience:</span> {experience}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Languages:</span> {languages}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">{description}</p>

        {/* Timing
        <p className="text-sm text-gray-700 font-medium mb-4">
          <span className="font-semibold">Available:</span> {timing}
        </p> */}
      </div>

      {/* Button Section */}
      <div className="flex flex-col items-center md:items-end space-y-3">
        <button
          onClick={handleBooking}
          className="bg-customPink text-white hover:bg-customDarkPink px-6 py-2 rounded-lg text-sm font-semibold transition-colors duration-300"
        >
          Book Session
        </button>
        <div className="text-center md:text-right">
          <p className="text-xs text-gray-600">
            <span className="font-medium">Individual:</span> ₹{individualPrice}
          </p>
          <p className="text-xs text-gray-600">
            <span className="font-medium">Couples:</span> ₹{couplesPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TherapistCard;