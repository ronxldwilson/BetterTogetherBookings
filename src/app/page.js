'use client'
import { useState } from 'react'
import FooterSection from '@/components/sections/FooterSection'
import HeaderSection from '@/components/sections/HeaderSection'
import TherapistCard from '@/components/TherapistCard'
import Accordion from '@/components/Accordain'
import profileData from '../../data/professionalsData'
import faqData from '../../data/faqData'

export default function Home () {
  const [selectedCategory, setSelectedCategory] = useState('Therapy')

  // Filter profileData based on the selected category
  const filteredProfiles = profileData.filter(
    profile => profile.category === selectedCategory
  )

  return (
    <>
      
      <div>
        {/* Header Section */}
        <HeaderSection />

        {/* Main Content */}
        <div className='px-4 py-6 max-w-4xl mx-auto'>
          <h1 className='text-md md:text-3xl font-bold text-gray-800 mb-4 text-center'>
            Find the Right Professional for Your Needs with Better Together
          </h1>
          <h2 className='text-sm md:text-xl text-gray-600 text-center mb-8'>
            Connect with certified therapists, fitness coaches, psychiatric care
            specialists, and nutritionists. Book personalized sessions tailored
            to your goals and start your journey to a healthier, happier you.
          </h2>

          {/* Pill Filters */}
          <div className='flex flex-wrap gap-2 justify-center mb-8'>
            {['Therapy', 'Fitness', 'Psychiatric Care', 'Nutritionist'].map(
              category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>

          {/* Therapist Cards in a Single Column */}
          <div className='flex flex-col gap-6'>
            {filteredProfiles.map(profile => (
              <TherapistCard
                key={profile.id}
                slug={profile.slug}
                name={profile.name}
                verified={profile.verified}
                experience={profile.experience}
                languages={profile.languages}
                description={profile.description}
                individualPrice={profile.individualPrice}
                couplesPrice={profile.couplesPrice}
                profileImage={profile.profileImage}
              />
            ))}
          </div>
        </div>
        {/* FAQ Section */}
        <div className='mt-12'>
          <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
            Frequently Asked Questions
          </h2>
          <Accordion faqs={faqData} />
        </div>

        {/* Footer Section */}
        <FooterSection />
      </div>
    </>
  )
}
