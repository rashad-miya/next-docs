import React, { FC } from 'react';
import { IoCopyOutline } from 'react-icons/io5';

interface WhiteCodeSnippetProps {
    codes: [];
    className?: string;
    isTwoType?: boolean;
}

const WhiteCodeSnippet: FC<WhiteCodeSnippetProps> = ({ codes, className, isTwoType }) => {
    return (
        <div className={`text-sm bg-base-100 rounded-lg overflow-hidden border border-base-content border-opacity-20 ${className}`}>

            <div className="px-4 py-2 flex justify-between items-center border-b border-base-content border-opacity-80">
                <p className="text-base-content text-opacity-0">Terminal</p>
                <div className="flex items-center gap-x-2">
                    {isTwoType && (
                        <select name="" id="" className='select select-sm select-bordered w-full max-w-xs bg-transparent font-normal'>
                            <option value="javascript" className='text-base-content'>JavaScript</option>
                            <option value="typescript" className='text-base-content'>TypeScript</option>
                        </select>
                    )}
                    <button className="btn btn-sm btn-square btn-ghost text-base-content">
                        <IoCopyOutline size={20} />
                    </button>
                </div>
            </div>

            <pre className='p-5 block scrollbar-large overflow-x-auto bg-[#2B2B2B] text-[#383737]'>
                <code className='whitespace-pre'>

                    {codes.map((code, index) => (
                        <div key={index}>
                            <span className="comment linenumber react-syntax-highlighter-line-number code-number">
                                {index + 1}
                            </span>
                            <span className='text-gray-100 mr-2'>
                                {code}
                            </span>
                        </div>
                    ))}
                </code>
            </pre>

        </div>
    )
}

export default WhiteCodeSnippet