'use client'
import CodeExample from '@/app/components/CodeExample'
import ComplexText from '@/app/components/ComplexText'
import HighLightedNote from '@/app/components/HighlightedNote'
import PlainText from '@/app/components/PlainText'
import SearchBar from '@/app/components/SearchBar'
import SetupTitle from '@/app/components/SetupTitle'
import ShipFirstComponent from '@/app/components/ShipFirstComponent'
import SubTitle from '@/app/components/SubTitle'
import { fetchData } from '@/utils/fetchData'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [pageContent, setPageContent] = useState<any>(null || Object)
    useEffect(() => {
        const loadData = async () => {
            const result = await fetchData('../../../../data/stipe-subscriptions.json');
            setPageContent(result.docs);
        }
        loadData()
    }, [])
    return (
        <div className='p-8 md:p-12 '>
            <h2 className='flex items-center gap-2 font-bold text-3xl lg:text-5xl tracking-tight text-base-content flex-wrap'>
                {pageContent?.title && <span>{pageContent?.title}</span>}
            </h2>

            <div className="flex flex-col py-8 text-base-content/80 max-w-xl">

                {
                    pageContent.highlightedNote_1 && (
                        <div className="py-4">
                            <HighLightedNote content={pageContent.highlightedNote_1} />
                        </div>
                    )
                }

                {
                    pageContent.highlightedNote_2 && (
                        <div className="py-4">
                            <HighLightedNote content={pageContent.highlightedNote_2} />
                        </div>
                    )
                }


                <div className="pt-6">

                    {pageContent.plainText_1 && (
                        <PlainText content={pageContent.plainText_1} />
                    )}

                    {pageContent.complexText_1 && (
                        <div className="mt-4">
                            <ComplexText content={pageContent.complexText_1} className='text-base-content text-sm' />
                        </div>
                    )}

                    <div className="divider"></div>

                    {pageContent.stipe_subTitle && (
                        <div className="mt-4">
                            <SetupTitle text={pageContent.stipe_subTitle} />
                        </div>
                    )}

                    {pageContent.complexText_2 && (
                        <div className="mt-4">
                            <ComplexText content={pageContent.complexText_2} className='text-base-content text-sm' />
                        </div>
                    )}

                    {pageContent.complexText_3 && (
                        <div className="mt-4">
                            <ComplexText content={pageContent.complexText_3} className='text-base-content text-sm' />
                        </div>
                    )}

                    {pageContent.complexText_4 && (
                        <div className="mt-4">
                            <ComplexText content={pageContent.complexText_4} className='text-base-content text-sm' />
                        </div>
                    )}

                    <div className="py-2">

                        {
                            pageContent.codeSnippet_1 && (
                                <CodeExample codeString={pageContent.codeSnippet_1.codes} language='jsx' title={pageContent.codeSnippet_1.title} />
                            )
                        }


                        {
                            pageContent.complexText_5 && (
                                <div className="py-4 text-base-content">
                                    <ComplexText content={pageContent.complexText_5} />
                                </div>
                            )
                        }

                        {
                            pageContent.complexText_6 && (
                                <div className="py-4 text-base-content">
                                    <ComplexText content={pageContent.complexText_6} />
                                </div>
                            )
                        }

                        {/* {
                            pageContent.complexText_5 && (
                                <div className="py-4 text-base-content">
                                    <ComplexText content={pageContent.complexText_5} className='text-left' />
                                </div>
                            )
                        }

                        {
                            pageContent.complexText_6 && (
                                <div className="py-4 text-base-content">
                                    <ComplexText content={pageContent.complexText_6} className='text-left' />
                                </div>
                            )
                        } */}

                        {
                            pageContent.highlightedNote_3 && (
                                <div className="py-4">
                                    <HighLightedNote content={pageContent.highlightedNote_3} />
                                </div>
                            )
                        }

                        {
                            pageContent.complexText_7 && (
                                <div className="py-4 text-base-content">
                                    <ComplexText content={pageContent.complexText_7} className='text-left' />
                                </div>
                            )
                        }

                        {
                            pageContent.complexText_8 && (
                                <div className="py-4 text-base-content">
                                    <ComplexText content={pageContent.complexText_8} className='text-left' />
                                </div>
                            )
                        }

                    </div>
                </div>

                {/* bottom sentence */}
                {pageContent.redirect_image_1 && (
                    <div className="space-y-8 pt-8 border-t border-base-content/20">

                        {
                            pageContent.plainText_2 && (
                                <div className="py-4 text-base-content">
                                    <PlainText content={pageContent.plainText_2} className='text-left' />
                                </div>
                            )
                        }
                        <Link href={pageContent.redirect_image_1.link}
                            className='block relative border-2 rounded-xl border-dashed border-blue-500/50 hover:border-blue-500 duration-100 cursor-pointer overflow-hidden'
                        >
                            <div className="relative z-20 px-16 py-16  space-y-6 text-center">
                                <p className="text-lg font-bold tracking-tight text-gray-200 drop-shadow">
                                    {pageContent.redirect_image_1.headText}
                                </p>
                                <p className="text-gray-300 drop-shadow">{pageContent.redirect_image_1.text}</p>
                            </div>
                            <div className="absolute inset-0 z-10 bg-blue-950/70"></div>
                            <img className='absolute inset-0 object-center object-cover w-full h-full '
                                alt='stripe chart'
                                loading='lazy'
                                decoding='async'
                                srcSet={pageContent.redirect_image_1.image_url}
                            />

                        </Link>

                        <Link href={pageContent.redirect_image_2.link}
                            className='block relative border-2 rounded-xl border-dashed border-blue-500/50 hover:border-blue-500 duration-100 cursor-pointer overflow-hidden mr-4'
                        >
                            <div className="relative z-20 px-16 py-16  space-y-6 text-center">
                                <p className="text-lg font-bold tracking-tight text-gray-200 drop-shadow">
                                    {pageContent.redirect_image_2.headText}
                                </p>
                                <p className="text-gray-300 drop-shadow">{pageContent.redirect_image_2.text}</p>
                            </div>
                            <div className="absolute inset-0 z-10 bg-blue-950/70"></div>
                            <img className='absolute inset-0 object-center object-cover w-full h-full '
                                alt='stripe chart'
                                loading='lazy'
                                decoding='async'
                                srcSet={pageContent.redirect_image_2.image_url}
                            />

                        </Link>
                    </div>
                )}


            </div>
            <SearchBar />
            <ShipFirstComponent />
        </div>
    )
}

export default page