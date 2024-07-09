import SearchBar from '@/app/components/SearchBar'
import ShipFirstComponent from '@/app/components/ShipFirstComponent'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='p-8 md:p-12 '>
            <h2 className='flex items-center gap-2 font-bold text-3xl lg:text-5xl tracking-tight text-base-content flex-wrap'>
                Features
            </h2>
            <div className="flex flex-col py-8 text-base-content/80 max-w-xl">
                <div className="mt-4 text-base-content text-sm ">
                    None of the librairies are mandatory. You can set them all or only a few.
                </div>
            </div>

            <SearchBar />
            <ShipFirstComponent />
        </div>
    )
}

export default page