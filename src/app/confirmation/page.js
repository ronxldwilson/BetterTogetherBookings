"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ConfirmationPage = () => {
  const router = useRouter();
  const [sessionDetails, setSessionDetails] = useState(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem("sessionDetails");
    if (storedData) {
      setSessionDetails(JSON.parse(storedData));
    } else {
      router.push("/"); // Redirect to homepage if no session data is found
    }
  }, [router]);

  if (!sessionDetails)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 max-w-lg w-full text-center">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Booking Confirmed! 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Your session has been successfully booked. Here are your details:
        </p>

        <div className="bg-gray-50 p-4 rounded-lg text-left space-y-2">
          <p>
            <span className="font-semibold">Payment ID:</span>{" "}
            {sessionDetails.paymentId}
          </p>
          <p>
            <span className="font-semibold">Order ID:</span>{" "}
            {sessionDetails.orderId}
          </p>
          <p>
            <span className="font-semibold">Professional Name:</span>{" "}
            {sessionDetails.therapistName}
          </p>
          <p>
            <span className="font-semibold">Date:</span>{" "}
            {sessionDetails.sessionDate}
          </p>
          <p>
            <span className="font-semibold">Time:</span>{" "}
            {sessionDetails.sessionTime}
          </p>
          <p>
            <span className="font-semibold">Mode:</span>{" "}
            {sessionDetails.sessionMode}
          </p>
          <p>
            <span className="font-semibold">Session Type:</span>{" "}
            {sessionDetails.sessionType}
          </p>
          <p>
            <span className="font-semibold">User Name:</span>{" "}
            {sessionDetails.userName}
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            {sessionDetails.userEmail}
          </p>
          <p>
            <span className="font-semibold">Phone:</span>{" "}
            {sessionDetails.userPhone}
          </p>
        </div>

        <button
          onClick={() => router.push("/")}
          className="mt-6 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
