import React, { useContext, useEffect, useRef } from 'react';
import SectionHead from '../components/commons/SectionHead'
import ContactInfo from '../components/contactComponents/ContactInfo';
import { RefContext } from '../contexts/RefContext';

const sectionTitle = "Get in Touch";
const sectionDescription = "Sed arcu. Cras consequat.";
function Contact() {
    const contactRef = useRef(null);
    const { setContactRef } = useContext(RefContext);
    useEffect(() => {
        setContactRef(contactRef);
    }, [])
    return (
        <section ref={contactRef} id='contact-section' className="body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center">
                <SectionHead sectionTitle={sectionTitle} sectionDescription={sectionDescription} titleTextClr={"white"} paraTextClr='[#ccc]' />
                <ContactInfo />
                <form className="lg:w-2/6 md:w-1/2 px-3 -mr-8 flex flex-col w-[full] mt-10 md:mt-0 font-playfairDisplay">
                    <h2 className="text-white text-3xl font-medium title-font mb-[2rem] text-center">Say Hello!</h2>
                    <div className="relative mb-2.5 text-[#999999]">
                        <input type="text" placeholder='Name*' id="full-name" name="full-name" className="w-full bg-white focus:ring-2 focus:ring-indigo-200 text-xs font-medium outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-2.5 text-[#999999]">
                        <input type="email" placeholder='Email*' id="email" name="email" className="w-full bg-white focus:ring-2 focus:ring-indigo-200 text-xs font-medium outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <div className="relative mb-2.5 text-[#999999]">
                        <textarea type="text" placeholder='*Message*' id="email" name="email" className="w-full bg-white focus:ring-2 focus:ring-indigo-200 text-xs font-medium outline-none py-1 px-3 h-[15vh] leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button type='button' className="text-[#999999] bg-transparent border !border-[#999999] py-[3%] mx-auto w-[50%] -mt-1.5 focus:outline-none hover:!bg-[#f4b350] rounded text-xs uppercase font-light font-rubic ">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;