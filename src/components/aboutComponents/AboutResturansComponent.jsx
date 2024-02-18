import React from 'react';
import Img1 from '../../assets/about-images/resturan-img1.jpg';
import Img2 from '../../assets/about-images/resturan-img2.jpg';

function AboutResturansComponent() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
                    <h3 className="title-font sm:text-4xl !text-[1.90rem] mb-4 font-normal text-gray-900 font-playfairDisplay">
                        Our Restorans
                    </h3>
                    <p className="mb-8 leading-relaxed font-rubic">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.</p>
                    <p className="mb-8 leading-relaxed">If you have any questions, we are here to support you 24/7. We do our best to make your life happier and easier! See you soon!</p>
                    <div className="flex justify-center">
                        <span>
                            <p className='text-[#f4b350] font-playfairDisplay'>Monday — Thursday</p>
                            <p className='font-playfairDisplay'>8 am — 11 pm</p>
                        </span>
                        <span className='mx-16'>
                            <p className='text-[#f4b350] font-playfairDisplay'>Friday — Sunday</p>
                            <p className='font-playfairDisplay'>11 am — 11 pm</p>
                        </span>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex flex-row items-center">
                    <img className="object-cover object-center rounded-sm mx-1" alt="hero" src={Img1} />
                    <img className="object-cover object-center rounded-sm mx-1" alt="hero" src={Img2} />
                </div>
            </div>
        </section>
    )
}

export default AboutResturansComponent;