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
import { useEffect, useState } from 'react'

const page = () => {
    const [pageContent, setPageContent] = useState<any>(null || Object)
    useEffect(() => {
        const loadData = async () => {
            const result = await fetchData('../../../../data/customer-support.json');
            setPageContent(result.docs);
        }
        loadData()
    }, [])
    return (
        <div className='p-8 md:p-12 '>
            <h2 className='flex items-center gap-2 font-bold text-3xl lg:text-5xl tracking-tight text-base-content flex-wrap'>
                {pageContent?.title && <span>{pageContent?.title}</span>}
            </h2>

            <div className="flex flex-col py-12 text-base-content/80 max-w-xl">


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
                        <div className="py-4">
                            <ComplexText content={pageContent.complexText_2} className='text-base-content text-sm' />
                        </div>
                    )}


                    {pageContent.complexText_3 && (
                        <div className="py-4">
                            <ComplexText content={pageContent.complexText_3} className='text-base-content text-sm' />
                        </div>
                    )}

                    {
                        pageContent.highlightedNote_2 && (
                            <div className="py-4">
                                <HighLightedNote content={pageContent.highlightedNote_2} />
                            </div>
                        )
                    }
                </div>
            </div>
            <SearchBar />
            <ShipFirstComponent />
        </div>
    )
}

export default page