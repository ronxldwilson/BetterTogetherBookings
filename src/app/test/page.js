// src/app/checkout/page.js

'use client';

import { useState } from 'react';

const CheckoutPage = () => {
  const [amount, setAmount] = useState(0);

  const handlePayment = async () => {
    const res = await fetch('/api/razorpay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    const data = await res.json();

    if (data.id) {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: 'INR',
        name: 'Your Company',
        description: 'Payment for Order',
        image: '/your_logo.png', // optional logo
        order_id: data.id,
        handler: function (response) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '1234567890',
        },
        notes: {
          address: 'Your Address',
        },
        theme: {
          color: '#F37254',
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default CheckoutPage;
