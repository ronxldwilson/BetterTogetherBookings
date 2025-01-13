// /src/app/api/time-slots/route.js
import { supabase } from '@/lib/supabaseClient'

export async function GET(req) {
  const { professional_id, start_date, end_date } = req.query

  try {
    const { data, error } = await supabase
      .from('professional_schedule')
      .select('professional_id, name, date, slot')
      .eq('professional_id', professional_id)
      .gte('date', start_date)
      .lte('date', end_date)

    if (error) {
      throw error
    }

    return new Response(JSON.stringify(data), { status: 200 })
  } catch (error) {
    return new Response('Error fetching time slots', { status: 500 })
  }
}
