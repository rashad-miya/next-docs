import React from 'react'
import { LuWrench } from 'react-icons/lu'

const SetupTitle = ({ text, className }: { text: string, className?: string }) => {
    return (
        <div className={`flex gap-3 items-center ${className}`}>
            <LuWrench strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' fill='none' stroke='currentColor'
                className='text-lime-600' size={22}
            />
            <p className="text-xl font-bold text-base-content">{text}</p>
        </div>
    )
}

export default SetupTitle