'use client'
import CodeExample from '@/app/components/CodeExample'
import ComplexText from '@/app/components/ComplexText'
import HighLightedNote from '@/app/components/HighlightedNote'
import PlainText from '@/app/components/PlainText'
import SearchBar from '@/app/components/SearchBar'
import SetupTitle from '@/app/components/SetupTitle'
import ShipFirstComponent from '@/app/components/ShipFirstComponent'
import { fetchData } from '@/utils/fetchData'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const page = () => {
    const [pageContent, setPageContent] = useState<any>(null || Object);
    const [activeContent, setActiveContent] = useState("1");

    useEffect(() => {
        let result;
        const getData = async () => {
            result = await fetchData('../../../../data/deployments.json');
            if (activeContent == "1") {
                setPageContent(result.nextAuth);
            } else {
                setPageContent(result.supabase);
            }
        };

        getData();

    }, [activeContent]);


    return (
        <div className='p-8 md:p-12 '>
            <h1 className='flex items-center gap-2 font-bold text-3xl lg:text-5xl tracking-tight text-base-content flex-wrap'>
                {pageContent?.title && <span>{pageContent?.title}</span>}
            </h1>


            <div className="py-10 flex flex-col text-base-content/80 max-w-xl">

                {/* top button container */}
                <div className="my-6 rounded-xl bg-base-100 flex items-stretch justify-center gap-1 text-xs font-medium text-base-content">
                    <button className={`w-full rounded-lg px-4 py-2 cursor-pointer duration-100 uppercase tracking-wide flex gap-2 items-center justify-center ${activeContent == "1" && 'bg-[#000] animate-popup shadow-lg'}`}
                        onClick={() => setActiveContent("1")}
                    >
                        <Image src={'https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnextauth.de85000d.png&w=256&q=75'} alt='img'
                            className='w-6 h-6'
                            width={24}
                            height={24}
                        />
                        <span>
                            <span className="whitespace-nowrap">NEXT-AUTH</span>
                            +
                            <span className="whitespace-nowrap">MONGO-DB</span>
                        </span>
                    </button>

                    <button className={`w-full rounded-lg px-4 py-2 cursor-pointer duration-100 uppercase tracking-wide flex gap-2 items-center justify-center ${activeContent == "2" && 'bg-[#000] animate-popup shadow-lg'}`}
                        onClick={() => setActiveContent("2")}
                    >
                        <Image src={'https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupabase.c6aaae9c.png&w=384&q=75'} alt='img'
                            className='w-6 h-6'
                            width={24}
                            height={24}
                        />
                        Supabase
                    </button>
                </div>


                <div className='pt-4'>
                    <SetupTitle text={"setup"} />
                </div>


                {/* next-auth */}
                <div>

                    {pageContent.next_plainText_1 && (<PlainText content={pageContent.next_plainText_1} className='py-4 text-gray-300 text-sm' />)}

                    {pageContent.next_complexText_1 && (<ComplexText content={pageContent.next_complexText_1} className='py-4 text-gray-300 text-sm' />)}

                    {pageContent.next_complexText_2 && (<ComplexText content={pageContent.next_complexText_2} className='py-4 text-gray-400' />)}

                    {pageContent.next_highlightedNote_1 && (
                        <div className="py-4">
                            <HighLightedNote content={pageContent.next_highlightedNote_1} />
                        </div>
                    )}

                    {pageContent.next_complexText_3 && (<ComplexText content={pageContent.next_complexText_3} className='py-4 text-gray-400' />)}



                    {/* supabase */}

                    {pageContent.supabase_plainText_1 && (<PlainText content={pageContent.supabase_plainText_1} className='py-4 text-gray-300 text-sm' />)}

                    {
                        pageContent.supabase_codeSnippet_1 && (
                            <CodeExample codeString={pageContent.supabase_codeSnippet_1.codes} language='jsx' title={pageContent.supabase_codeSnippet_1.title} />
                        )
                    }

                    {pageContent.supabase_complexText_1 && (<ComplexText content={pageContent.supabase_complexText_1} className='py-4 text-gray-300 text-sm' />)}

                    {pageContent.supabase_complexText_2 && (<ComplexText content={pageContent.supabase_complexText_2} className='py-4 text-gray-400' />)}

                    {pageContent.supabase_complexText_3 && (<ComplexText content={pageContent.supabase_complexText_3} className='py-4 text-gray-400' />)}
                    {pageContent.supabase_complexText_4 && (<ComplexText content={pageContent.supabase_complexText_4} className='py-4 text-gray-400' />)}



                    {/* bottom sentence */}
                    {pageContent.comments && (
                        <div className="space-y-8 pt-8 border-t border-base-content/20">
                            <div className="flex">
                                <img src={pageContent.comments.image} className='w-16 h-16 float-left rounded-full mr-4' />
                                <ComplexText content={pageContent.comments.commentHeader} className='text-base-content text-base' />
                            </div>
                            {/* <div className='text-gray-400'>{pageContent.comments.commentBy}</div>
                                <div className='text-gray-400'>{pageContent.comments.commentBody}</div> */}
                            <PlainText content={pageContent.comments.commentBody} className='leading-4' />
                            <PlainText content={pageContent.comments.commentBy} className='text-lg leading-3' />
                        </div>
                    )}

                    {pageContent.redirect_image_1 && (
                        <div className="mt-8 relative border-2 rounded-xl border-dashed border-base-content/30 hover:border-primary duration-100 cursor-pointer overflow-hidden">

                            <Link href={pageContent.redirect_image_1.link}
                                className=''
                            >
                                <div className="relative z-20 p-12 space-y-6 text-center">
                                    <p className="text-lg font-bold tracking-tight text-gray-200 drop-shadow">
                                        {pageContent.redirect_image_1.headText}
                                    </p>
                                    <p className="text-gray-300 drop-shadow">{pageContent.redirect_image_1.text}</p>
                                </div>
                                <div className="absolute inset-0 z-10 bg-yellow-950 opacity-80"></div>
                                <img className='absolute inset-0 object-center object-cover w-full h-full fill-transparent'
                                    alt='stripe chart'
                                    loading='lazy'
                                    decoding='async'
                                    srcSet={pageContent.redirect_image_1.image_url}
                                />

                            </Link>
                        </div>
                    )}

                    {pageContent.redirect_image_2 && (
                        <div className="mt-8 relative border-2 rounded-xl  border-dashed border-base-content/30 hover:border-[#ff00f3] duration-100 cursor-pointer overflow-hidden">

                            <Link href={pageContent.redirect_image_2.link}
                                className=''
                            >
                                <div className="bg-white">
                                    <div className="relative z-20 p-12 space-y-6 text-center">
                                        <p className="text-lg font-bold tracking-tight text-gray-200 drop-shadow">
                                            {pageContent.redirect_image_2.headText}
                                        </p>
                                        <p className="text-gray-300 drop-shadow">{pageContent.redirect_image_2.text}</p>
                                    </div>
                                    <div className="absolute inset-0 z-10 bg-yellow-950 opacity-75"></div>
                                    <img className='absolute inset-0 object-center object-contain w-full h-full'
                                        alt='stripe chart'
                                        loading='lazy'
                                        decoding='async'
                                        srcSet={pageContent.redirect_image_2.image_url}
                                    />
                                </div>

                            </Link>
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