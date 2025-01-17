import FooterSection from '@/components/sections/FooterSection';
import HeaderSection from '@/components/sections/HeaderSection';
import TherapistCard from '@/components/TherapistCard'; // Renamed for clarity
import profileData from '../../data/professionalsData';

export default function Home() {
  return (
    <>
      <div>
        {/* Header Section */}
        <HeaderSection />

        {/* Main Content */}
        <div className="px-4 py-6 max-w-4xl mx-auto">
          <h1 className="text-md md:text-3xl font-bold text-gray-800 mb-4 text-center">
            Book Your Therapy Session Using Better Together
          </h1>
          <h2 className="text-sm md:text-xl  text-gray-600 text-center mb-8">
            Looking for therapists who get you? Book a therapy session today using better together.
          </h2>

          {/* Therapist Cards in a Single Column */}
          <div className="flex flex-col gap-6">
            {profileData.map((profile) => (
              <TherapistCard
                key={profile.id}
                slug={profile.slug}
                name={profile.name}
                verified={profile.verified}
                experience={profile.experience}
                languages={profile.languages}
                description={profile.description}
                timing={profile.timing}
                individualPrice={profile.individualPrice}
                couplesPrice={profile.couplesPrice}
                profileImage={profile.profileImage}
              />
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <FooterSection />
      </div>
    </>
  );
}
