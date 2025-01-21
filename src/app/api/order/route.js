const Razorpay = require('razorpay'); // Import Razorpay SDK

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { amount, currency } = req.body;

    const razorpay = new Razorpay({
      key_id: process.env.key_id,
      key_secret: process.env.key_secret,
    });

    // Generate a unique receipt ID using a timestamp
    const receiptId = `receipt_${Date.now()}`;

    const options = {
      amount: amount,
      currency: currency,
      receipt: receiptId,
    };

    try {
      const order = await razorpay.orders.create(options);
      console.log(order);
      res.status(200).json({ orderId: order.id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create order' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
