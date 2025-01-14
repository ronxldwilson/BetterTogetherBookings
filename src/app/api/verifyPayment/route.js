import Razorpay from "razorpay";
import crypto from "crypto";

export async function POST(req) {
  try {
    const { order_id, payment_id, signature } = await req.json();

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(order_id + "|" + payment_id)
      .digest("hex");

    if (generatedSignature === signature) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    return new Response(JSON.stringify({ success: false, error: "Invalid signature" }), {
      status: 400,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
