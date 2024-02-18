import React, { useContext, useEffect, useRef, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/home-images/slide1.jpg';
import slide2 from '../assets/home-images/slide2.jpg';
import slide3 from '../assets/home-images/slide3.jpg';
import { RefContext } from '../contexts/RefContext';

const carouselItems = [
    {
        itemStyling: { height: '90vh' },
        img: slide1,
        imgAlt: "slide1",
        slideLabel: "Enjoy Our Food",
        slidePara: "Only the best ingredients for our dishes"
    },
    {
        itemStyling: { height: '90vh' },
        img: slide3,
        imgAlt: "slide2",
        slideLabel: "Tradition & Passion",
        slidePara: "High-class Professional Service"
    },
    {
        itemStyling: { height: '90vh' },
        img: slide2,
        imgAlt: "slide3",
        slideLabel: "Elegant Interior and Design",
        slidePara: "Only the best ingredients for our dishes"
    },
]
function Home() {
    const homeRef = useRef(null);
    const { setHomeRef } = useContext(RefContext);
    useEffect(() => {
        setHomeRef(homeRef);
    }, [])

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <section className="body-font" ref={homeRef}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {
                    carouselItems.map(
                        (Item, i) => {
                            return (
                                <Carousel.Item key={i} style={Item.itemStyling}>
                                    <Carousel.Caption className="flex flex-col h-[75%] justify-center items-center">
                                        <h1 className="text-6xl mb-12 py-10 border-y-[1.5px] border-y-white w-[50vw] font-dancing" >
                                            {Item.slideLabel}
                                        </h1>
                                        <p className="font-medium text-lg font-rubic">{Item.slidePara}.</p>
                                    </Carousel.Caption>
                                    <img src={Item.img} alt={Item.imgAlt} />
                                </Carousel.Item>
                            )
                        }

                    )
                }
            </Carousel>
        </section>
    );
}

export default Home;