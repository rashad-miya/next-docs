'use client'
import CodeExample from '@/app/components/CodeExample'
import ComplexText from '@/app/components/ComplexText'
import PlainText from '@/app/components/PlainText'
import SearchBar from '@/app/components/SearchBar'
import ShipFirstComponent from '@/app/components/ShipFirstComponent'
import { fetchData } from '@/utils/fetchData'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [pageContent, setPageContent] = useState<any>(null || Object)
    useEffect(() => {
        const loadData = async () => {
            const result = await fetchData('../../../../data/ship-in-5-minutes.json');
            console.log("ship in 5 minutes :", result.ship);
            setPageContent(result.ship);
        }
        loadData()
    }, [])
    return (
        <div className='p-8 md:p-12 '>
            <h2 className='flex items-center gap-2 font-bold text-3xl lg:text-5xl tracking-tight text-base-content flex-wrap'>
                {pageContent?.title && <span>{pageContent?.title}</span>}
            </h2>

            <div className="flex flex-col py-8 text-base-content/80 max-w-xl">

                {/* greetings container */}
                <div className="py-6 leading-relaxed">

                    {pageContent.plainText_1 && (<PlainText content={pageContent.plainText_1} className='py-4 text-gray-400' />)}
                    {pageContent.plainText_2 && (<PlainText content={pageContent.plainText_2} className='py-4' />)}
                    {pageContent.plainText_3 && (<PlainText content={pageContent.plainText_3} />)}
                </div>


                <div className="pt-6">

                    {pageContent.complexText_1 && (
                        <div className="mt-4">
                            <ComplexText content={pageContent.complexText_1} className='text-base-content text-sm' />
                        </div>
                    )}

                    {pageContent.complexText_2 && (
                        <div className="mt-4">
                            <ComplexText content={pageContent.complexText_2} className='text-base-content text-sm' />
                        </div>
                    )}

                    <div className="py-2">

                        {
                            pageContent.codeSnippet_1 && (
                                <CodeExample codeString={pageContent.codeSnippet_1} language='jsx' title='/app/page.js' />
                            )
                        }


                        {
                            pageContent.complexText_3 && (
                                <div className="py-4 text-base-content">
                                    <ComplexText content={pageContent.complexText_3} />
                                </div>
                            )
                        }

                        {
                            pageContent.complexText_4 && (
                                <div className="py-4 text-base-content">
                                    <ComplexText content={pageContent.complexText_4} />
                                </div>
                            )
                        }

                        {
                            pageContent.complexText_5 && (
                                <div className="py-4 text-base-content">
                                    <ComplexText content={pageContent.complexText_5} className='text-left' />
                                </div>
                            )
                        }

                        {
                            pageContent.codeSnippet_2 && (
                                <CodeExample codeString={pageContent.codeSnippet_2} language='jsx' title='Hero.js' />
                            )
                        }

                        {
                            pageContent.complexText_6 && (
                                <div className="py-4 text-base-content">
                                    <ComplexText content={pageContent.complexText_6} className='text-left' />
                                </div>
                            )
                        }

                    </div>
                </div>

                {/* bottom sentence */}
                {pageContent.comments && (
                    <div className="space-y-8 pt-8 border-t border-base-content/20">
                        <div className="flex">
                            <img src={pageContent.comments.image} className='w-16 h-16 float-left rounded-full mr-4' />
                            <ComplexText content={pageContent.comments.commentHeader} className='text-base-content text-base' />
                        </div>
                        <PlainText content={pageContent.comments.commentBody} />
                        <PlainText content={pageContent.comments.commentBy} className='text-lg' />
                    </div>
                )}


            </div>
            <SearchBar />
            <ShipFirstComponent />
        </div>
    )
}

export default page