'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import HeaderSection from '@/components/sections/HeaderSection'
import FooterSection from '@/components/sections/FooterSection'
import Calendar from '@/components/Calendar'
import professionals from './../../../../data/professionalsData'

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
        {/* Left Section: Therapist Details */}
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

          <div>
            <h3 className='text-lg font-medium'>Fees:</h3>
            <p>Individual: ₹{therapist.individualPrice}</p>
            <p>Couples: ₹{therapist.couplesPrice}</p>
          </div>
        </div>

        {/* Right Section: Booking Form */}
        <div className='lg:w-3/5 bg-gray-100 p-6 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold mb-4'>Book Your Session</h2>
          <form className='space-y-4'>
            <div>
              <label htmlFor='mode' className='block text-sm font-medium'>
                Select Mode
              </label>
              <select
                id='mode'
                className='w-full border-gray-300 rounded-lg p-2'
              >
                <option value='online'>Online</option>
                <option value='offline'>Offline</option>
              </select>
            </div>
            <div>
              <label
                htmlFor='sessionType'
                className='block text-sm font-medium'
              >
                Type of Session
              </label>
              <select
                id='sessionType'
                className='w-full border-gray-300 rounded-lg p-2'
              >
                <option value='individual'>Individual</option>
                <option value='couples'>Couples</option>
              </select>
            </div>
            <div>
              <label htmlFor='dateTime' className='block text-sm font-medium'>
                Date & Time
              </label>
              <Calendar/>
            </div>
            <div>
              <label
                htmlFor='contactDetails'
                className='block text-sm font-medium'
              >
                Contact Details
              </label>
              <input
                type='text'
                id='contactDetails'
                className='w-full border-gray-300 rounded-lg p-2'
                placeholder='Your email or phone'
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
      <FooterSection />
    </>
  )
}

export default TherapistBooking
