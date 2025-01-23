import { supabase } from '../../../lib/supabase'

export async function POST(req) {
  try {
    const body = await req.json()

    const { orderID, email, name, phone } = body

    // Validate required fields
    if (!orderID || !email || !name || !phone) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    // Insert data into the `payments` table, mapping `orderID` to `order_id`
    const { data, error } = await supabase
      .from('payments')
      .insert([{ 
        order_id: orderID, 
        email, 
        name, 
        phone 
      }])
      
    if (error) {
      console.error('Supabase Error:', error)
      throw new Error(error.message)
    }

    return new Response(
      JSON.stringify({ message: 'Payment inserted successfully', data }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
