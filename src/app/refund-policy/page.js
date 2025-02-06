import FooterSection from "@/components/sections/FooterSection";
import HeaderSection from "@/components/sections/HeaderSection";

export default function Disclaimer() {
  return (
    <>
      <HeaderSection />
      <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Refund & Cancellation Policy</h1>

        <section className="space-y-6">
            <h2 className="text-lg font-semibold mb-4">1. Cancellation Policy</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Users can cancel their bookings by contacting customer support at{" "}
                <a href="mailto:queries.bettertogether@gmail.com" className="text-blue-600 underline">
                  queries.bettertogether@gmail.com
                </a>.
              </li>
              <li>Cancellations made <strong>24 hours</strong> before the scheduled appointment will be eligible for a full refund.</li>
              <li>Cancellations made between <strong>12-24 hours</strong> before the scheduled appointment will be eligible for a maximum <strong>50% refund</strong>.</li>
              <li>No-shows without prior cancellation will not be eligible for any refund.</li>
            </ul>


            <h2 className="text-lg font-semibold mb-4">2. Refund Policy</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Refunds will be processed within <strong>7 business days</strong> of the cancellation confirmation.</li>
              <li>If a service provider cancels the appointment, users will receive a full refund or an option to reschedule at no additional cost.</li>
              <li>
                In case of dissatisfaction with a service, refund requests will be reviewed on a <strong>case-by-case basis</strong>. Users must submit a complaint within <strong>24 hours</strong> after the appointment.
              </li>
            </ul>


            <h2 className="text-lg font-semibold mb-4">3. Rescheduling Policy</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Users can reschedule their bookings up to <strong>24 hours</strong> before the scheduled appointment without additional charges.</li>
              <li>Rescheduling requests made within <strong>24 hours</strong> of the appointment may be subject to fees or availability.</li>
            </ul>


            <h2 className="text-lg font-semibold mb-4">4. Special Cases & Exceptions</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Emergency situations such as medical issues or unforeseen circumstances will be considered for refunds or rescheduling on a <strong>case-by-case basis</strong>.</li>
              <li>If a service provider fails to deliver as promised, users may be eligible for a full or partial refund after an internal review.</li>
            </ul>


            <h2 className="text-lg font-semibold mb-4">5. Contact & Support</h2>
            <p>
              For cancellations, refunds, or rescheduling requests, please contact our support team at{" "}
              <a href="mailto:queries.bettertogether@gmail.com" className="text-blue-600 underline">
                queries.bettertogether@gmail.com
              </a>.
            </p>

        </section>
      </main>
      <FooterSection />
    </>
  );
}
