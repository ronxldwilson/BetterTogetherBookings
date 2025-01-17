import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase"; // Import the Supabase client

const Calendar = ({ id, name }) => {
  const [therapist, setTherapist] = useState([]); // Holds the fetched schedule data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [currentPage, setCurrentPage] = useState(0); // Current page for pagination
  const [selectedSlot, setSelectedSlot] = useState(null); // Tracks the single selected slot

  const allSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const slotsPerPage = 4; // Number of dates to display per page

  // Fetch schedule data
  useEffect(() => {
    const scheduleData = async () => {
      try {
        const { data, error } = await supabase
          .from("professional_schedule")
          .select("professional_id, date, slot")
          .eq("professional_id", id);

        if (error) throw error;

        setTherapist(data);
      } catch (err) {
        setError("Error loading schedule. Please try again later.");
        console.error("Error fetching schedule data:", err);
      } finally {
        setLoading(false);
      }
    };

    scheduleData();
  }, [id]);

  if (loading) {
    return <div>Loading schedule...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Group booked slots by date
  const groupedSlots = therapist.reduce((acc, { date, slot }) => {
    if (!acc[date]) {
      acc[date] = new Set(allSlots); // Initialize with all slots
    }
    acc[date].delete(slot); // Remove booked slot
    return acc;
  }, {});

  const formattedSlots = Object.entries(groupedSlots).map(([date, slots]) => ({
    date,
    slots: Array.from(slots),
  }));

  // Paginated data
  const paginatedSlots = formattedSlots.slice(
    currentPage * slotsPerPage,
    (currentPage + 1) * slotsPerPage
  );

  const handleNext = () => {
    if ((currentPage + 1) * slotsPerPage < formattedSlots.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const toggleSlotSelection = (date, slot) => {
    const slotKey = `${date}-${slot}`;
    setSelectedSlot((prev) => (prev === slotKey ? null : slotKey));
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">
        Available Slots for {name || "Therapist"}:
      </h2>

      {/* Navigation Buttons */}
      <div className="flex justify-between mb-4">
        <button
          type="button"
          className={`bg-blue-500 text-white py-2 px-4 rounded-lg ${
            currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleBack}
          disabled={currentPage === 0}
        >
          Back
        </button>
        <button
          type="button"
          className={`bg-blue-500 text-white py-2 px-4 rounded-lg ${
            (currentPage + 1) * slotsPerPage >= formattedSlots.length
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={handleNext}
          disabled={(currentPage + 1) * slotsPerPage >= formattedSlots.length}
        >
          Next
        </button>
      </div>

      {/* Calendar Slots */}
      <div className="grid grid-cols-4 gap-4">
        {paginatedSlots.map(({ date, slots }) => (
          <div key={date} className="border rounded-lg p-2">
            <h3 className="text-md font-semibold text-center mb-2">{date}</h3>
            <div className="grid grid-cols-1 gap-2">
              {slots.length > 0 ? (
                slots.map((slot) => {
                  const slotKey = `${date}-${slot}`;
                  const isSelected = selectedSlot === slotKey;
                  return (
                    <button
                      key={slot}
                      className={`py-2 px-4 rounded-lg text-sm font-medium ${
                        isSelected
                          ? "bg-green-500 text-white"
                          : "bg-blue-100 text-blue-700"
                      }`}
                      onClick={() => toggleSlotSelection(date, slot)}
                    >
                      {slot}
                    </button>
                  );
                })
              ) : (
                <p className="text-sm text-gray-500">No available slots.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
