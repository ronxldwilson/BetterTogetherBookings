import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase'; // Import the Supabase client

export default function Prices({ therapistID }) {
    const [therapist, setTherapist] = useState(null); // State for therapist data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    // console.log(therapistID)
    useEffect(() => {
        const fetchTherapistData = async () => {
            try {
                const { data, error } = await supabase
                    .from('professional')
                    .select('name, iprice, cprice')
                    .eq('professional_id', therapistID)
                    .single();

                if (error) throw error; // Handle any error

                setTherapist(data); // Set the data in state
                // console.log(therapist)
            } catch (err) {
                setError('Error loading prices. Please try again later.');
                console.error('Error fetching professional data:', err);
            } finally {
                setLoading(false); // Stop loading spinner
            }
        };

        fetchTherapistData();
    }, [therapistID]); // Re-run the effect when `therapistID` changes

    // Render loading state
    if (loading) {
        return <div>Loading prices...</div>;
    }

    // Render error state
    if (error) {
        return <div>{error}</div>;
    }

    // Render therapist data
    return (
        <div>
            <h3 className="text-lg font-medium">Fees for {therapist.name}:</h3>
            <p>Individual: ₹{therapist.iprice}</p>
            <p>Couples: ₹{therapist.cprice}</p>
        </div>
    );
}
