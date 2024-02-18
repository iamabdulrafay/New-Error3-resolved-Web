import React from 'react'
import SectionHead from '../components/SectionHead';
import BrightMediaLinks from '../components/BrightMediaLinks';

const sectionTitle = "Get in Touch";
const sectionDescription = "Sed arcu.Cras consequat.";
function Contact() {
    return (
        <section id='contact-section' className="body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <SectionHead sectionTitle={sectionTitle} sectionDescription={sectionDescription} titleTextClr={"white"} paraTextClr='[#ccc]' />

                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 flex flex-row justify-around">
                    <div className="flex flex-col items-center text-sm leading-relaxed tracking-wide font-rubic">
                        <h2 className="title-font font-medium text-3xl text-white font-playfairDisplay">
                            Contact Info
                        </h2>

                        <p className='text-[#ccc] text-center mt-4'>
                            732/21 Second Street, Manchester,
                            <br />
                            King Street, Kingston United
                        </p>

                        <div className="time-month flex flex-col my-4 items-center text-[#f4b350]">
                            <span className="month leading-relaxed">
                                + 123 4567-32-21
                            </span>
                            <span className="time leading-relaxed">
                                + 123 9876-54-43
                            </span>
                        </div>
                        <p className='text-[#ccc]'>
                            info@mail.com
                        </p>

                        <div className="media-links flex my-10">
                            <BrightMediaLinks mediaNames={[
                                "facebook", "twitter", "dribble", "google", "linkedin", "pinterest"
                            ]} />
                        </div>
                    </div>

                    <div className="flex flex-col items-center text-sm leading-relaxed tracking-wide font-rubic">
                        <h2 className="title-font font-medium text-3xl text-white font-playfairDisplay">
                            Open Hours
                        </h2>

                        <div className="time-month flex flex-col mt-4 items-center">
                            <span className="month leading-relaxed text-[#f4b350]">
                                Monday — Thursday
                            </span>
                            <span className="time leading-relaxed text-white">
                                8 am — 11 pm
                            </span>
                        </div>

                        <div className="time-month flex flex-col mt-4 items-center">
                            <span className="month leading-relaxed text-[#f4b350]">
                                Monday — Thursday
                            </span>
                            <span className="time leading-relaxed text-white">
                                11 am — 11 pm
                            </span>
                        </div>
                        <p className='text-[#ccc] text-center mt-4'>
                            Note: Restaurant is closed on holidays.
                        </p>
                    </div>
                </div>
                <form className="lg:w-2/6 md:w-1/2 p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 font-playfairDisplay">
                    <h2 className="text-white text-3xl font-medium title-font mb-4 text-center">Say Hello!</h2>
                    <div className="relative mb-3 text-[#999999]">
                        <input type="text" placeholder='Name*' id="full-name" name="full-name" className="w-full bg-white focus:ring-2 focus:ring-indigo-200 text-xs font-medium outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-3 text-[#999999]">
                        <input type="email" placeholder='Email*' id="email" name="email" className="w-full bg-white focus:ring-2 focus:ring-indigo-200 text-xs font-medium outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-3 text-[#999999]">
                        <textarea type="text" placeholder='*Message*' id="email" name="email" className="w-full bg-white focus:ring-2 focus:ring-indigo-200 text-xs font-medium outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button type='button' className="text-[#999999] bg-transparent border !border-[#999999] py-[3%] mx-auto w-[50%] focus:outline-none hover:!bg-[#f4b350] rounded text-xs uppercase font-light font-rubic ">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;