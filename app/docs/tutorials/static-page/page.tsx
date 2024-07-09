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
            const result = await fetchData('../../../../data/static-page.json');
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
                {/* <div className="py-6 leading-relaxed"> */}

                    {pageContent.plainText_1 && (<PlainText content={pageContent.plainText_1} className='py-4 text-gray-400' />)}
                    {pageContent.complexText_1 && (<ComplexText content={pageContent.complexText_1} className='py-4 text-gray-400' />)}
                    {pageContent.complexText_2 && (<ComplexText content={pageContent.complexText_2} className='py-4 text-gray-400' />)}

                {/* </div> */}


                <div>
                    {pageContent.plainText_2 && (
                        <PlainText content={pageContent.plainText_2} />
                    )}
                    <div className="py-2">

                        {
                            pageContent.codeSnippet_1 && (
                                <CodeExample codeString={pageContent.codeSnippet_1.codes} language='jsx' title={pageContent.codeSnippet_1.title} />
                            )
                        }

                    </div>
                </div>

            </div>
            <SearchBar />
            <ShipFirstComponent />
        </div>
    )
}

export default page