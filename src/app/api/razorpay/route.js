// src/app/api/razorpay/route.js

import Razorpay from 'razorpay';

export async function POST(req) {
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID, // Set in .env.local
    key_secret: process.env.RAZORPAY_KEY_SECRET, // Set in .env.local
  });

  const { amount } = await req.json();

  const options = {
    amount: amount * 100, // Amount in paise
    currency: 'INR',
    receipt: 'receipt#1',
  };

  try {
    const order = await razorpay.orders.create(options);
    return new Response(JSON.stringify(order), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create order' }), { status: 500 });
  }
}
