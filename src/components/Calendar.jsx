import React, { useState } from "react";

const Calendar = () => {
    const generateDates = (startDate) => {
        const days = [];
        for (let i = 0; i < 4; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            days.push(date);
        }
        return days;
    };

    const timeSlots = [
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
    ];

    const today = new Date();
    const [currentStartDate, setCurrentStartDate] = useState(today);
    const [selectedDate, setSelectedDate] = useState(today.toDateString());
    const [selectedSlot, setSelectedSlot] = useState(null);

    const dates = generateDates(currentStartDate);

    const handleNext = () => {
        const newStartDate = new Date(currentStartDate);
        newStartDate.setDate(currentStartDate.getDate() + 4);
        setCurrentStartDate(newStartDate);
    };

    return (
        <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6 text-center">Select Date & Time</h1>
            <div className="flex items-center justify-between mb-6">
                {/* Conditionally hide the back button */}
                {currentStartDate.toDateString() === today.toDateString() ? (
                    <button
                        type="button"
                        disabled // Make it non-clickable
                        className="text-gray-400 px-4 py-2 rounded-md bg-gray-200 cursor-not-allowed"
                    >
                        &larr; Back
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={() => {
                            const newStartDate = new Date(currentStartDate);
                            newStartDate.setDate(currentStartDate.getDate() - 4);
                            setCurrentStartDate(newStartDate);
                        }}
                        className="text-gray-600 hover:text-black px-4 py-2 rounded-md bg-gray-100"
                    >
                        &larr; Back
                    </button>
                )}

                <div className="flex space-x-8">
                    {dates.map((date) => (
                        <div
                            key={date.toDateString()}
                            onClick={() => setSelectedDate(date.toDateString())}
                            className={`cursor-pointer text-center ${selectedDate === date.toDateString()
                                ? "text-blue-600 font-bold"
                                : "text-gray-700"
                                }`}
                        >
                            <div className="text-lg">
                                {date.toLocaleString("en-US", { weekday: "short" })}
                            </div>
                            <div className="text-xl">{date.getDate()}</div>
                            <div className="text-sm">
                                {date.toLocaleString("en-US", { month: "short" })}
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    type="button"
                    onClick={handleNext}
                    className="text-gray-600 hover:text-black px-4 py-2 rounded-md bg-gray-100"
                >
                    Next &rarr;
                </button>
            </div>

            {/* Display time slots neatly for each date */}
            <div className="grid grid-cols-4 gap-6">
                {dates.map((date) => (
                    <div key={date.toDateString()} className="text-center">
                        <div className="font-bold text-lg text-gray-700 mb-4">
                            {date.toDateString()}
                        </div>
                        <div className="space-y-2">
                            {timeSlots.map((slot) => (
                                <button
                                    type="button"
                                    key={slot}
                                    onClick={() => {
                                        setSelectedDate(date.toDateString());
                                        setSelectedSlot(slot);
                                    }}
                                    className={`w-full py-2 px-4 rounded-lg text-sm ${selectedDate === date.toDateString() && selectedSlot === slot
                                        ? "bg-blue-500 text-white"
                                        : "bg-blue-100 hover:bg-blue-200 text-blue-700"
                                        }`}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 text-gray-600 text-center">
                All times are in Indian Standard Time (IST)
            </div>
        </div>
    );
};

export default Calendar;
