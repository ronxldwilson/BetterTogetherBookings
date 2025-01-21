const crypto = require('crypto'); // Import crypto module

// Function to generate the Razorpay signature
const generatedSignature = (razorpayOrderId, razorpayPaymentId) => {
  const keySecret = process.env.key_secret; // Fetch secret key from environment variables
  if (!keySecret) {
    throw new Error(
      'Razorpay key secret is not defined in environment variables.'
    );
  }
  const sig = crypto
    .createHmac('sha256', keySecret) // Create HMAC using the secret key
    .update(razorpayOrderId + '|' + razorpayPaymentId) // Update with the concatenated string
    .digest('hex'); // Generate the hex digest
  return sig; // Return the generated signature
};

// Handler function for the POST request
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { orderCreationId, razorpayPaymentId, razorpaySignature } =
        req.body; // Extract details from the request body

      const signature = generatedSignature(orderCreationId, razorpayPaymentId); // Generate the signature

      // Compare the generated signature with the received signature
      if (signature !== razorpaySignature) {
        return res.status(400).json({
          message: 'Payment verification failed',
          isOk: false,
        });
      }

      // If the signature matches, return success
      return res.status(200).json({
        message: 'Payment verified successfully',
        isOk: true,
      });
    } catch (error) {
      console.error('Error during payment verification:', error);
      return res.status(500).json({
        message: 'Internal server error',
        isOk: false,
      });
    }
  } else {
    // Handle non-POST requests
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({
      message: `Method ${req.method} not allowed`,
      isOk: false,
    });
  }
}
