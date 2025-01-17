// /src/app/trial/page.js
import { supabase } from '../../lib/supabase'

export default async function TrialPage () {
  // Fetch data from Supabase
  const { data, error } = await supabase
    .from('professional_schedule')
    .select('*')

  console.log(data)
  if (error) {
    console.error('Error fetching data:', error)
    return <div>Error loading data</div>
  }

  return (
    <div>
      <h1>Data from Supabase</h1>
      <ul>
        id fullname email
        {data.map(item => (
          <li key={item.id}>
            {item.professional_id} {item.session_with} {item.slot}
          </li> // Replace `id` and `name` with your actual column names
        ))}
      </ul>
    </div>
  )
}
