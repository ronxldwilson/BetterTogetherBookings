import { supabase } from '../../../lib/supabase'

export async function POST(req) {
  try {
    const body = await req.json()

    const { user_id, email, name, phone } = body

    // Validate required fields
    if (!user_id || !email || !name || !phone) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    // Insert data into the `user` table with user_id
    const { data, error } = await supabase
      .from('user')
      .insert([{ user_id,email, name, phone }])
      
    if (error) {
      console.error('Supabase Error:', error)
      throw new Error(error.message)
    }

    return new Response(
      JSON.stringify({ message: 'User inserted successfully'}),
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
