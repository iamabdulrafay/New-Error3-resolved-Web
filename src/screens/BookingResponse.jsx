import React from 'react'
import { useNavigate } from 'react-router-dom';

function BookingResponse({ appTitle, scrollMethod }) {
    const navigate = useNavigate();

    const { guestName, date, time, persons } = JSON.parse(localStorage.getItem("Booking Credentials"));

    const handleClickToGoBack = (e) => {
        navigate('/');
        scrollMethod();
    }
    return (
        <section id='bookingResponse-section' className="text-[#fff] font-rubic h-screen body-font relative overflow-hidden">
            {/* Black Cover */}
            <div className='bg-black w-screen h-screen absolute opacity-30'></div>

            <div className="container px-5 py-24 flex flex-col sm:flex-nowrap flex-wrap justify-center items-center h-full">
                <h2 className='text-[#f4b350] font-dancing font-bold text-3xl my-3'>Reservation Confirmation</h2>
                <p className='text-xl'>
                    Thank you for choosing
                    <span className='text-[#f4b350] font-semibold font-playfairDisplayItalic'>"{appTitle}"</span>
                    Your reservation has been successfully booked for
                    <span className='text-[#f4b350] font-semibold font-playfairDisplayItalic'> "{guestName}"</span>
                    on
                    <span className='text-[#f4b350] font-semibold font-playfairDisplayItalic'> "{date}"</span>
                    at
                    <span className='text-[#f4b350] font-semibold font-playfairDisplayItalic'> "{time}"</span>
                    for
                    <span className='text-[#f4b350] font-semibold font-playfairDisplayItalic'>"{persons}"</span>
                    persons.
                </p>
                <p className='text-xl'>
                    We look forward to welcoming you and ensuring you have a delightful dining experience.
                </p>
                <p className='text-xl'>
                    Should you need to make any changes or have any special requests, please don't hesitate to contact us.
                </p>
                <p className='text-xl'>
                    See you soon!
                </p>

                <button type='button' onClick={handleClickToGoBack} className="text-[#f4b350] bg-transparent border-[1px] border-[#f4b350] rounded-sm py-[0.5rem] px-4 my-8 mx-auto focus:outline-none hover:bg-[#f4b350] hover:text-[#fff] text-md cursor- z-[1]">
                    Back To Reservation
                </button>
            </div>
        </section>
    )
}

export default BookingResponse
