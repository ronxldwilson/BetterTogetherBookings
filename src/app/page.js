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
  const [searchQuery, setSearchQuery] = useState('')

  // Filter profileData based on the selected category and search query
  const filteredProfiles = profileData.filter(profile => {
    const matchesCategory = profile.category === selectedCategory

    // Combine search logic for name, location, and other fields
    const matchesSearchQuery =
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearchQuery
  })

  return (
    <>
      <div>
        {/* Header Section */}
        <HeaderSection />

        {/* Main Content */}
        <div className='px-4 py-6 max-w-3xl mx-auto'>
          <h1 className='text-md md:text-2xl font-bold text-gray-800 mb-4 text-center'>
            Find the right professional for your needs with better together
          </h1>
          <h2 className='text-sm md:text-md font-medium text-gray-600 text-center mb-8'>
            Connect with certified therapists, fitness coaches, psychiatric care
            specialists, and nutritionists. Book personalized sessions tailored
            to your goals and start your journey today.
          </h2>

          {/* Combined Search Input */}
          <div className='flex justify-center mb-8'>
            <input
              type='text'
              placeholder='Search by name, location, or other details...'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className='px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300 w-full max-w-md'
            />
          </div>

          {/* Pill Filters */}
          <div className='flex flex-wrap gap-2 justify-center mb-8'>
            {['Therapy', 'Fitness', 'Psychiatric Care', 'Nutrition'].map(
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
                groupSessions={profile.groupSessions}
                location={profile.location} 
              />
            ))}
          </div>
        </div>
        {/* FAQ Section */}
        <div className='mt-12'>
          <h2 className='text-xl font-bold text-gray-800 mb-6 text-center'>
            Frequently Asked Questions
          </h2>
          <div className='py-5 px-5'>
            <Accordion faqs={faqData} />
          </div>
        </div>

        {/* Footer Section */}
        <FooterSection />
      </div>
    </>
  )
}
