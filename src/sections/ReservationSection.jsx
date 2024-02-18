import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ReservationSection({ setScrollMethod }) {
    const navigate = useNavigate();
    const reservationSectionRef = useRef(null);

    useEffect(() => {
        setScrollMethod(
            () => {
                reservationSectionRef.current?.scrollIntoView();
            }
        );
    }, [])

    const [bookingCredentials, setBookingCredentials] = useState(
        {
            guestName: "",
            date: "",
            time: "",
            persons: ""
        }
    );

    const onBookingFieldsChange = (e) => {
        setBookingCredentials(
            { ...bookingCredentials, [e.target.name]: e.target.value }
        )
    }

    const handleClickToBook = (e) => {
        localStorage.setItem('Booking Credentials', JSON.stringify(bookingCredentials));
        setBookingCredentials(
            {
                guestName: "",
                date: "",
                time: "",
                persons: ""
            }
        )
        if (localStorage.getItem('Booking Credentials')) navigate('/booking-res');
    }

    return (
        <section id='reservation-section' className="text-white body-font relative" ref={reservationSectionRef}>
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <form className="lg:w-1/3 md:w-1/2 bg-transparent flex flex-col md:mr-auto w-full md:py-8 mt-8 md:mt-0">
                    <h1 className="title-font sm:text-4xl !text-[2.5rem] mb-4 font-medium tracking-tight text-white font-playfairDisplay after:bg-[#f4b350] after:block after:mr-auto after:w-8 after:h-[3px] after:my-4">
                        Make Reservation
                    </h1>
                    <p className="leading-relaxed mb-5 text-[#ccc]">Booking a table has never been so easy with free & instsstant online restaurant reservations, booking now!!</p>
                    <div className="relative mb-4">
                        <label htmlFor="guestName" className="leading-7 my-2 text-sm text-white">Guest Name</label>
                        <input value={bookingCredentials.guestName} onChange={onBookingFieldsChange} placeholder='Name' type="text" id="guestName" name="guestName" className="w-full bg-white border border-gray-300 outline-none text-[#999999] py-1 px-3 text-sm leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="date" className="leading-7 my-2 text-sm text-white">Date</label>
                        <input value={bookingCredentials.date} onChange={onBookingFieldsChange} type="date" id="date" name="date" className="w-full bg-white border border-gray-300 outline-none text-[#999999] py-1 px-3 text-sm leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="p-2 flex justify-between items-center w-full">
                        <div className="relative w-[50%] -ml-2">
                            <label htmlFor="time" className="leading-7 my-2 text-sm text-white">Time</label>
                            <input value={bookingCredentials.time} onChange={onBookingFieldsChange} type="time" id="time" name="time" className="w-full bg-white border border-gray-300 focus:bg-transparent outline-none text-[#999999] py-1 px-3 text-sm leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative w-[50%] -mr-2">
                            <label htmlFor="persons" className="leading-7 my-2 text-sm text-white">Persons</label>
                            <input value={bookingCredentials.persons} onChange={onBookingFieldsChange} placeholder='2 people' type="number" id="persons" name="persons" className="w-full bg-white border border-gray-300 focus:bg-transparent outline-none text-[#999999] py-1 px-3 text-sm leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </div>
                    <button type='button' onClick={handleClickToBook} className="text-[#f4b350] bg-transparent border-[1px] border-[#f4b350] rounded-sm py-[0.5rem] px-4 my-8 mr-auto focus:outline-none hover:!bg-[#f4b350] hover:text-[#fff] text-md">Find A Table</button>
                </form>
            </div>
        </section>
    )
}

export default ReservationSection
