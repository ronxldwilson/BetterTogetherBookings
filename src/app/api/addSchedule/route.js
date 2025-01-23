import { supabase } from '../../../lib/supabase'

export async function POST(req) {
  try {
    const body = await req.json()

    const { professional_id, date, slot,session_with,order_id } = body

    // Validate required fields
    if (!professional_id || !date || !slot|| !session_with || !order_id) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields',professional_id,date,slot,session_with,order_id }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    // Insert data into the `payments` table, mapping `orderID` to `order_id`
    const { data, error } = await supabase
      .from('professional_schedule')
      .insert([{ 
        professional_id, 
        date, 
        slot,
        session_with,
        order_id
      }])
      
    if (error) {
      console.error('Supabase Error:', error)
      throw new Error(error.message)
    }

    return new Response(
      JSON.stringify({ message: 'Schedule inserted successfully', data }),
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
