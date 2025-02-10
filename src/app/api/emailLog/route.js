import { supabase } from '../../../lib/supabase'

export async function POST(req) {
  try {
    const body = await req.json()

    const { to, from, subject, content } = body

    // Validate required fields
    if (!to || !from  || !subject || !content) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    
    const { data, error } = await supabase
      .from('email_logs')
      .insert([{ to, from , subject, content }])
      
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
