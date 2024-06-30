'use client'
import React, { useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import Sidebar from './Sidebar';

const MobileMenu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("sidebar status:", isSidebarOpen)
    }

    return (
        <div>
            <div className='fixed z-50 sm:hidden left-5 top-5'>
                <button className="btn btn-sm btn-ghost btn-square bg-[#2B2B2B] rounded-lg"
                    onClick={toggleSidebar}
                >
                    <BiMenu size={24} />
                </button>
            </div>
            <div className={`${isSidebarOpen ? 'flex' : 'hidden'}`}>
                hello there
            </div>
        </div>
    )
}

export default MobileMenu