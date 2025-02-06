import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function Bookings({ id }) {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBookings = async () => {
        try {
            setLoading(true);
            const { data, error } = await supabase
                .from("professional_schedule")
                .select(`
                    schedule_id,  
                    professional_id,
                    date,
                    slot,
                    is_deleted,
                    session_with (
                    name,
                    phone,
                    email
                    )
                `)
                .eq("professional_id", id)
                .eq("is_deleted", false)
                .like("order_id", "order%");  // Using LIKE for pattern matching
            // Fetch only non-deleted bookings

            if (error) {
                console.error("Error fetching bookings:", error);
                return;
            }

            setBookings(data || []);
        } catch (err) {
            console.error("Unexpected error:", err);
        } finally {
            setLoading(false);
        }
    };

    const markAsDeleted = async (bookingId) => {
        // console.log("Booking ID", bookingId)
        try {
            const { error } = await supabase
                .from("professional_schedule")
                .update({ is_deleted: true }) // Update the is_deleted flag to true
                .eq("schedule_id", bookingId);

            if (error) {
                console.error("Error marking booking as deleted:", error);
                alert("Failed to mark booking as deleted.");
                return;
            }

            // Remove the "deleted" booking from the UI
            setBookings((prev) => prev.filter((booking) => booking.id !== bookingId));
            alert("Booking marked as deleted successfully.");
        } catch (err) {
            console.error("Unexpected error:", err);
            alert("An unexpected error occurred.");
        }
    };

    useEffect(() => {
        if (id) {
            fetchBookings();
        }
    }, [id]);

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-lg font-bold mb-6">Bookings</h1>
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : bookings.length > 0 ? (
                    <div className="overflow-x-auto bg-white rounded-lg shadow">
                        <table className="w-full table-auto">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Details
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {bookings
                                    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                                    .map((booking) => (
                                        <tr key={booking.schedule_id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.date}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{booking.slot}</td>
                                            <td className="px-6 py-4 text-sm text-gray-900">
                                                <p>
                                                    <span className="font-semibold">Name:</span> {booking.session_with?.name || "N/A"}
                                                </p>
                                                <p>
                                                    <span className="font-semibold">Email:</span> {booking.session_with?.email || "N/A"}
                                                </p>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                        <p className="text-yellow-700">No bookings found for this ID.</p>
                    </div>
                )}
            </div>
        </>
    );
}
