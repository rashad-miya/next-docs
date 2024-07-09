import SearchBar from '@/app/components/SearchBar'
import ShipFirstComponent from '@/app/components/ShipFirstComponent'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='p-8 md:p-12 '>
            <h2 className='flex items-center gap-2 font-bold text-3xl lg:text-5xl tracking-tight text-base-content flex-wrap'>
                Security
            </h2>
            <div className="flex flex-col py-8 text-base-content/80 max-w-xl">
                <div className="mt-4 text-base-content text-sm ">
                    Tutorials to protect your ShipFast app from common security threats. Shipping fast is great, shipping safe is better.
                </div>
            </div>

            <SearchBar />
            <ShipFirstComponent />
        </div>
    )
}

export default page