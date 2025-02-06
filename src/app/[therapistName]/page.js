'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import HeaderSection from '@/components/sections/HeaderSection'
import FooterSection from '@/components/sections/FooterSection'
import Calendar from '@/components/Calendar'
import Script from 'next/script'
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
      <Script
        id='razorpay-checkout-js'
        src='https://checkout.razorpay.com/v1/checkout.js'
      />
      <HeaderSection />
      <div className='flex flex-col lg:flex-row p-6 lg:space-x-8 max-w-7xl mx-auto'>
        {leftSection(therapist)} {/* Left section with therapist details */}
        <RightSection therapist={therapist} />{' '}
        {/* Right section with booking form */}
      </div>
      <FooterSection />
    </>
  )
}

const addUser = async (user_id, name, email, phone) => {
  try {
    const response = await fetch('/api/addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: user_id,
        name: name,
        email: email,
        phone: phone
      })
    })

    if (!response.ok) {
      const errorDetails = await response.text() // Get additional error info from the server
      throw new Error(`Network response was not ok: ${errorDetails}`)
    }

    const data = await response.json()
    return data.userId // ### THIS NEEDS TO BE CHANGED
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error)
    throw error // Re-throwing to handle it elsewhere if needed
  }
}

const addPayment = async (orderID, name, email, phone) => {
  try {
    const response = await fetch('/api/addPayment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        orderID: orderID,
        name: name,
        email: email,
        phone: phone
      })
    })

    if (!response.ok) {
      const errorDetails = await response.text() // Get additional error info from the server
      throw new Error(`Network response was not ok: ${errorDetails}`)
    }

    const data = await response.json()
    return data.orderId // ### THIS NEEDS TO BE CHANGED
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error)
    throw error // Re-throwing to handle it elsewhere if needed
  }
}

const addSchedule = async (professional_id, date, slot, userId, orderId) => {
  try {
    const response = await fetch('/api/addSchedule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        professional_id: professional_id,
        date: date,
        slot: slot,
        session_with: userId,
        order_id: orderId
      })
    })

    if (!response.ok) {
      const errorDetails = await response.text() // Get additional error info from the server
      throw new Error(`Network response was not ok: ${errorDetails}`)
    }

    const data = await response.json()
    return data.orderId // ### THIS NEEDS TO BE CHANGED
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error)
    throw error // Re-throwing to handle it elsewhere if needed
  }
}

const sendEmail = async (
  to,
  date,
  slot,
  therapistName,
  therapistEmail,
  orderId,
  sessionMode,
  address
) => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to,
        date,
        slot,
        therapistName,
        therapistEmail,
        orderId,
        sessionMode,
        address
      })
    })

    if (!response.ok) {
      const errorDetails = await response.text() // Get error details if available
      throw new Error(`Failed to send email: ${errorDetails}`)
    }

    const data = await response.json()
    return data.success // Return the success status to the caller
  } catch (error) {
    console.error('Error sending email:', error)
    throw error // Re-throw the error to handle it elsewhere if needed
  }
}

const createOrderId = async amount => {
  try {
    const response = await fetch('/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: parseFloat(amount) * 100
      })
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data.orderId
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error)
  }
}

// RightSection component: Contains the booking form
function RightSection ({ therapist }) {
  const [sessionMode, setSessionMode] = useState('')
  const [typeOfSession, setTypeOfSession] = useState('')
  const [selectedSlot, setSelectedSlot] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [therapistID, setTherapistID] = useState('')
  const [message, setMessage] = useState('')
  const router = useRouter()
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (therapist?.id) {
      setTherapistID(therapist.id)
      setAddress(therapist.address)
    }
  }, [therapist])

  const handleSubmission = async e => {
    e.preventDefault()

    if (
      !sessionMode ||
      !typeOfSession ||
      !selectedSlot ||
      !name ||
      !email ||
      !phone
    ) {
      alert('Please fill in all fields before submitting the form.')
      return
    }

    const amount =
      typeOfSession === 'individual'
        ? therapist.individualPrice
        : therapist.couplesPrice

    try {
      // Create the order ID using the selected amount
      const orderId = await createOrderId(amount)

      // Proceed with payment using Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Use public key
        amount: amount * 100,
        currency: 'INR',
        name: therapist.name,
        description: `Session with ${therapist.name}`,
        order_id: orderId,
        handler: async function (response) {
          const data = {
            orderCreationId: orderId,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature
          }

          const result = await fetch('/api/verify', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
          })

          const res = await result.json()
          if (res.isOk) {
            setMessage('Payment Successfully Completed!')
            // console.log(res)
            // Redirect or take further action
            try {
              const user_id = crypto.randomUUID()
              // console.log(user_id)
              const STEP1 = await addUser(user_id, name, email, phone)

              // console.log('USER INSERT:DONE')
              const STEP2 = await addPayment(orderId, name, email, phone)
              // console.log('PAYMENT INSERT:DONE')
              const STEP3 = await addSchedule(
                therapist.id,
                selectedSlot.slice(0, 10),
                selectedSlot.slice(11),
                user_id,
                orderId
              )
              sendEmail(
                email,
                selectedSlot.slice(0, 10),
                selectedSlot.slice(11),
                therapist.name,
                therapist.email,
                orderId,
                sessionMode,
                address
              ) //to, date, slot, therapistName, therapistEmail, orderId, sessionMode, address

              const responseBody = {
                paymentId: response.razorpay_payment_id,
                orderId: orderId,
                therapistName: therapist.name,
                sessionDate: selectedSlot.slice(0, 10),
                sessionTime: selectedSlot.slice(11),
                sessionMode: sessionMode,
                sessionType: typeOfSession,
                userName: name,
                userEmail: email,
                userPhone: phone
              }

              // Store in sessionStorage or localStorage
              sessionStorage.setItem(
                'sessionDetails',
                JSON.stringify(responseBody)
              )

              // Navigate to confirmation page
              router.push('/confirmation')
            } catch (error) {
              console.error('Error adding user:', error)
            }
          } else {
            setMessage(`Payment failed: ${res.message}`)
          }
        },
        prefill: {
          name: name,
          email: email
        },
        theme: {
          color: '#3399cc'
        }
      }

      const paymentObject = new window.Razorpay(options)
      paymentObject.on('payment.failed', function (response) {
        alert(`Payment failed: ${response.error.description}`)
      })
      paymentObject.open()
    } catch (error) {
      console.error('Error during payment process:', error)
      setMessage('An error occurred. Please try again later.')
    }
  }

  return (
    <div className='lg:w-3/5 bg-gray-100 my-4 p-6 rounded-lg shadow-md'>
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
            {therapist.offlineSessions && (
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
            )}
          </div>
        </div>

        {/* Type of Session */}
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
                checked={typeOfSession === 'individual'}
                onChange={e => setTypeOfSession(e.target.value)}
              />
              <label
                htmlFor='sessionType-individual'
                className='ml-2 text-sm font-medium text-gray-700'
              >
                Individual - ₹{therapist.individualPrice} for 50 mins
              </label>
            </div>

            {therapist.groupSessions && (
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
                  Couples - ₹{therapist.couplesPrice} for 50 mins
                </label>
              </div>
            )}
          </div>
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
              className='w-full border-gray-300 rounded-lg p-2 text-sm'
              placeholder='Name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input
              type='email'
              id='email'
              className='w-full border-gray-300 rounded-lg p-2 text-sm'
              placeholder='Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type='text'
              id='phone'
              className='w-full border-gray-300 rounded-lg p-2 text-sm'
              placeholder='Phone'
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
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
            noOfSlots={
              typeof window !== 'undefined' &&
              window.matchMedia('(min-width: 768px)').matches
                ? 4
                : 2
            }
          />
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700'
        >
          Confirm Booking
        </button>
      </form>
      {message && <p className='text-center text-red-500 mt-4'>{message}</p>}
    </div>
  )
}

// Left section component: Displays therapist details
function leftSection (therapist) {
  return (
    <>
      <div className='lg:w-2/3 space-y-6'>
        {/* <button
          onClick={() => router.back()}
          className='text-blue-500 underline text-sm'
        >
          Back
        </button> */}
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
        <p
          className='text-gray-700'
          dangerouslySetInnerHTML={{ __html: therapist.description }}
        />

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
          <h3 className='text-lg font-bold'>Fees for {therapist.name}:</h3>
          <p>Individual: ₹{therapist.individualPrice} for 50 mins</p> 
          {therapist.groupSessions && (
            <p>Group Sessions: ₹{therapist.groupPrice} for 50 mins</p>
          )}
        </div>

        {/* Location Section */}
        {therapist.offlineSessions && (
          <div className='mt-8'>
            <h3 className='text-xl font-semibold text-gray-900 mb-3'>
              Location
            </h3>
            <p className='text-gray-600 mb-4'>
              Detailed address will be shared over email for offline sessions
            </p>

            <div className='overflow-hidden rounded-lg shadow-md'>
              <iframe
                src={therapist.location}
                className='w-full h-64 sm:h-80 md:h-96'
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Therapist Location'
              ></iframe>
            </div>
          </div>
        )}

        {/* Rating and Testimonials Section */}
        <div className='space-y-4'>
          <h3 className='text-lg font-bold'>Rating</h3>
          <div className='flex items-center space-x-2'>
            <span className='text-yellow-400'>
              {'★'.repeat(therapist.rating)}
              {'☆'.repeat(5 - therapist.rating)}
            </span>
            <span className='text-gray-600'>({therapist.rating}/5)</span>
          </div>
          <div>
            <h4 className='text-lg font-semibold'>Testimonials</h4>
            <ul className='space-y-2'>
              {therapist.testimonials && therapist.testimonials.length > 0 ? (
                therapist.testimonials.map((testimonial, index) => (
                  <li key={index} className='text-gray-600'>
                    <p>
                      <strong>{testimonial.name}:</strong> "
                      {testimonial.testimonial}"
                    </p>
                  </li>
                ))
              ) : (
                <li className='text-gray-500'>No testimonials available.</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default TherapistBooking
