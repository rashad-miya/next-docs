'use client'
import ComplexText from '@/app/components/ComplexText'
import HighLightedNote from '@/app/components/HighlightedNote'
import SearchBar from '@/app/components/SearchBar'
import SetupTitle from '@/app/components/SetupTitle'
import ShipFirstComponent from '@/app/components/ShipFirstComponent'
import SubTitle from '@/app/components/SubTitle'
import { fetchData } from '@/utils/fetchData'
import { useEffect, useState } from 'react'

const page = () => {
    const [pageContent, setPageContent] = useState<any>(null || Object)
    useEffect(() => {
        const loadData = async () => {
            const result = await fetchData('../../../../data/extras.json');
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

                {pageContent.extras_subTitle && (
                    <div className="mt-4">
                        <SetupTitle text={pageContent.extras_subTitle} />
                    </div>
                )}

                {pageContent.complexText_1 && (
                    <div className="mt-4">
                        <ComplexText content={pageContent.complexText_1} className='text-base-content text-sm' />
                    </div>
                )}
                {
                    pageContent.highlightedNote_1 && (
                        <div className="py-4">
                            <HighLightedNote content={pageContent.highlightedNote_1} />
                        </div>
                    )
                }

                {pageContent.complexText_2 && (
                    <div className="mt-4">
                        <ComplexText content={pageContent.complexText_2} className='text-base-content text-sm' />
                    </div>
                )}


                <ul className='list-inside list-disc space-y-1 leading-relaxed ml-4 py-4'>

                    {pageContent.complexText_3 && (
                        <li className='list-item text-gray-400'>
                            <ComplexText content={pageContent.complexText_3} className='inline' />
                        </li>
                    )}
                    {pageContent.complexText_4 && (
                        <li className='list-item text-gray-400'>
                            <ComplexText content={pageContent.complexText_4} className='inline' />
                        </li>
                    )}
                </ul>



                {pageContent.complexText_5 && (
                    <div className="mt-4">
                        <ComplexText content={pageContent.complexText_5} className='text-base-content text-sm' />
                    </div>
                )}

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

                {pageContent.extras_subTitle && (
                    <span className='block py-4'>
                        <img srcSet={'https://shipfa.st/_next/image?url=%2FlogoAndName.png&w=128&q=75'}
                            alt="shipfast"
                            decoding='async'
                            width={100}
                            height={30}
                        />
                    </span>
                )}

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



                <div className="py-2">
                    {pageContent.usefull_resources_subTitle && (
                        <div className="py-3">
                            <SubTitle text={pageContent.usefull_resources_subTitle} />
                        </div>
                    )}

                    <ul className='list-inside list-disc space-y-1 leading-relaxed ml-4 pb-4'>

                        {pageContent.ressource_1 && (
                            <li className='list-item text-gray-400'>
                                <ComplexText content={pageContent.ressource_1} className='inline' />
                            </li>
                        )}
                        {pageContent.ressource_2 && (
                            <li className='list-item text-gray-400'>
                                <ComplexText content={pageContent.ressource_2} className='inline' />
                            </li>
                        )}

                        {pageContent.ressource_3 && (
                            <li className='list-item text-gray-400'>
                                <ComplexText content={pageContent.ressource_3} className='inline' />
                            </li>
                        )}
                        {pageContent.ressource_4 && (
                            <li className='list-item text-gray-400'>
                                <ComplexText content={pageContent.ressource_4} className='inline' />
                            </li>
                        )}

                        {pageContent.ressource_5 && (
                            <li className='list-item text-gray-400'>
                                <ComplexText content={pageContent.ressource_5} className='inline' />
                            </li>
                        )}
                        {pageContent.ressource_6 && (
                            <li className='list-item text-gray-400'>
                                <ComplexText content={pageContent.ressource_6} className='inline' />
                            </li>

                        )}

                        {pageContent.ressource_7 && (
                            <li className='list-item text-gray-400'>
                                <ComplexText content={pageContent.ressource_7} className='inline' />
                            </li>

                        )}

                        {pageContent.ressource_8 && (
                            <li className='list-item text-gray-400'>
                                <ComplexText content={pageContent.ressource_8} className='inline' />
                            </li>

                        )}

                    </ul>
                </div>

            </div>
            <SearchBar />
            <ShipFirstComponent />
        </div>
    )
}

export default page