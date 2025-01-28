'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';
import { useRouter } from 'next/navigation';
import Calendar from '@/components/Calendar';

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
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
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>
                    {/* <div>
                      <Calendar/>
                    </div> */}
                </div>
            </div>
        </div>
    );
}