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
            result = await fetchData('../../../../data/api-call.json');
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

                {pageContent.next_complexText_1 && (
                    <ComplexText content={pageContent.next_complexText_1} className='text-gray-400 py-6' />
                )}
                {pageContent.supabase_complexText_1 && (
                    <ComplexText content={pageContent.supabase_complexText_1} className='text-gray-400 py-6' />
                )}

                <ul className='list-inside list-disc space-y-1 leading-relaxed ml-4 pb-4'>

                    {pageContent.next_plainText_1 && (
                        <li className='list-item text-gray-400'>{pageContent.next_plainText_1}</li>
                    )}
                    {pageContent.supabase_plainText_1 && (
                        <li className='list-item text-gray-400'>{pageContent.supabase_plainText_1}</li>
                    )}

                    {pageContent.next_plainText_2 && (
                        <li className='list-item text-gray-400'>{pageContent.next_plainText_2}</li>
                    )}
                    {pageContent.supabase_plainText_2 && (
                        <li className='list-item text-gray-400'>{pageContent.supabase_plainText_2}</li>
                    )}

                    {pageContent.next_complexText_2 && (
                        <li className='list-item text-gray-400'>
                            <ComplexText content={pageContent.next_complexText_2} className='inline' />
                        </li>
                    )}
                    {pageContent.supabase_complexText_2 && (
                        <li className='list-item text-gray-400'>
                            <ComplexText content={pageContent.supabase_complexText_2} className='inline' />
                        </li>

                    )}

                </ul>



                {pageContent.next_api_subTitle && (
                    <div className="text-xl text-base-content mt-3">{pageContent.next_api_subTitle}</div>
                )
                }

                {pageContent.supabase_api_subTitle && (
                    <div className="text-xl text-base-content mt-3">{pageContent.supabase_api_subTitle}</div>
                )
                }

                {pageContent.next_plainText_3 && (
                    <PlainText content={pageContent.next_plainText_3} className='pt-2 text-gray-400'/>
                )}
                {pageContent.supabase_plainText_3 && (
                    <PlainText content={pageContent.supabase_plainText_3} className='pt-2 text-gray-400' />
                )}

                {
                    pageContent.next_codeSnippet_1 && (
                        <div className="py-2">
                            <CodeExample codeString={pageContent.next_codeSnippet_1.codes} language='jsx' title={pageContent.next_codeSnippet_1.title} />
                        </div>
                    )
                }

                {
                    pageContent.supabase_codeSnippet_1 && (
                        <div className="py-2">
                            <CodeExample codeString={pageContent.supabase_codeSnippet_1.codes} language='jsx' title={pageContent.supabase_codeSnippet_1.title} />
                        </div>
                    )
                }
                {pageContent.next_complexText_3 && (<ComplexText content={pageContent.next_complexText_3} className='py-4 text-gray-400' />)}
                {pageContent.supabase_complexText_3 && (<ComplexText content={pageContent.supabase_complexText_3} className='py-4 text-gray-400' />)}

                {
                    pageContent.next_codeSnippet_2 && (
                        <div className="py-2">
                            <CodeExample codeString={pageContent.next_codeSnippet_2.codes} language='jsx' title={pageContent.next_codeSnippet_2.title} />
                        </div>
                    )
                }

                {
                    pageContent.supabase_codeSnippet_2 && (
                        <div className="py-2">
                            <CodeExample codeString={pageContent.supabase_codeSnippet_2.codes} language='jsx' title={pageContent.supabase_codeSnippet_2.title} />
                        </div>
                    )
                }

            </div>
            <SearchBar />
            <ShipFirstComponent />
        </div>
    )
}

export default page