'use client'
import ComplexText from '@/app/components/ComplexText'
import PlainText from '@/app/components/PlainText'
import SearchBar from '@/app/components/SearchBar'
import ShipFirstComponent from '@/app/components/ShipFirstComponent'
import { fetchData } from '@/utils/fetchData'
import { useEffect, useState } from 'react'

const page = () => {
    const [pageContent, setPageContent] = useState<any>(null || Object)
    useEffect(() => {
        const loadData = async () => {
            const result = await fetchData('../../../../data/privicy.json');
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

                <div className="pt-6">

                    {pageContent.plainText_1 && (
                        <PlainText content={pageContent.plainText_1} />
                    )}

                    {pageContent.plainText_2 && (
                        <div className="mt-4">
                            <PlainText content={pageContent.plainText_2} />
                        </div>
                    )}

                    {pageContent.complexText_1 && (
                        <div className="mt-4">
                            <ComplexText content={pageContent.complexText_1} className='text-base-content text-sm' />
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