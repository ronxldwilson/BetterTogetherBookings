"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      // Step 1: Create an order by calling your backend API
      const orderResponse = await fetch("/api/createOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 50000, // Amount in paise (₹500)
          currency: "INR",
          receipt: "receipt_123",
        }),
      });

      const order = await orderResponse.json();

      if (!order.id) {
        alert("Failed to create Razorpay order");
        setLoading(false);
        return;
      }

      // Step 2: Initialize Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Public Key
        amount: order.amount,
        currency: order.currency,
        name: "Your Company Name",
        description: "Test Transaction",
        order_id: order.id,
        handler: async function (response) {
          // Step 3: Send payment details to the backend for verification
          const verifyResponse = await fetch("/api/verifyPayment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              order_id: response.razorpay_order_id,
              payment_id: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            }),
          });

          const verificationResult = await verifyResponse.json();

          if (verificationResult.success) {
            alert("Payment verified successfully!");
          } else {
            alert("Payment verification failed!");
          }
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error(error);
      alert("An error occurred while processing the payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          backgroundColor: "#3399cc",
          color: "#fff",
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
}
