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
          professional_id,
          date,
          slot,
          session_with (
            name,
            phone,
            email
          )
        `)
        .eq("professional_id", id);

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
            </tr>
          </thead>
          <tbody>
            {bookings
              .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sorting bookings by date
              .map((booking) => (
                <tr key={booking.id}>
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
                    <strong>Phone:</strong> {booking.session_with?.phone || "N/A"} <br />
                    <strong>Email:</strong> {booking.session_with?.email || "N/A"}
                  </td>
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
