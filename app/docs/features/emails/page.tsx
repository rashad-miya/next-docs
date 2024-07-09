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
            const result = await fetchData('../../../../data/emails.json');
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

                {pageContent.plainText_0 && (
                    <p className="text-sm text-gray-400 mb-6">{pageContent.plainText_0}</p>
                )}

                {
                    pageContent.highlightedNote_1 && (
                        <div className="py-4">
                            <HighLightedNote content={pageContent.highlightedNote_1} />
                        </div>
                    )
                }


                {pageContent.seo_subTitle && (
                    <div className="mt-8">
                        <SetupTitle text={pageContent.seo_subTitle} />
                    </div>
                )}
                <div>

                    {pageContent.complexText_1 && (
                        <div className="py-3">
                            <ComplexText content={pageContent.complexText_1} className='text-base-content text-sm' />
                        </div>
                    )}


                    {pageContent.plainText_1 && (
                        <div className="py-3">
                            <PlainText content={pageContent.plainText_1} />
                        </div>
                    )}

                    {
                        pageContent.highlightedNote_2 && (
                            <div className="py-4">
                                <HighLightedNote content={pageContent.highlightedNote_2} />
                            </div>
                        )
                    }

                    {pageContent.plainText_2 && (
                        <div className="mt-4">
                            <PlainText content={pageContent.plainText_2} />
                        </div>
                    )}

                    {pageContent.complexText_2 && (
                        <div className="mt-4">
                            <ComplexText content={pageContent.complexText_2} className='text-base-content text-sm' />
                        </div>
                    )}

                    {pageContent.plainText_3 && (
                        <div className="mt-4">
                            <PlainText content={pageContent.plainText_3} />
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

                    {pageContent.complexText_5 && (
                        <div className="mt-4">
                            <ComplexText content={pageContent.complexText_5} className='text-base-content text-sm' />
                        </div>
                    )}


                    {
                        pageContent.highlightedNote_3 && (
                            <div className="py-4">
                                <HighLightedNote content={pageContent.highlightedNote_3} />
                            </div>
                        )
                    }


                    {pageContent.title && (
                        <div className=" py-10">
                            <div className="divider"></div>
                        </div>
                    )}


                    {pageContent.sending_mail_subTitle && (
                        <div className="">
                            <SubTitle text={pageContent.sending_mail_subTitle} />
                        </div>
                    )}

                    {pageContent.plainText_4 && (
                        <PlainText content={pageContent.plainText_4} />
                    )}

                    {pageContent.complexText_6 && (
                        <div className="mt-4">
                            <ComplexText content={pageContent.complexText_6} className='text-base-content text-sm' />
                        </div>
                    )}


                    {pageContent.receiving_mail_subTitle && (
                        <div className="pt-10">
                            <SubTitle text={pageContent.receiving_mail_subTitle} />
                        </div>
                    )}

                    {pageContent.plainText_5 && (
                        <PlainText content={pageContent.plainText_5} />
                    )}

                    {pageContent.complexText_7 && (
                        <div className="mt-4">
                            <ComplexText content={pageContent.complexText_7} className='text-base-content text-sm' />
                        </div>
                    )}

                    {pageContent.plainText_6 && (
                        <PlainText content={pageContent.plainText_6} />
                    )}

                </div>

                {/* bottom sentence */}
                {pageContent.checklist_image && (
                    <div>

                        <img className='w-full rounded'
                            alt='stripe chart'
                            loading='lazy'
                            decoding='async'
                            srcSet={pageContent.checklist_image.image_url}
                        />

                        <p className="text-sm text-center mt-2 opacity-80">
                            {pageContent.checklist_image.bottom_text}
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