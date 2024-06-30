'use client'
import React, { useState } from 'react'
import { BsBox } from 'react-icons/bs'
import { FaBook, FaChevronUp } from 'react-icons/fa'
import { SiDocsdotrs } from 'react-icons/si'
import Link from 'next/link';
import { IoPlayOutline } from 'react-icons/io5'
import { PiStarFour } from 'react-icons/pi'
import { MdKeyboardOptionKey } from 'react-icons/md'
import { BiMenu } from 'react-icons/bi'
import { useRouter } from 'next/router'

const Sidebar = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
        }, 300); // Wait for the transition to complete
    };

    const SidebarContent = () => {
        return (
            <div className="grid gap-2 pb-4">
                <div className="flex items-center space-x-2 rounded-lg">
                    <Link href={''} className='rounded-lg p-2 hover:bg-hover cursor-pointer'>
                        <SiDocsdotrs size={20} className='text-orange-600 scale-110' />
                    </Link>
                </div>
                <div className="py-1.5">
                    <div className="relative z-30">
                        <button className='text-white flex w-full max-w-xs items-center justify-between gap-2 cursor-pointer hover:bg-gray-950 duration-150 rounded-lg overflow-hidden pr-2'
                            onClick={handleModal}
                        >
                            <div className="text-left text-sm flex items-center gap-2 p-2 cursor-pointer hover:bg-base-200 duration-200">
                                <div className="rounded-md border border-blue-400 bg-gradient-to-b from-base-content to-blue-400 p-1.5 text-blue-700">
                                    <BsBox />
                                </div>
                                <div className="">
                                    <p className="font-semibold text-sm">App Router</p>
                                    <p className="opacity-70 text-xs">Featurs in /app</p>
                                </div>
                            </div>
                            <FaChevronUp size={15} className={`w-4 h-4 duration-200 transform ${isOpenModal ? 'rotate-0' : 'rotate-180'}`} />
                        </button>
                        {isOpenModal && (
                            <div className="transform scale-100 opacity-100">
                                <div className="absolute left-0 z-10 mt-3 w-full max-w-xs transform">
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-2 ring-white ring-opacity-10">
                                        <div className="relative grid bg-base-100 divide-y divide-gray-500 ">
                                            <a href='./docs' onClick={handleNavigation}>
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
                                            <a href='./docs-old' onClick={handleNavigation}>
                                                <div className="text-left text-sm text-white flex items-center gap-2 p-2 cursor-pointer hover:hover:bg-gray-950 duration-200">
                                                    <div className="rounded-md border border-gray-500 bg-gradient-to-b from-base-content to-blue-400 p-1.5 text-blue-700">
                                                        <BsBox />
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
                    <div className="">
                        <Link href={''} className='flex items-center space-x-3 text-base-content rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content'>
                            <IoPlayOutline color='white' />
                            <span className="text-sm font-semibold text-gray-300">Get Started</span>
                        </Link>
                    </div>

                    <div className="">
                        <Link href={''} className='flex items-center space-x-3 text-base-content rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content'>
                            <FaBook className='text-gray-400' />
                            <span className="text-sm font-semibold text-gray-400">Tutorials</span>
                        </Link>
                        <div className="my-1">
                            <Link href={""} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="">Ship in 5 minutes</span>
                                <PiStarFour className='w-[15px] h-[15px] fill-accent' />
                            </Link>

                            <Link href={""} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="">Static page</span>
                            </Link>

                            <Link href={""} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="">User Authentications</span>
                            </Link>

                            <Link href={""} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="">Api call</span>
                            </Link>

                            <Link href={""} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="">Private page</span>
                            </Link>

                            <Link href={""} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="">Stipe Subscriptions</span>
                            </Link>

                            <Link href={""} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="">Privecy policy with GPT</span>
                            </Link>

                        </div>
                    </div>

                    <div className="">
                        <Link href={''} className='flex items-center space-x-3 text-base-content rounded-lg px-2 py-1.5 transition-all duration-150 ease-in-out hover:text-base-content active:text-base-content'>
                            <MdKeyboardOptionKey className='text-gray-400' />
                            <span className="text-sm font-semibold text-gray-400">Features</span>
                        </Link>
                        <div className="my-1">
                            <Link href={""} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="">Ship in 5 minutes</span>
                                <PiStarFour className='w-[15px] h-[15px] fill-accent' />
                            </Link>

                            <Link href={""} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="">Static page</span>
                            </Link>

                            <Link href={""} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="">User Authentications</span>
                            </Link>

                            <Link href={""} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="">Api call</span>
                            </Link>

                            <Link href={""} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="">Private page</span>
                            </Link>

                            <Link href={""} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="">Stipe Subscriptions</span>
                            </Link>

                            <Link href={""} className='text-gray-400 ml-[17px] pl-[21px] flex items-center border-l text-sm border-l-gray-500 hover:border-l-gray-400 py-1.5 transition-all duration-150 ease-in-out hover:text-gray-300 active:text-gray-300 active:border-l-gray-400 space-x-3'>
                                <span className="">Privecy policy with GPT</span>
                            </Link>

                        </div>
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