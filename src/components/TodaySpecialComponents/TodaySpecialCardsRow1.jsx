import React from 'react'
import Img1 from '../../assets/today-special-images/sp1.jpg';
import Img2 from '../../assets/today-special-images/sp2.jpg';

const TodaySpCardsRow1 = [
    {
        spTitle: "CAMPO LINDO CHICKEN",
        spContent: "Praesent dapibus, neque id cursus faucibus, tortor neque",
        spPricing: "$20.15",
        spLabel: "in Dinners",
        spImg: Img1
    },
    {
        spTitle: "BROCCOLI SOUP",
        spContent: "Praesent dapibus, neque id cursus faucibus, tortor neque",
        spPricing: "$7.50",
        spLabel: "in Breakfast",
        spImg: Img2
    }
]

function TodaySpecialCardsRow1() {
    return (
        TodaySpCardsRow1.map((spCard, i) => {
            return (
                <div key={i} className="w-full sm:w-1/2 ">
                    <div className="group flex flex-row w-full bg-gray-100 hover:bg-[#f4b350] relative">
                        {/* Image part */}
                        <div className="w-1/2">
                            <div className="text-center relative z-10">
                                <img alt="gallery" className="absolute inset-0 h-[50vh] w-full object-cover object-center" src={spCard.spImg} />
                            </div>
                        </div>

                        {/* Text content part */}
                        <div className="w-1/2 flex justify-center items-center h-[50vh]">
                            <div className="text-center relative z-10">
                                <h2 className="text-xl text-[#222222] hover:text-white cursor-pointer font-medium title-font mb-2 font-playfairDisplay">
                                    {spCard.spTitle}
                                </h2>
                                <p className="leading-relaxed pt-3 tracking-tight text-[#999999] group-hover:text-white font-rubic">
                                    {spCard.spContent}
                                </p>
                                <span className="mt-3 block items-center font-bold text-[#f4b350] text-2xl group-hover:text-white font-playfairDisplayItalic">
                                    {spCard.spPricing}
                                </span>
                                <span className="mt-3 text-[#222222] block items-center text-xl font-playfairDisplayItalic">
                                    {spCard.spLabel}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
    )
}

export default TodaySpecialCardsRow1
