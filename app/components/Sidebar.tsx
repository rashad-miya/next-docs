'use client'
import React, { useState, useEffect, useRef, DetailedHTMLProps } from 'react'
import { BsBox } from 'react-icons/bs'
import { FaBicycle, FaBook, FaChevronUp } from 'react-icons/fa'
import { SiDocsdotrs } from 'react-icons/si'
import Link from 'next/link';
import { IoPlayOutline, IoRocketOutline, IoShieldOutline } from 'react-icons/io5'
import { PiSquaresFourDuotone, PiStarFour } from 'react-icons/pi'
import { MdKeyboardOptionKey, MdOutlineElectricBolt } from 'react-icons/md'
import { BiMenu } from 'react-icons/bi'
import { LuStickyNote } from 'react-icons/lu'


const Sidebar = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedRoute, setSelectedRoute] = useState({
        title: 'App Router',
        subTitle: 'Featurs in /app'
    })
    const [activeLink, setActiveLink] = useState('')
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);


    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setIsOpenModal(false);
        }
    };

    useEffect(() => {
        if (isOpenModal) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpenModal]);

    useEffect(() => {

        const currentPath = window.location.pathname;
        if (currentPath === '/docs') {
            setSelectedRoute({
                title: 'App Router',
                subTitle: 'Features in /app'
            });
        } else if (currentPath === '/docs-old') {
            setSelectedRoute({
                title: 'Pages Router',
                subTitle: 'Features in /pages'
            });
        }
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    const handleModal = () => {
        setIsOpenModal(!isOpenModal);
    }

    const handleNavigation = (event: any) => {
        event.preventDefault();
        setIsOpenModal(false);
        const url = event.currentTarget.getAttribute('href');
        setTimeout(() => {
            window.location.href = url;
        }, 300);
    };

    const handleScrollTop = (id: string) => {
        console.log(`Scrolling element with id: ${id}`);
        const sidebarElement = document.getElementById(id);
        if (sidebarElement) {
            // sidebarElement.scrollTo({
            //     top: 0,
            //     behavior: 'smooth',
            // });
            sidebarElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleItemClick = (event: any) => {
        event.preventDefault();
        const url = event.currentTarget.getAttribute('href');
        const name = event.currentTarget.getAttribute('data-name');
        console.log("active item name :", name)
        setActiveLink(name);

        setTimeout(() => {
            window.location.href = url;
        }, 300);
    }

    const SidebarContent = () => {
        return (
            <div className="grid gap-2 pb-4">
                <div className="flex items-center space-x-2 rounded-lg">
                    <Link href={''} className='rounded-lg p-2 hover:bg-hover cursor-pointer'>
                        <MdOutlineElectricBolt size={25} className='text-orange-300 scale-110' />
                    </Link>
                </div>
                <div className="py-1.5">
                    <div className="relative z-30">
                        <button className='text-white flex w-full max-w-xs items-center justify-between gap-2 cursor-pointer hover:bg-gray-950 duration-150 rounded-lg overflow-hidden pr-2'
                            onClick={handleModal}
                        >
                            <div className="text-left text-sm flex items-center gap-2 p-2 cursor-pointer hover:bg-base-200 duration-200">
                                {selectedRoute.title == 'App Router' ? (
                                    <div className="rounded-md border border-blue-400 bg-gradient-to-b from-base-content to-blue-400 p-1.5 text-blue-700">
                                        <BsBox />
                                    </div>
                                ) :
                                    (
                                        <div className="dark:border-purple-4000 rounded-md border border-purple-400 bg-gradient-to-b from-base-content to-purple-300 p-1.5 text-purple-700 ">
                                            <LuStickyNote />
                                        </div>
                                    )}

                                <div className="">
                                    <p className="font-semibold text-sm">{selectedRoute.title}</p>
                                    <p className="opacity-70 text-xs">{selectedRoute.subTitle}</p>
                                </div>
                            </div>
                            <FaChevronUp size={15} className={`w-4 h-4 duration-200 transform ${isOpenModal ? 'rotate-0' : 'rotate-180'}`} />
                        </button>
                        {isOpenModal && (
                            <div ref={modalRef} className="transform scale-100 opacity-100">
                                <div className="absolute left-0 z-10 mt-3 w-full max-w-xs transform">
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-white ring-opacity-10">
                                        <div className="relative grid bg-base-100 divide-y divide-gray-700 ">
                                            <a href='/docs' onClick={handleNavigation}>
                                                <div className="text-left text-sm text-white flex items-center gap-2 p-2 cursor-pointer hover:hover:bg-gray-950 duration-200">
                                                    <div className="rounded-md border border-gray-500 bg-gradient-to-b from-base-content to-blue-400 p-1.5 text-blue-700">
                                                        <BsBox />
                                                    </div>
                                                    <div className="">
                                                        <p className="font-semibold text-sm">App Router</p>
                                                        <p className="opacity-70 text-xs">Featurs in /app</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href='/docs-old' onClick={handleNavigation}>
                                                <div className="text-left text-sm text-white flex items-center gap-2 p-2 cursor-pointer hover:hover:bg-gray-950 duration-200">
                                                    <div className="dark:border-purple-4000 rounded-md border border-purple-400 bg-gradient-to-b from-base-content to-purple-300 p-1.5 text-purple-700 ">
                                                        <LuStickyNote />
                                                    </div>
                                                    <div className="">
                                                        <p className="font-semibold text-sm">Pages Router</p>
                                                        <p className="opacity-70 text-xs">Featurs in /pages</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid gap-1">

                    <div id='get-started' onClick={() => handleScrollTop('get-started')} >
                        <Link href={'/'} data-name={'getsatrted'}
                            className='flex items-center space-x-3 text-base-content rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content'>
                            <IoPlayOutline color='white' />
                            <span className="text-sm font-semibold text-gray-300">Get Started</span>
                        </Link>
                    </div>

                    <div id='tutorial' onClick={() => handleScrollTop('tutorial')}>
                        <Link href={'/docs/tutorials'} className='flex items-center space-x-3 text-base-content rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content'>
                            <FaBook className='text-gray-400' />
                            <span className="text-sm font-semibold text-gray-400">Tutorials</span>
                        </Link>
                        <div className="my-1">
                            <Link href={"/docs/tutorials/ship-in-5-minutes"} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="">Ship in 5 minutes</span>
                                <PiStarFour className='w-[15px] h-[15px] fill-accent' />
                            </Link>

                            <Link href={"/docs/tutorials/static-page"} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="">Static page</span>
                            </Link>

                            <Link href={"/docs/tutorials/user-authentication"} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="/docs/tutorials/user-authentication">User Authentications</span>
                            </Link>

                            <Link href={"/docs/tutorials/api-call"} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="">Api call</span>
                            </Link>

                            <Link href={"/docs/tutorials/private-page"} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="">Private page</span>
                            </Link>

                            <Link href={"/docs/tutorials/subscriptions"} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="">Stripe Subscriptions</span>
                            </Link>

                            <Link href={"/docs/tutorials/privacy-policy-gpt"} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="">Privecy policy with GPT</span>
                            </Link>

                        </div>
                    </div>


                    {/* features */}
                    <div id='features' onClick={() => handleScrollTop('features')}>
                        <Link href={'/docs/features'} className='flex items-center space-x-3 text-base-content rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content'>
                            <MdKeyboardOptionKey className='text-gray-400' />
                            <span className="text-sm font-semibold text-gray-400">Features</span>
                        </Link>
                        <div className="my-1">
                            <a href={'/docs/features/seo'} data-name={'seo'} onClick={handleItemClick}
                                className={`${activeLink == 'seo' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm  hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">SEO</span>

                            </a>

                            <a href={'/docs/features/database'} data-name={'database'} onClick={handleItemClick}
                                className={`${activeLink == 'database' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Database</span>
                            </a>

                            <a href={'/docs/features/emails'} data-name={'emails'} onClick={handleItemClick}
                                className={`${activeLink == 'emails' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Emails</span>
                            </a>

                            <a href={'/docs/features/payments'} data-name={'payments'} onClick={handleItemClick}
                                className={`${activeLink == 'payments' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Payments</span>
                            </a>

                            <a href={'/docs/features/google-oauth'} data-name={'google-auth'} onClick={handleItemClick}
                                className={`${activeLink == 'google-auth' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Goolge Auth</span>
                            </a>

                            <a href={'/docs/features/magic-links'} data-name={'magic-links'} onClick={handleItemClick}
                                className={`${activeLink == 'magic-links' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Magic Links</span>
                            </a>

                            <a href={'/docs/features/customer-support'} data-name={'customer-support'} onClick={handleItemClick}
                                className={`${activeLink == 'customer-support' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Customer Support</span>
                            </a>

                            <a href={'/docs/features/error-handling'} data-name={'error-handling'} onClick={handleItemClick}
                                className={`${activeLink == 'error-handling' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Error Handling</span>
                            </a>

                            <a href={'/docs/features/analytics'} data-name={'analytics'} onClick={handleItemClick}
                                className={`${activeLink == 'analytics' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Analytics</span>
                            </a>

                        </div>
                    </div>

                    {/* components */}
                    {/* <div id='components' onClick={() => handleScrollTop('components')}>
                        <Link href={'/docs/security'} className='flex items-center space-x-3 text-base-content rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content'>
                            <PiSquaresFourDuotone className='text-gray-400' />
                            <span className="text-sm font-semibold text-gray-400">Components</span>
                        </Link>
                        <div className="my-1">
                            <a href={'./somewhere'} data-name={'Header'} onClick={handleItemClick}
                                className={`${activeLink == 'Header' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm  hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Header</span>

                            </a>

                            <a href={'./somewhere'} data-name={'Hero'} onClick={handleItemClick}
                                className={`${activeLink == 'Hero' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Hero</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Problem'} onClick={handleItemClick}
                                className={`${activeLink == 'Problem' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Problem</span>
                            </a>

                            <a href={'./somewhere'} data-name={'WithWithout'} onClick={handleItemClick}
                                className={`${activeLink == 'WithWithout' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">WithWithout</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Features-Listicle'} onClick={handleItemClick}
                                className={`${activeLink == 'Features-Listicle' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Features Listicle</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Features-Accordion'} onClick={handleItemClick}
                                className={`${activeLink == 'Features-Accordion' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Features Accordion</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Features-Grid'} onClick={handleItemClick}
                                className={`${activeLink == 'Features-Grid' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Features Grid</span>
                            </a>

                            <a href={'./somewhere'} data-name={'CTA'} onClick={handleItemClick}
                                className={`${activeLink == 'CTA' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">CTA</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Pricing'} onClick={handleItemClick}
                                className={`${activeLink == 'Pricing' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Pricing</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Blog'} onClick={handleItemClick}
                                className={`${activeLink == 'Blog' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Blog</span>
                            </a>

                            <a href={'./somewhere'} data-name={'FAQ'} onClick={handleItemClick}
                                className={`${activeLink == 'FAQ' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">FAQ</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Testimonial-Small'} onClick={handleItemClick}
                                className={`${activeLink == 'Testimonial-Small' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Testimonial Small</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Testimonial-Single'} onClick={handleItemClick}
                                className={`${activeLink == 'Testimonial-Single' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Testimonial Single</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Testimonial-Triple'} onClick={handleItemClick}
                                className={`${activeLink == 'Testimonial-Triple' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Testimonial Triple</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Testimonial-Grid'} onClick={handleItemClick}
                                className={`${activeLink == 'Testimonial-Grid' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Testimonial Grid</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Testimonial-Avater'} onClick={handleItemClick}
                                className={`${activeLink == 'Testimonial-Avater' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Testimonial Avater</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Footer'} onClick={handleItemClick}
                                className={`${activeLink == 'Footer' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Footer</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Button-Lead'} onClick={handleItemClick}
                                className={`${activeLink == 'Button-Lead' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Button Lead</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Button-Checkout'} onClick={handleItemClick}
                                className={`${activeLink == 'Button-Checkout' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Button Checkout</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Button-Sign-in'} onClick={handleItemClick}
                                className={`${activeLink == 'Button-Sign-in' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Button Sign-in</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Button-Account'} onClick={handleItemClick}
                                className={`${activeLink == 'Button-Account' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Button Account</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Button-Gradient'} onClick={handleItemClick}
                                className={`${activeLink == 'Button-Gradient' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Button Gradient</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Button-Popover'} onClick={handleItemClick}
                                className={`${activeLink == 'Button-Popover' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Button Popover</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Button-Icon'} onClick={handleItemClick}
                                className={`${activeLink == 'Button-Icon' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Button Icon</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Rating'} onClick={handleItemClick}
                                className={`${activeLink == 'Rating' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Rating</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Modal'} onClick={handleItemClick}
                                className={`${activeLink == 'Modal' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Modal</span>
                            </a>



                        </div>
                    </div> */}

                    {/* Security */}
                    <div id='security' onClick={() => handleScrollTop('security')}>
                        <Link href={'/docs/security'} className='flex items-center space-x-3 text-base-content rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content'>
                            <IoShieldOutline className='text-gray-400' />
                            <span className="text-sm font-semibold text-gray-400">Security</span>
                        </Link>
                        <div className="my-1">
                            {/* <a href={'./somewhere'} data-name={'Sending-Limit-in-Mailgun'} onClick={handleItemClick}
                                className={`${activeLink == 'Sending-Limit-in-Mailgun' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm  hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Sending Limit in Mailgun</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Monthly-Budget-in-OpenAI'} onClick={handleItemClick}
                                className={`${activeLink == 'Monthly-Budget-in-OpenAI' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">Monthly Budget in OpenAI</span>
                            </a>

                            <a href={'./somewhere'} data-name={'Rate-Limiting'} onClick={handleItemClick}
                                className={`${activeLink == 'Rate-Limiting' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">{`Rate Limiting (Magic Links)`}</span>
                            </a> */}

                            <a href={'/docs/security/rate-limiting-api-routes'} data-name={'Rate-Limiting-api'} onClick={handleItemClick}
                                className={`${activeLink == 'Rate-Limiting-api' ? 'border-l-gray-300 text-gray-200' : 'border-l-gray-500 text-gray-400'} ml-[17px] pl-[21px] flex items-center border-l text-sm hover:border-l-gray-300 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 space-x-3 `}>
                                <span className="">{`Rate Limiting (API Routes)`}</span>
                            </a>
                        </div>
                    </div>

                    {/* deployments */}
                    <div id='Deployment' onClick={() => handleScrollTop('Deployment')}>
                        <a href={'/docs/deployments'} data-name={'Deployment'} onClick={handleItemClick}
                            className='flex items-center space-x-3 text-base-content rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content'>
                            <IoRocketOutline className={`${activeLink == 'Deployment' ? 'text-gray-200' : 'text-gray-400'}`} />
                            <span className={`${activeLink == 'Deployment' ? 'text-gray-200' : 'text-gray-400'} text-sm font-semibold `}>Deployment</span>
                        </a>
                    </div>
                    {/* extras */}

                    <div id='Extras' onClick={() => handleScrollTop('Extras')}>
                        <a href={'/docs/extras'} data-name={'Extras'} onClick={handleItemClick}
                            className='flex items-center space-x-3 text-base-content rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content'>
                            <FaBicycle className={`${activeLink == 'Extras' ? 'text-gray-200' : 'text-gray-400'}`} />
                            <span className={`${activeLink == 'Extras' ? 'text-gray-200' : 'text-gray-400'} text-sm font-semibold `}>Extras</span>
                        </a>
                    </div>

                </div>
            </div>
        )
    }

    return (
        <div>
            <div className={`fixed z-50 sm:hidden top-5 ${isSidebarOpen ? 'right-5' : 'left-5'}`}>
                <button className="btn btn-sm btn-ghost btn-square bg-[#2B2B2B] rounded-lg"
                    onClick={toggleSidebar}
                >
                    <BiMenu size={24} />
                </button>
            </div>

            {/* mobile sidebar */}
            {/* {isSidebarOpen && ( */}
            <div className={`${isSidebarOpen ? 'w-full translate-x-0' : 'w-0 -translate-x-full'} overflow-y-auto pb-12 transform fixed z-40 flex h-full flex-col justify-between bg-base-100 p-4 transition-all`}>
                <SidebarContent />
            </div>
            {/* )} */}

            {/* desktop sidebar */}
            <div className={`overflow-y-auto scrollbar-large overflow-x-visible pb-12 transform translate-x-0 fixed z-40 h-full flex-col justify-between bg-base-100 p-4 transition-all sm:w-64 sm:translate-x-0 hidden md:flex`}>
                <SidebarContent />
            </div>
        </div>
    )
}

export default Sidebar