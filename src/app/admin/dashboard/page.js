'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';
import { useRouter } from 'next/navigation';
import Calendar from '@/components/Calendar';
import Bookings from '@/components/Bookings';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [message, setMessage] = useState(''); // Success/error message
  const [refreshKey, setRefreshKey] = useState(0); // Refresh key for Calendar
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        router.push('/admin/login');
      } else {
        setUser(user);
      }
    };

    fetchUser();
  }, [router]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <p className="text-white text-lg">Loading...</p>
      </div>
    );
  }

  const addSchedule = async (professional_id, date, slot, userId, orderId) => {
    try {
      const response = await fetch('/api/addSchedule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          professional_id: professional_id,
          date: date,
          slot: slot,
          session_with: userId,
          order_id: orderId,
        }),
      });

      if (!response.ok) {
        const errorDetails = await response.text();
        throw new Error(`Network response was not ok: ${errorDetails}`);
      }

      const data = await response.json();
      return data.orderId;
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
      throw error;
    }
  };

  const handleBlocking = async () => {
    if (!selectedSlot) {
      setMessage('Please select a time slot first.');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const blocking = await addSchedule(
        '1', // Replace with dynamic professional_id if needed
        selectedSlot.slice(0, 10), // Extract date (YYYY-MM-DD)
        selectedSlot.slice(11), // Extract time (HH:MM)
        'c25ac770-ec7c-4d1f-91b3-40e79a371803', // Replace with user_id if needed
        'BLOCK' // Replace with orderId if needed
      );

      setMessage('Time slot blocked successfully!');
      setSelectedSlot(''); // Clear the selected slot after successful blocking
      setRefreshKey((prevKey) => prevKey + 1); // Increment refresh key to re-render Calendar
    } catch (error) {
      setMessage('Failed to block time slot. Please try again.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-800">Dashboard</div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-800">Welcome, {user.email}</span>
              <button
                onClick={async () => {
                  await supabase.auth.signOut();
                  router.push('/admin/login');
                }}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Dashboard Overview
          </h1>
          
          <h2>My Schedule</h2>
          <Bookings
          id="1"
          />    
          <div>
            {/* Pass refreshKey as a key to force re-render */}
            <Calendar
              key={refreshKey} // Force re-render when refreshKey changes
              id="1"
              name="Issac Paul"
              selectedSlot={selectedSlot}
              onChange={setSelectedSlot}
            />
          </div>

          <div className="mt-6">
            <button
              onClick={handleBlocking}
              disabled={!selectedSlot || isLoading} // Disable if no slot is selected or loading
              className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md ${
                !selectedSlot || isLoading
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-blue-700 focus:ring-2 focus:ring-blue-500'
              } focus:outline-none focus:ring-offset-2`}
            >
              {isLoading ? 'Blocking...' : 'Block Time'}
            </button>
          </div>

          {message && (
            <div
              className={`mt-4 p-4 rounded-md ${
                message.includes('successfully')
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}