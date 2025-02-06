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
        <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ marginBottom: "1rem" }}>Bookings</h1>
            {loading ? (
                <p>Loading...</p>
            ) : bookings.length > 0 ? (
                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        border: "1px solid #ddd",
                    }}
                >
                    <thead>
                        <tr
                            style={{
                                backgroundColor: "#f2f2f2",
                                textAlign: "left",
                                borderBottom: "2px solid #ddd",
                            }}
                        >
                            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Date</th>
                            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Time</th>
                            <th style={{ padding: "12px", border: "1px solid #ddd" }}>Details</th>
                            {/* <th style={{ padding: "12px", border: "1px solid #ddd" }}>Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {bookings
                            .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sorting bookings by date
                            .map((booking) => (
                                <tr key={booking.schedule_id}>
                                    <td
                                        style={{
                                            padding: "12px",
                                            border: "1px solid #ddd",
                                        }}
                                    >
                                        {booking.date}
                                    </td>
                                    <td
                                        style={{
                                            padding: "12px",
                                            border: "1px solid #ddd",
                                        }}
                                    >
                                        {booking.slot}
                                    </td>
                                    <td
                                        style={{
                                            padding: "12px",
                                            border: "1px solid #ddd",
                                        }}
                                    >
                                        <strong>Name:</strong> {booking.session_with?.name || "N/A"} <br />
                                        {/* <strong>Phone:</strong> {booking.session_with?.phone || "N/A"} <br /> */}
                                        <strong>Email:</strong> {booking.session_with?.email || "N/A"}
                                    </td>
                                    {/* <td
                                        style={{
                                            padding: "12px",
                                            border: "1px solid #ddd",
                                        }}
                                    >
                                        <button
                                            onClick={() => markAsDeleted(booking.schedule_id)}
                                            style={{
                                                backgroundColor: "red",
                                                color: "white",
                                                padding: "8px 12px",
                                                border: "none",
                                                borderRadius: "4px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Mark as Deleted
                                        </button>
                                    </td> */}
                                </tr>
                            ))}
                    </tbody>
                </table>
            ) : (
                <p>No bookings found for this ID.</p>
            )}
        </div>
    );
}
