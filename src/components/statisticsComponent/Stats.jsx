import React, { useEffect, useRef } from 'react'

function Stats({ statistic }) {
    const statsRef = useRef(null);
    let count = 0;
    useEffect(() => {
        const timer = setInterval(() => {
            statsRef.current.innerText = count;
            count++;

            if (count > statistic.stats) {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, [statistic.stats])

    return (
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="px-4 py-6 w-[130%]">
                <p ref={statsRef} className='text-[#f4b350] font-playfairDisplay text-4xl tracking-wide font-medium'>
                    {count}
                </p>
                <h2 className="title-font font-medium font-playfairDisplay italic text-xl text-black py-4">
                    {statistic.label}
                </h2>
                <p className="leading-normal font-rubic text-base tracking-tight text-[#777777]">{statistic.desc}</p>
            </div>
        </div>
    )
}

export default Stats
