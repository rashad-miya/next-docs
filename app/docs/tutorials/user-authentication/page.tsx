'use client'
import CodeExample from '@/app/components/CodeExample'
import ComplexText from '@/app/components/ComplexText'
import HighLightedNote from '@/app/components/HighlightedNote'
import PlainText from '@/app/components/PlainText'
import SearchBar from '@/app/components/SearchBar'
import ShipFirstComponent from '@/app/components/ShipFirstComponent'
import { fetchData } from '@/utils/fetchData'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [pageContent, setPageContent] = useState<any>(null || Object);
    const [activeContent, setActiveContent] = useState("1");

    useEffect(() => {
        let result;
        const getData = async () => {
            result = await fetchData('../../../../data/user-authentication.json');
            if (activeContent == "1") {
                setPageContent(result.nextAuth);
            } else {
                setPageContent(result.supabase);
            }
        };

        getData();

    }, [activeContent]);


    return (
        <div className='p-8 md:p-12 '>
            <h2 className='flex items-center gap-2 font-bold text-3xl lg:text-5xl tracking-tight text-base-content flex-wrap'>
                {pageContent?.title && <span>{pageContent?.title}</span>}
            </h2>


            <div className="flex flex-col py-8 text-base-content/80 max-w-xl">

                           {/* top button container */}
            <div className="p-1 rounded-xl bg-base-100 flex items-stretch justify-center gap-1 text-xs font-medium text-base-content">
                <button className={`w-full rounded-lg px-4 py-2 cursor-pointer duration-100 uppercase tracking-wide flex gap-2 items-center justify-center ${activeContent == "1" && 'bg-[#000] animate-popup shadow-lg'}`}
                    onClick={() => setActiveContent("1")}
                >
                    <Image src={'https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnextauth.de85000d.png&w=256&q=75'} alt='img'
                        className='w-6 h-6'
                        width={24}
                        height={24}
                    />
                    <span>
                        <span className="whitespace-nowrap">NEXT-AUTH</span>
                        +
                        <span className="whitespace-nowrap">MONGO-DB</span>
                    </span>
                </button>

                <button className={`w-full rounded-lg px-4 py-2 cursor-pointer duration-100 uppercase tracking-wide flex gap-2 items-center justify-center ${activeContent == "2" && 'bg-[#000] animate-popup shadow-lg'}`}
                    onClick={() => setActiveContent("2")}
                >
                    <Image src={'https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupabase.c6aaae9c.png&w=384&q=75'} alt='img'
                        className='w-6 h-6'
                        width={24}
                        height={24}
                    />
                    Supabase
                </button>
            </div>

                {pageContent.complexText_1 && (<ComplexText content={pageContent.complexText_1} className='py-4 text-gray-400' />)}
                {pageContent.complexText_2 && (<ComplexText content={pageContent.complexText_2} className='py-4 text-gray-400' />)}
                {pageContent.plainText_1 && (<PlainText content={pageContent.plainText_1} className='py-4 text-gray-400' />)}

                {/* </div> */}


                    <div className="py-2">

                        {
                            pageContent.codeSnippet_1 && (
                                <CodeExample codeString={pageContent.codeSnippet_1.codes} language='jsx' title={pageContent.codeSnippet_1.title} />
                            )
                        }

                    </div>

                    {pageContent.highlightedNote_1 &&(
                        <HighLightedNote content={pageContent.highlightedNote_1} className='py-2'/>
                    )}

            </div>
            <SearchBar />
            <ShipFirstComponent />
        </div>
    )
}

export default page