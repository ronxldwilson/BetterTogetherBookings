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
    router.push(`/bookings/${slug}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center md:items-start max-w-2xl mx-auto space-y-4 md:space-y-0 md:space-x-6">
      {/* Profile Picture */}
      <img
        src={profileImage}
        alt={`${name}'s profile`}
        className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover"
      />

      {/* Content Section */}
      <div className="flex-grow">
        {/* Header */}
        <div className="flex items-center mb-2">
          <h2 className="font-semibold text-xl text-gray-800 mr-2">{name}</h2>
          {verified && (
            <span className="text-green-500 text-sm" title="Verified">
              ✔
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 mb-2">{experience}</p>
        <p className="text-sm text-gray-600 mb-2">{languages}</p>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-3 mb-4">{description}</p>

        {/* Timing */}
        <p className="text-sm text-gray-700 font-medium mb-4">{timing}</p>
      </div>

      {/* Button Section */}
      <div className="flex flex-col items-center md:items-end">
        <button
          onClick={handleBooking}
          className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-lg text-sm mb-2"
        >
          Book Session
        </button>
        <p className="text-xs text-gray-500 text-center md:text-right">
          Individual: <span className="font-medium">₹{individualPrice}</span>
          <br />
          Couples: <span className="font-medium">₹{couplesPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default TherapistCard;
