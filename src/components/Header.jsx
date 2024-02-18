import React, { useContext, useEffect, useRef } from 'react'
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { RefContext } from '../contexts/RefContext';

const NavLinks = [
    {
        label: "HOME",
        route: '/'
    },
    {
        label: "ABOUT",
        route: '/'
    },
    {
        label: "TODAY'S SPECIAL",
        route: '/'
    },
    {
        label: "MENU",
        route: '/'
    },
    {
        label: "RESERVATION",
        route: '/'
    },
    {
        label: "TEAM",
        route: '/'
    },
    {
        label: "GALLERY",
        route: '/'
    },
    {
        label: "CONTACT",
        route: '/'
    },
    {
        label: "BLOG",
        route: '/'
    },
]
const Header = () => {
    const headerRef = useRef(null);

    const {
        homeRef,
        aboutRef,
        contactRef,
        teamRef,
        reservationRef,
        menuRef,
        galleryRef,
        todaySpecialRef
    } = useContext(RefContext);

    function handleLinkClick(e) {
        switch (e.target.innerText) {
            case "HOME":
                homeRef.current.scrollIntoView();
                break;
            case "ABOUT":
                aboutRef.current.scrollIntoView();
                break;
            case "TODAY'S SPECIAL":
                todaySpecialRef.current.scrollIntoView();
                break;
            case "MENU":
                menuRef.current.scrollIntoView();
                break;
            case "RESERVATION":
                reservationRef.current.scrollIntoView();
                break;
            case "TEAM":
                teamRef.current.scrollIntoView();
                break;
            case "GALLERY":
                galleryRef.current.scrollIntoView();
                break;
            case "CONTACT":
                contactRef.current.scrollIntoView();
                break;

            default:
                break;
        }
    }

    window.onscroll = (e) => {
        headerRef.current.className += " fixed top-0 w-screen";
        if (window.scrollY === 0) {
            headerRef.current.classList.remove("fixed");
            headerRef.current.classList.remove("top-0");
            headerRef.current.classList.remove("w-screen");
        }
    }
    return (
        <header ref={headerRef} className="text-gray-400 bg-[#222222] body-font">
            <div className="container mx-auto flex flex-wrap px-5 h-[10vh] flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium text-white mb-4 md:!mb-0 cursor-pointer">
                    <img src={Logo} alt="PLATO^" />
                </Link>
                <nav className="md:ml-auto md:mr-auto h-full flex flex-wrap items-center justify-center text-base">
                    {
                        NavLinks.map((link, index) => {
                            return (
                                <Link to={link.route} key={index} className="mr-2 px-3 h-full flex items-center justify-center text-[#999999] hover:!text-[#f4b350] text-xs font-medium cursor-pointer relative after:opacity-0 hover:after:opacity-[1] after:absolute after:top-0 after:bg-[#f4b350] after:h-1 after:w-[105%]" onClick={handleLinkClick}>
                                    {link.label}
                                </Link>
                            )
                        })
                    }
                </nav>
                {/* <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button> */}
            </div>
        </header>
    )
}

export default Header