'use client'
import ComplexText from '@/app/components/ComplexText'
import SearchBar from '@/app/components/SearchBar'
import ShipFirstComponent from '@/app/components/ShipFirstComponent'
import { fetchData } from '@/utils/fetchData'
import { useEffect, useState } from 'react'

const page = () => {
    const [pageContent, setPageContent] = useState<any>(null || Object)
    useEffect(() => {
        const loadData = async () => {
            const result = await fetchData('../../../../data/error-handling.json');
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

                
                    {pageContent.complexText_1 && (<ComplexText content={pageContent.complexText_1} className='py-4 text-gray-400' />)}
                    {pageContent.complexText_2 && (<ComplexText content={pageContent.complexText_2} className='py-4 text-gray-400' />)}
                    {pageContent.complexText_3 && (<ComplexText content={pageContent.complexText_3} className='py-4 text-gray-400' />)}
                    {pageContent.complexText_4 && (<ComplexText content={pageContent.complexText_4} className='py-4 text-gray-400' />)}


            </div>
            <SearchBar />
            <ShipFirstComponent />
        </div>
    )
}

export default page