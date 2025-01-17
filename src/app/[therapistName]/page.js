'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import HeaderSection from '@/components/sections/HeaderSection'
import FooterSection from '@/components/sections/FooterSection'
import Calendar from '@/components/Calendar'
import professionals from './../../../data/professionalsData'
import Prices from '@/components/Prices'

const TherapistBooking = ({ params }) => {
  const [therapist, setTherapist] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      const { therapistName } = await params // Unwrap the promise from params
      const foundTherapist = professionals.find(t => t.slug === therapistName)

      if (!foundTherapist) {
        router.push('/404') // Redirect to 404 if not found
      } else {
        setTherapist(foundTherapist)
      }
    }

    fetchData()
  }, [params, router])

  if (!therapist) {
    return <div>Loading...</div> // Show a loading state
  }

  return (
    <>
      <HeaderSection />
      <div className='flex flex-col lg:flex-row p-6 lg:space-x-8 max-w-7xl mx-auto'>
        {leftSection(therapist)}
        {rightSection(therapist)}
      </div>
      <FooterSection />
    </>
  )
}

function rightSection (therapist) {
  return (
    <>
      <div className='lg:w-3/5 bg-gray-100 p-6 rounded-lg shadow-md'>
        <h2 className='text-xl font-semibold mb-4'>Book Your Session</h2>
        <form className='space-y-4'>
          <div>
            <div>
              <label className='block text-sm font-bold mb-2'>
                Select Mode
              </label>
              <div className='space-y-2'>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='mode-online'
                    name='mode'
                    value='online'
                    className='w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='mode-online'
                    className='ml-2 text-sm font-medium text-gray-700'
                  >
                    Online
                  </label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='mode-offline'
                    name='mode'
                    value='offline'
                    className='w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='mode-offline'
                    className='ml-2 text-sm font-medium text-gray-700'
                  >
                    Offline
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <label className='block text-sm font-bold mb-2'>
                Type of Session
              </label>
              <div className='space-y-2'>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='sessionType-individual'
                    name='sessionType'
                    value='individual'
                    className='w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='sessionType-individual'
                    className='ml-2 text-sm font-medium text-gray-700'
                  >
                    Individual
                  </label>
                </div>
                <div className='flex items-center'>
                  <input
                    type='radio'
                    id='sessionType-couples'
                    name='sessionType'
                    value='couples'
                    className='w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500'
                  />
                  <label
                    htmlFor='sessionType-couples'
                    className='ml-2 text-sm font-medium text-gray-700'
                  >
                    Couples
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor='dateTime' className='block text-sm font-bold'>
              Date & Time
            </label>
            <Calendar id={therapist.id} name={therapist.name} />
          </div>
          <div>
            <label htmlFor='contactDetails' className='block text-sm font-bold'>
              Contact Details
            </label>
            <div className='space-y-5'>
              <input
                type='text'
                id='contactDetails'
                className='w-full border-gray-300 rounded-lg p-2'
                placeholder='Name'
              />
              <input
                type='text'
                id='contactDetails'
                className='w-full border-gray-300 rounded-lg p-2'
                placeholder='Email'
              />
              <input
                type='text'
                id='contactDetails'
                className='w-full border-gray-300 rounded-lg p-2'
                placeholder='Phone'
              />
            </div>
          </div>
          <button
            type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </>
  )
}

function leftSection (therapist) {
  return (
    <>
      <div className='lg:w-2/3 space-y-6'>
        <button
          onClick={() => router.back()}
          className='text-blue-500 underline text-sm'
        >
          Back
        </button>
        <div className='flex items-center space-x-4'>
          <img
            src={therapist.profileImage}
            alt={`${therapist.name} profile`}
            className='w-28 h-28 rounded-full object-cover'
          />
          <div>
            <h1 className='text-2xl font-semibold'>{therapist.name}</h1>
            <p className='text-gray-600'>{therapist.experience}</p>
            <p className='text-gray-600'>{therapist.languages}</p>
          </div>
        </div>
        <p className='text-gray-700'>{therapist.description}</p>

        <div className='space-y-4'>
          <h2 className='text-xl font-semibold'>About {therapist.name}</h2>
          <ul className='list-disc list-inside'>
            <li>
              <strong>Education:</strong>{' '}
              {therapist.education?.join(', ') || 'No education listed'}
            </li>
          </ul>
        </div>
        <Prices therapistID={therapist.id} />
      </div>
    </>
  )
}
export default TherapistBooking
