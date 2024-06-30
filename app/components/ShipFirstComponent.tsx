import Link from 'next/link'
import React from 'react'
import { AiTwotoneThunderbolt } from 'react-icons/ai'

const ShipFirstComponent = () => {
    return (
        <div className='max-md:hidden fixed bottom-6 right-12'>
            <Link href={''} className='bg-base-100 flex items-center justify-between rounded border border-base-content/10 px-2 py-1.5 transition-all duration-150 ease-in-out text-base-content/60 hover:bg-hover hover:text-base-content active:bg-active active:text-base-content'>
                <div className="flex items-center space-x-2">
                    <AiTwotoneThunderbolt className='w-[18px] h-[18px] text-orange-400' />
                    <span className="text-sm font-medium text-gray-400">Get ShipFast</span>
                </div>
            </Link>
        </div>
    )
}

export default ShipFirstComponent