import React from 'react'
import { BiSearch } from 'react-icons/bi'

const SearchBar = () => {
    return (
        <div className='z-50 max-md:hidden fixed top-6 right-12'>
            <div className="items-center justify-start gap-4 lg:gap-12">
                <div className="w-72 z-10">
                    <div className="relative">
                        <div className="relative w-full cursor-default rounded-lg bg-base-100 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-base-100/20 focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary sm:text-sm group">
                            <input type="text" className="bg-base-100 w-full py-3 pl-10 pr-3 text-sm leading-5 text-base-content border border-base-content/20 rounded-lg focus:ring-0 focus:outline-primary" placeholder='Search' />
                            <button className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <BiSearch className='text-base-content w-[18px] h-[18px]' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBar