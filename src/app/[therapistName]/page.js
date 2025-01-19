'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import HeaderSection from '@/components/sections/HeaderSection'
import FooterSection from '@/components/sections/FooterSection'
import Calendar from '@/components/Calendar'
import professionals from './../../../data/professionalsData'

// Main TherapistBooking component
const TherapistBooking = ({ params }) => {
  const [therapist, setTherapist] = useState(null) // Therapist state to store selected therapist data
  const router = useRouter() // Next.js router for navigation

  useEffect(() => {
    const fetchData = async () => {
      const { therapistName } = await params // Destructure therapist name from params
      const foundTherapist = professionals.find(t => t.slug === therapistName) // Find therapist by slug

      if (!foundTherapist) {
        router.push('/404') // Redirect to 404 page if therapist not found
      } else {
        setTherapist(foundTherapist) // Set the therapist state if found
      }
    }

    fetchData()
  }, [params, router])

  // Show a loading state until the therapist data is available
  if (!therapist) {
    return <div>Loading...</div>
  }

  return (
    <>
      <HeaderSection />
      <div className='flex flex-col lg:flex-row p-6 lg:space-x-8 max-w-7xl mx-auto'>
        {leftSection(therapist)} {/* Left section with therapist details */}
        <RightSection therapist={therapist} /> {/* Right section with booking form */}
      </div>
      <FooterSection />
    </>
  )
}

// RightSection component: Contains the booking form
function RightSection ({ therapist }) {
  // Form values state
  const [sessionMode, setSessionMode] = useState('')
  const [typeOfSession, setTypeOfSession] = useState('')
  const [selectedSlot, setSelectedSlot] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [therapistID, setTherapistID] = useState('')
  const [message,setMessage] = useState('')

  useEffect(() => {
    if (therapist?.id) {
      setTherapistID(therapist.id);
    }
  }, [therapist]);
  // Form submission handler
  const handleSubmission = async e => {
    e.preventDefault() // Prevent default form submission behavior

    // Check if all required fields are filled
    if (!sessionMode || !typeOfSession || !selectedSlot || !name || !email || !phone) {
      alert('Please fill in all fields before submitting the form.') // Alert user if any field is empty
      return
    }

    // Create formData object with all form values
    const formData = {
      therapistID,
      sessionMode,
      typeOfSession,
      selectedSlot,
      name,
      email,
      phone
    }

    console.log('Form Data:', formData) // Log form data (can be sent to server)


    try {
      const response = await fetch('/api/formSubmission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const result = await response.json()
        setMessage('Booking confirmed! We will contact you shortly.')
        setSessionMode('')
        setTypeOfSession('')
        setSelectedSlot('')
        setName('')
        setEmail('')
        setPhone('')
      } else {
        const error = await response.json()
        setMessage(`Failed to book session: ${error.message}`)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setMessage('An unexpected error occurred. Please try again.')
    }
  }

  return (
    <div className='lg:w-3/5 bg-gray-100 p-6 rounded-lg shadow-md'>
      <h2 className='text-xl font-semibold mb-4'>Book Your Session</h2>
      <form className='space-y-4' onSubmit={handleSubmission}>
        {/* Session Mode */}
        <div>
          <label className='block text-sm font-bold mb-2'>Select Mode</label>
          <div className='space-y-2'>
            <div className='flex items-center'>
              <input
                type='radio'
                id='mode-online'
                name='mode'
                value='online'
                className='w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500'
                checked={sessionMode === 'online'}
                onChange={e => setSessionMode(e.target.value)}
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
                checked={sessionMode === 'offline'}
                onChange={e => setSessionMode(e.target.value)}
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

        {/* Type of Session */}
        <div>
          <label className='block text-sm font-bold mb-2'>Type of Session</label>
          <div className='space-y-2'>
            <div className='flex items-center'>
              <input
                type='radio'
                id='sessionType-individual'
                name='sessionType'
                value='individual'
                className='w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500'
                checked={typeOfSession === 'individual'}
                onChange={e => setTypeOfSession(e.target.value)}
              />
              <label
                htmlFor='sessionType-individual'
                className='ml-2 text-sm font-medium text-gray-700'
              >
                Individual - ₹{therapist.individualPrice}
              </label>
            </div>
            <div className='flex items-center'>
              <input
                type='radio'
                id='sessionType-couples'
                name='sessionType'
                value='couples'
                className='w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500'
                checked={typeOfSession === 'couples'}
                onChange={e => setTypeOfSession(e.target.value)}
              />
              <label
                htmlFor='sessionType-couples'
                className='ml-2 text-sm font-medium text-gray-700'
              >
                Couples - ₹{therapist.couplesPrice}
              </label>
            </div>
          </div>
        </div>

        {/* Date & Time */}
        <div>
          <label htmlFor='dateTime' className='block text-sm font-bold'>
            Date & Time
          </label>
          <Calendar
            id={therapist.id}
            name={therapist.name}
            selectedSlot={selectedSlot}
            onChange={setSelectedSlot}
          />
        </div>

        {/* Contact Details */}
        <div>
          <label htmlFor='contactDetails' className='block text-sm font-bold'>
            Contact Details
          </label>
          <div className='space-y-5'>
            <input
              type='text'
              id='name'
              className='w-full border-gray-300 rounded-lg p-2'
              placeholder='Name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              type='email'
              id='email'
              className='w-full border-gray-300 rounded-lg p-2'
              placeholder='Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type='text'
              id='phone'
              className='w-full border-gray-300 rounded-lg p-2'
              placeholder='Phone'
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'
        >
          Confirm Booking
        </button>
      </form>
    </div>
  )
}

// Left section component: Displays therapist details
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
        <div>
            <h3 className="text-lg font-medium">Fees for {therapist.name}:</h3>
            <p>Individual: ₹{therapist.individualPrice}</p>
            <p>Couples: ₹{therapist.couplesPrice}</p>
        </div>
      </div>
    </>
  )
}

export default TherapistBooking
