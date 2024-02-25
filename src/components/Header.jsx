import React, { useContext, useEffect, useRef, useState } from 'react'
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
        route: '/blogs'
    },
]
const Header = () => {
    const [activeSection, setActiveSection] = useState(null);

    const headerRef = useRef(null);
    const navRef = useRef(null);

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

    useEffect(() => {
        window.onscroll = (e) => {
            headerRef.current.className += " fixed top-0 w-screen";
            if (window.scrollY === 0) {
                headerRef.current.classList.remove("fixed");
                headerRef.current.classList.remove("top-0");
                headerRef.current.classList.remove("w-screen");
            }
        }
    }, [])

    useEffect(() => {
        if (!!homeRef && !!aboutRef && !!todaySpecialRef && !!menuRef && !!reservationRef && !!teamRef && !!galleryRef && !!contactRef) {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1 // Percentage of the section visible
            };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        switch (entry.target) {
                            case homeRef.current:
                                setActiveSection("HOME");
                                break;
                            case aboutRef.current:
                                setActiveSection("ABOUT");
                                break;
                            case todaySpecialRef.current:
                                setActiveSection("TODAYS-SPECIAL");
                                break;
                            case menuRef.current:
                                setActiveSection("MENU");
                                break;
                            case reservationRef.current:
                                setActiveSection("RESERVATION");
                                break;
                            case teamRef.current:
                                setActiveSection("TEAM");
                                break;
                            case galleryRef.current:
                                setActiveSection("GALLERY");
                                break;
                            case contactRef.current:
                                setActiveSection("CONTACT");
                                break;
                            default:
                                setActiveSection(null);
                                break;
                        }
                    }
                });
            },
                observerOptions);

            const sections = [
                homeRef?.current,
                aboutRef?.current,
                todaySpecialRef?.current,
                menuRef?.current,
                reservationRef?.current,
                teamRef?.current,
                galleryRef?.current,
                contactRef?.current
            ];

            sections.forEach((section) => {
                if (section) {
                    observer.observe(section);
                }
            });

            return () => {
                sections.forEach((section) => {
                    if (section) {
                        observer.unobserve(section);
                    }
                });
            };
        }
    }, [
        homeRef,
        aboutRef,
        todaySpecialRef,
        menuRef,
        reservationRef,
        teamRef,
        galleryRef,
        contactRef
    ]);

    useEffect(() => {
        if (navRef.current?.querySelector(`#${activeSection}`)) {
            Array.from(navRef.current.children).forEach((link) => {
                if (link.classList.contains("text-[#f4b350]") || link.classList.contains("after:opacity-[1]")) {
                    link.classList.remove("text-[#f4b350]");
                    link.classList.remove("after:opacity-[1]");
                }
            })
            const activeLink = navRef.current?.querySelector(`#${activeSection}`);
            activeLink.className += " text-[#f4b350] after:opacity-[1]";
        }
    }, [activeSection])



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
    return (
        <header ref={headerRef} className="text-gray-400 bg-[#222222] body-font">
            <div className="container mx-auto flex flex-wrap px-5 w-full h-[10vh] flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium text-white mb-4 md:!mb-0 cursor-pointer">
                    <img src={Logo} alt="PLATO^" />
                </Link>
                <nav ref={navRef} className="md:ml-auto md:mr-auto h-full flex flex-wrap items-center justify-center text-base">
                    {
                        NavLinks.map((link, index) => {
                            return (
                                <Link to={link.route} key={index} id={
                                    link.label === "TODAY'S SPECIAL" ? "TODAYS-SPECIAL" : link.label
                                } className="mr-2 px-3 h-full flex items-center justify-center text-[#999999] hover:!text-[#f4b350] text-xs font-medium cursor-pointer relative after:opacity-0 hover:after:opacity-[1] after:absolute after:top-0 after:bg-[#f4b350] after:h-1 after:w-[105%]" onClick={handleLinkClick}>
                                    {link.label}
                                </Link>
                            )
                        })
                    }
                </nav>
            </div>
        </header>
    )
}

export default Header