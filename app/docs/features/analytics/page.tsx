'use client'
import CodeExample from '@/app/components/CodeExample'
import ComplexText from '@/app/components/ComplexText'
import SearchBar from '@/app/components/SearchBar'
import SetupTitle from '@/app/components/SetupTitle'
import ShipFirstComponent from '@/app/components/ShipFirstComponent'
import { fetchData } from '@/utils/fetchData'
import { useEffect, useState } from 'react'

const page = () => {
    const [pageContent, setPageContent] = useState<any>(null || Object)
    useEffect(() => {
        const loadData = async () => {
            const result = await fetchData('../../../../data/analytics.json');
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


                {pageContent.support_subTitle && (
                    <SetupTitle text={pageContent.support_subTitle} />
                )}
                <div>

                    {pageContent.complexText_1 && (
                        <div className="mt-4">
                            <ComplexText content={pageContent.complexText_1} className='text-base-content text-sm' />
                        </div>
                    )}

                    {pageContent.complexText_2 && (
                        <div className="my-4">
                            <ComplexText content={pageContent.complexText_2} className='text-base-content text-sm' />
                        </div>
                    )}




                    {
                        pageContent.codeSnippet_1 && (
                            <CodeExample codeString={pageContent.codeSnippet_1.codes} language='jsx' title={pageContent.codeSnippet_1.title} />
                        )
                    }



                    {pageContent.complexText_3 && (
                        <div className="py-4">
                            <ComplexText content={pageContent.complexText_3} className='text-base-content text-sm' />
                        </div>
                    )}

                    {
                        pageContent.codeSnippet_2 && (
                            <CodeExample codeString={pageContent.codeSnippet_2.codes} language='jsx' title={pageContent.codeSnippet_2.title} />
                        )
                    }

                    {pageContent.complexText_4 && (
                        <div className="py-4">
                            <div className="divider"></div>
                        </div>
                    )}

                    {pageContent.complexText_4 && (
                        <div className="py-4">
                            <ComplexText content={pageContent.complexText_4} className='text-base-content text-sm' />
                        </div>
                    )}



                </div>
            </div>
            <SearchBar />
            <ShipFirstComponent />
        </div>
    )
}

export default page