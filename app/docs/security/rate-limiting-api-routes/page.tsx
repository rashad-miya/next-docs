'use client'
import CodeExample from '@/app/components/CodeExample'
import CodeExampleTyped from '@/app/components/CodeExampleTyped'
import ComplexText from '@/app/components/ComplexText'
import HighLightedNote from '@/app/components/HighlightedNote'
import PlainText from '@/app/components/PlainText'
import SearchBar from '@/app/components/SearchBar'
import SetupTitle from '@/app/components/SetupTitle'
import ShipFirstComponent from '@/app/components/ShipFirstComponent'
import SubTitle from '@/app/components/SubTitle'
import { fetchData } from '@/utils/fetchData'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [pageContent, setPageContent] = useState<any>(null || Object);
    const [activeContent, setActiveContent] = useState("1");

    useEffect(() => {
        let result;
        const getData = async () => {
            result = await fetchData('../../../../data/rate-limiting.json');
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
            <h1 className='flex items-center gap-2 font-bold text-3xl lg:text-5xl tracking-tight text-base-content flex-wrap'>
                {pageContent?.title && <span>{pageContent?.title}</span>}
            </h1>


            <div className="py-10 flex flex-col text-base-content/80 max-w-xl">

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

                {/* next-auth */}
                <div className="py-2">

                    {pageContent.next_plainText_1 && (<PlainText content={pageContent.next_plainText_1} className='py-4 text-gray-300 text-sm' />)}

                    {pageContent.next_complexText_1 && (<ComplexText content={pageContent.next_complexText_1} className='py-4 text-gray-300 text-sm' />)}

                    {pageContent.next_setup_subTitle && (
                        <div className="py-6">
                            <div className="divider"></div>
                        </div>
                    )}

                    {pageContent.next_setup_subTitle && (
                        <div className="py-2">
                            <SetupTitle text={pageContent.next_setup_subTitle} />
                        </div>
                    )}

                    {pageContent.next_complexText_2 && (<ComplexText content={pageContent.next_complexText_2} className='py-4 text-gray-400' />)}
                    {pageContent.next_complexText_3 && (<ComplexText content={pageContent.next_complexText_3} className='py-4 text-gray-400' />)}

                    {pageContent.next_plainText_2 && (<PlainText content={pageContent.next_plainText_2} className='py-4 text-gray-300 text-sm' />)}


                    {
                        pageContent.next_codeSnippet_1 && (
                            <CodeExample codeString={pageContent.next_codeSnippet_1.codes} language='jsx' title={pageContent.next_codeSnippet_1.title} />
                        )
                    }

                    {pageContent.next_complexText_4 && (<ComplexText content={pageContent.next_complexText_4} className='py-4 text-gray-400' />)}


                    {
                        pageContent.next_codeSnippet_2 && (
                            <CodeExampleTyped codeObjext={pageContent.next_codeSnippet_2} language='jsx' />
                        )
                    }
                    {pageContent.next_highlightedNote_1 && (
                        <div className="py-4">
                            <HighLightedNote content={pageContent.next_highlightedNote_1} />
                        </div>
                    )}

                    {pageContent.next_complexText_5 && (<ComplexText content={pageContent.next_complexText_5} className='py-4 text-gray-400' />)}

                    {
                        pageContent.next_codeSnippet_3 && (
                            <CodeExample codeString={pageContent.next_codeSnippet_3.codes} language='jsx' title={pageContent.next_codeSnippet_3.title} />
                        )
                    }

                    {pageContent.next_complexText_6 && (<ComplexText content={pageContent.next_complexText_6} className='py-4 text-gray-400' />)}
                </div>

                {/* supabase */}

                <div className="py-2">

                    {pageContent.supabase_plainText_1 && (<PlainText content={pageContent.supabase_plainText_1} className='py-4 text-gray-300 text-sm' />)}

                    {pageContent.supabase_complexText_1 && (<ComplexText content={pageContent.supabase_complexText_1} className='py-4 text-gray-300 text-sm' />)}

                    {pageContent.supabase_setup_subTitle && (
                        <div className="py-6">
                            <div className="divider"></div>
                        </div>
                    )}

                    {pageContent.supabase_setup_subTitle && (
                        <div className="py-2">
                            <SetupTitle text={pageContent.supabase_setup_subTitle} />
                        </div>
                    )}

                    {pageContent.supabase_complexText_2 && (<ComplexText content={pageContent.supabase_complexText_2} className='py-4 text-gray-400' />)}
                    {pageContent.supabase_complexText_3 && (<ComplexText content={pageContent.supabase_complexText_3} className='py-4 text-gray-400' />)}
                    {pageContent.supabase_complexText_4 && (<ComplexText content={pageContent.supabase_complexText_4} className='py-4 text-gray-400' />)}

                    {pageContent.supabase_plainText_2 && (<PlainText content={pageContent.supabase_plainText_2} className='py-4 text-gray-300 text-sm' />)}


                    {
                        pageContent.supabase_codeSnippet_1 && (
                            <CodeExample codeString={pageContent.supabase_codeSnippet_1.codes} language='jsx' title={pageContent.supabase_codeSnippet_1.title} />
                        )
                    }

                    {pageContent.supabase_complexText_5 && (<ComplexText content={pageContent.supabase_complexText_5} className='py-4 text-gray-400' />)}


                    {
                        pageContent.supabase_codeSnippet_2 && (
                            <CodeExampleTyped codeObjext={pageContent.supabase_codeSnippet_2} language='jsx' />
                        )
                    }
                    {pageContent.supabase_highlightedNote_1 && (
                        <div className="py-4">
                            <HighLightedNote content={pageContent.supabase_highlightedNote_1} />
                        </div>
                    )}

                    {pageContent.supabase_complexText_6 && (<ComplexText content={pageContent.supabase_complexText_6} className='py-4 text-gray-400' />)}

                    {
                        pageContent.supabase_codeSnippet_3 && (
                            <CodeExample codeString={pageContent.supabase_codeSnippet_3.codes} language='jsx' title={pageContent.supabase_codeSnippet_3.title} />
                        )
                    }

                    {pageContent.supabase_complexText_7 && (<ComplexText content={pageContent.supabase_complexText_7} className='py-4 text-gray-400' />)}
                </div>

            </div>
            <SearchBar />
            <ShipFirstComponent />
        </div>
    )
}

export default page