import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

const Calendar = ({ id, name }) => {
  const [therapist, setTherapist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);

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
    "06:00 PM",
  ];

  const slotsPerPage = 4;

  useEffect(() => {
    const fetchSchedule = async () => {
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

    fetchSchedule();
  }, [id]);

  if (loading) {
    return <div className="text-center py-6">Loading schedule...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-6">{error}</div>;
  }

  const getNextNDates = (n) => {
    const today = new Date();
    const dates = [];
    for (let i = 0; i < n; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i);
      dates.push(nextDate.toISOString().split("T")[0]);
    }
    return dates;
  };

  const upcomingDates = getNextNDates(30);

  const groupedSlots = upcomingDates.reduce((acc, date) => {
    acc[date] = new Set(allSlots);
    return acc;
  }, {});

  therapist.forEach(({ date, slot }) => {
    if (groupedSlots[date]) {
      groupedSlots[date].delete(slot);
    }
  });

  const formattedSlots = Object.entries(groupedSlots).map(([date, slots]) => ({
    date,
    slots: Array.from(slots),
  }));

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
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">
        Available Slots for {name || "Therapist"}
      </h2>

      <div className="flex justify-between items-center mb-6">
        <button
          type="button"
          className={`py-2 px-6 font-semibold rounded-lg transition-all ${
            currentPage === 0
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={handleBack}
          disabled={currentPage === 0}
        >
          Back
        </button>
        <button
          type="button"
          className={`py-2 px-6 font-semibold rounded-lg transition-all ${
            (currentPage + 1) * slotsPerPage >= formattedSlots.length
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={handleNext}
          disabled={(currentPage + 1) * slotsPerPage >= formattedSlots.length}
        >
          Next
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paginatedSlots.map(({ date, slots }) => (
          <div key={date} className="border rounded-lg p-4 bg-gray-50">
            <h3 className="text-lg font-semibold text-center mb-4">
              {new Date(date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {slots.length > 0 ? (
                slots.map((slot) => {
                  const slotKey = `${date}-${slot}`;
                  const isSelected = selectedSlot === slotKey;
                  return (
                    <button
                      key={slot}
                      className={`py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                        isSelected
                          ? "bg-green-500 text-white hover:bg-green-600"
                          : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSlotSelection(date, slot);
                      }}
                    >
                      {slot}
                    </button>
                  );
                })
              ) : (
                <p className="text-sm text-gray-500 text-center col-span-2">
                  No available slots.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedSlot && (
        <div className="mt-6 p-4 bg-green-100 text-green-700 text-center rounded-lg">
          Selected Slot: <strong>{selectedSlot}</strong>
        </div>
      )}
    </div>
  );
};

export default Calendar;
