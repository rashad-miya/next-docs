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
            const result = await fetchData('../../../../data/seo.json');
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


                {pageContent.seo_subTitle && (
                    <SetupTitle text={pageContent.seo_subTitle} className='my-4' />
                )}
                <div>

                    {pageContent.complexText_1 && (
                        <div className="mt-4">
                            <ComplexText content={pageContent.complexText_1} className='text-base-content text-sm' />
                        </div>
                    )}


                    {pageContent.plainText_1 && (
                        <PlainText content={pageContent.plainText_1} className='py-4' />
                    )}

                    {
                        pageContent.codeSnippet_1 && (
                            <CodeExample codeString={pageContent.codeSnippet_1.codes} language='jsx' title={pageContent.codeSnippet_1.title} />
                        )
                    }

                    {
                        pageContent.highlightedNote_1 && (
                            <div className="py-4">
                                <HighLightedNote content={pageContent.highlightedNote_1} />
                            </div>
                        )
                    }

                    {pageContent.complexText_2 && (
                        <div className="py-4">
                            <ComplexText content={pageContent.complexText_2} className='text-base-content text-sm' />
                        </div>
                    )}

                    {
                        pageContent.codeSnippet_2 && (
                            <CodeExample codeString={pageContent.codeSnippet_2.codes} language='jsx' title={pageContent.codeSnippet_2.title} />
                        )
                    }

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

                    {
                        pageContent.nakeBlog_subTitle && (
                            <div className="mt-4">
                                <SubTitle text={pageContent.nakeBlog_subTitle} />
                            </div>
                        )
                    }

                    {pageContent.complexText_4 && (
                        <div className="py-4">
                            <ComplexText content={pageContent.complexText_4} className='text-base-content text-sm' />
                        </div>
                    )}
                </div>

                {/* bottom sentence */}
                {pageContent.seo_list_image && (
                    <div>

                        <img className='w-full rounded'
                            alt='stripe chart'
                            loading='lazy'
                            decoding='async'
                            srcSet={pageContent.seo_list_image.image_url}
                        />

                        <p className="text-sm text-center mt-2 opacity-80">
                            {pageContent.seo_list_image.bottom_text}
                        </p>

                    </div>
                )}


            </div>
            <SearchBar />
            <ShipFirstComponent />
        </div>
    )
}

export default page