'use client'
import CodeExample from '@/app/components/CodeExample'
import CodeExampleTyped from '@/app/components/CodeExampleTyped'
import ComplexText from '@/app/components/ComplexText'
import HighLightedNote from '@/app/components/HighlightedNote'
import PlainText from '@/app/components/PlainText'
import SearchBar from '@/app/components/SearchBar'
import SetupTitle from '@/app/components/SetupTitle'
import ShipFirstComponent from '@/app/components/ShipFirstComponent'
import SubTitle from '@/app/components/SubTitle'
import WhiteCodeSnippet from '@/app/components/WhiteCodeSnippet'
import { fetchData } from '@/utils/fetchData'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [pageContent, setPageContent] = useState<any>(Object);
    const [activeContent, setActiveContent] = useState("1");

    useEffect(() => {
        let result;
        const getData = async () => {
            result = await fetchData('../../../../data/payments.json');
            if (activeContent == "1") {
                setPageContent(result.stripe);
            } else {
                setPageContent(result.lemon);
            }
        };

        getData();

    }, [activeContent]);


    return (
        <div className='p-8 md:p-12 '>
            <h2 className='flex items-center gap-2 font-bold text-3xl lg:text-5xl tracking-tight text-base-content flex-wrap'>
                {pageContent?.title && <span>{pageContent?.title}</span>}
            </h2>


            <div className="flex flex-col py-8 text-base-content/80 max-w-xl">

                {/* top button container */}
                <div className="p-1 rounded-xl bg-base-100 flex items-stretch justify-center gap-1 text-xs font-medium text-base-content">
                    <button className={`w-full rounded-lg px-4 py-2 cursor-pointer duration-100 uppercase tracking-wide flex gap-2 items-center justify-center ${activeContent == "1" && 'bg-[#000] animate-popup shadow-lg'}`}
                        onClick={() => setActiveContent("1")}
                    >
                        <Image src={'https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstripe.ea4baaef.png&w=256&q=75'} alt='img'
                            className='w-6 h-6'
                            width={24}
                            height={24}
                        />

                        <span className="whitespace-nowrap uppercase">Stripe</span>

                    </button>

                    <button className={`w-full rounded-lg px-4 py-2 cursor-pointer duration-100 uppercase tracking-wide flex gap-2 items-center justify-center ${activeContent == "2" && 'bg-[#000] animate-popup shadow-lg'}`}
                        onClick={() => setActiveContent("2")}
                    >
                        <Image src={'https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flemonsqueezy.3ccffb27.png&w=828&q=75'} alt='img'
                            className='w-6 h-6'
                            width={24}
                            height={24}
                        />
                        Lemon Squeezy
                    </button>
                </div>

                {pageContent.stripe_lifecycle_image && (
                    <div className='mt-5'>

                        <img className='w-full rounded'
                            alt='stripe chart'
                            loading='lazy'
                            decoding='async'
                            srcSet={pageContent.stripe_lifecycle_image.image_url}
                        />

                        <p className="text-sm text-center mt-2 opacity-80">
                            {pageContent.stripe_lifecycle_image.bottom_text}
                        </p>

                    </div>
                )}

                {activeContent == "1" && pageContent.payments_subTitle && (
                    <div className="mt-8">
                        <SetupTitle text={pageContent.payments_subTitle} />
                    </div>
                )}


                {pageContent.stripe_complexText_1 && (<ComplexText content={pageContent.stripe_complexText_1} className='py-4 text-gray-400' />)}


                {pageContent.stripe_plainText_1 && (<PlainText content={pageContent.stripe_plainText_1} className='py-4 text-gray-400' />)}
                {pageContent.stripe_plainText_2 && (<PlainText content={pageContent.stripe_plainText_2} className='py-4 text-gray-400' />)}
                {pageContent.stripe_plainText_3 && (<PlainText content={pageContent.stripe_plainText_3} className='py-4 text-gray-400' />)}
                {pageContent.stripe_plainText_4 && (<PlainText content={pageContent.stripe_plainText_4} className='py-4 text-gray-400' />)}
                {pageContent.stripe_plainText_5 && (<PlainText content={pageContent.stripe_plainText_5} className='py-4 text-gray-400' />)}
                {pageContent.stripe_plainText_6 && (<PlainText content={pageContent.stripe_plainText_6} className='py-4 text-gray-400' />)}

                {pageContent.stripe_complexText_2 && (<ComplexText content={pageContent.stripe_complexText_2} className='py-4 text-gray-400' />)}
                {pageContent.stripe_complexText_3 && (<ComplexText content={pageContent.stripe_complexText_3} className='py-4 text-gray-400' />)}


                {pageContent.stripe_plainText_7 && (<PlainText content={pageContent.stripe_plainText_7} className='py-4 text-gray-400' />)}
                {
                    pageContent.stripe_codeSnippet_1 && (
                        <div className="py-2">
                            <WhiteCodeSnippet codeString={pageContent.stripe_codeSnippet_1.codes} language='jsx' title={pageContent.stripe_codeSnippet_1.title} />
                        </div>
                    )
                }

                {pageContent.stripe_complexText_4 && (<ComplexText content={pageContent.stripe_complexText_4} className='py-4 text-gray-400' />)}

                {
                    pageContent.stripe_highlightedNote_1 && (
                        <div className="py-4">
                            <HighLightedNote content={pageContent.stripe_highlightedNote_1} />
                        </div>
                    )
                }

                {pageContent.stripe_checkout_subTitle && (
                    <SubTitle text={pageContent.stripe_checkout_subTitle} />
                )}
                {pageContent.stripe_complexText_5 && (<ComplexText content={pageContent.stripe_complexText_5} className='py-4 text-gray-400' />)}


                {pageContent.stripe_webhook_subTitle && (
                    <SubTitle text={pageContent.stripe_webhook_subTitle} />
                )}

                {
                    pageContent.stripe_complexText_6 && (
                        <div className="py-4 text-base-content">
                            {<ComplexText content={pageContent.stripe_complexText_6} />}
                        </div>
                    )
                }


                {/* bottom sentence */}
                {pageContent.stripe_redirect_image_1 && (
                    <div className="space-y-8 pt-8 border-t border-base-content/20">


                        <Link href={pageContent.stripe_redirect_image_1.link}
                            className='block relative border-2 rounded-xl border-dashed border-blue-500/50 hover:border-blue-500 duration-100 cursor-pointer overflow-hidden'
                        >
                            <div className="relative z-20 px-16 py-16  space-y-6 text-center">
                                <p className="text-lg font-bold tracking-tight text-gray-200 drop-shadow">
                                    {pageContent.stripe_redirect_image_1.headText}
                                </p>
                                <p className="text-gray-300 drop-shadow">{pageContent.stripe_redirect_image_1.text}</p>
                            </div>
                            <div className="absolute inset-0 z-10 bg-blue-950/70"></div>
                            <img className='absolute inset-0 object-center object-cover w-full h-full '
                                alt='stripe chart'
                                loading='lazy'
                                decoding='async'
                                srcSet={pageContent.stripe_redirect_image_1.image_url}
                            />

                        </Link>

                        <Link href={pageContent.stripe_redirect_image_2.link}
                            className='block relative border-2 rounded-xl border-dashed border-blue-500/50 hover:border-blue-500 duration-100 cursor-pointer overflow-hidden mr-4'
                        >
                            <div className="relative z-20 px-16 py-16  space-y-6 text-center">
                                <p className="text-lg font-bold tracking-tight text-gray-200 drop-shadow">
                                    {pageContent.stripe_redirect_image_2.headText}
                                </p>
                                <p className="text-gray-300 drop-shadow">{pageContent.stripe_redirect_image_2.text}</p>
                            </div>
                            <div className="absolute inset-0 z-10 bg-blue-950/70"></div>
                            <img className='absolute inset-0 object-center object-cover w-full h-full '
                                alt='stripe chart'
                                loading='lazy'
                                decoding='async'
                                srcSet={pageContent.stripe_redirect_image_2.image_url}
                            />

                        </Link>
                    </div>
                )}

                {/* lemon code */}


                {pageContent.lemon_highlightedNote_1 && (
                    <div className="mt-10">
                        <HighLightedNote content={pageContent.lemon_highlightedNote_1} className='py-4 text-gray-400' />
                    </div>

                )}

                {activeContent == "2" && pageContent.payments_subTitle && (
                    <div className="mt-10">
                        <SetupTitle text={pageContent.payments_subTitle} />
                    </div>
                )}


                {pageContent.lemon_plainText_1 && (<PlainText content={pageContent.lemon_plainText_1} className='py-4 text-gray-400' />)}
                {
                    pageContent.lemon_codeSnippet_1 && (
                        <div className="py-2">
                            <WhiteCodeSnippet codeString={pageContent.lemon_codeSnippet_1.codes} language='jsx' title={pageContent.lemon_codeSnippet_1.title} />
                        </div>
                    )
                }

                {pageContent.lemon_plainText_2 && (<PlainText content={pageContent.lemon_plainText_2} className='py-4 text-gray-400' />)}
                {
                    pageContent.lemon_codeSnippet_2 && (
                        <div className="py-2">
                            <WhiteCodeSnippet codeString={pageContent.lemon_codeSnippet_2.codes} language='jsx' title={pageContent.lemon_codeSnippet_2.title} />
                        </div>
                    )
                }

                <ul className='list-inside list-disc space-y-1 leading-relaxed ml-4 pb-4'>

                    {pageContent.lemon_complexText_1 && (
                        <li className='list-item text-gray-400'>
                            <ComplexText content={pageContent.lemon_complexText_1} className='inline' />
                        </li>
                    )}
                    {pageContent.lemon_complexText_2 && (
                        <li className='list-item text-gray-400'>
                            <ComplexText content={pageContent.lemon_complexText_2} className='inline'/>
                        </li>
                    )}

                    {pageContent.lemon_highlightedNote_2 && (
                        <li className='inline text-gray-400'>
                            <HighLightedNote content={pageContent.lemon_highlightedNote_2} className='py-4 text-gray-400' />
                        </li>
                    )}

                    {pageContent.lemon_complexText_3 && (
                        <li className='list-item text-gray-400'>
                            <ComplexText content={pageContent.lemon_complexText_3} className='inline' />
                        </li>
                    )}
                </ul>

                {/* {pageContent.lemon_complexText_1 && (<ComplexText content={pageContent.lemon_complexText_1} className='py-4 text-gray-400' />)}
                {pageContent.lemon_complexText_2 && (<ComplexText content={pageContent.lemon_complexText_2} className='py-4 text-gray-400' />)}
                {pageContent.lemon_highlightedNote_2 && (<HighLightedNote content={pageContent.lemon_highlightedNote_2} className='py-4 text-gray-400' />)}
                {pageContent.lemon_complexText_3 && (<ComplexText content={pageContent.lemon_complexText_3} className='py-4 text-gray-400' />)} */}


                {pageContent.lemon_complexText_4 && (<ComplexText content={pageContent.lemon_complexText_4} className='py-4 text-gray-400' />)}

                {pageContent.lemon_highlightedNote_3 && (<HighLightedNote content={pageContent.lemon_highlightedNote_3} className='py-4 text-gray-400' />)}


                {pageContent.lemon_plainText_3 && (<PlainText content={pageContent.lemon_plainText_3} className='py-4 text-gray-400' />)}
                {
                    pageContent.lemon_codeSnippet_3 && (
                        <div className="py-2">
                            <CodeExample codeString={pageContent.lemon_codeSnippet_3.codes} language='jsx' title={pageContent.lemon_codeSnippet_3.title} />
                        </div>
                    )
                }

                {pageContent.lemon_complexText_5 && (<ComplexText content={pageContent.lemon_complexText_5} className='py-4 text-gray-400' />)}
                {
                    pageContent.lemon_codeSnippet_4 && (
                        <div className="py-2">
                            <CodeExample codeString={pageContent.lemon_codeSnippet_4.codes} language='jsx' title={pageContent.lemon_codeSnippet_4.title} />
                        </div>
                    )
                }

                {pageContent.lemon_complexText_6 && (<ComplexText content={pageContent.lemon_complexText_6} className='py-4 text-gray-400' />)}
                {
                    pageContent.lemon_codeSnippet_5 && (
                        <div className="py-2">
                            <CodeExample codeString={pageContent.lemon_codeSnippet_5.codes} language='jsx' title={pageContent.lemon_codeSnippet_5.title} />
                        </div>
                    )
                }

                {pageContent.lemon_complexText_7 && (<ComplexText content={pageContent.lemon_complexText_7} className='py-4 text-gray-400' />)}
                {
                    pageContent.lemon_codeSnippet_6 && (
                        <div className="py-2">
                            <CodeExample codeString={pageContent.lemon_codeSnippet_6.codes} language='jsx' title={pageContent.lemon_codeSnippet_5.title} />
                        </div>
                    )
                }

                {pageContent.lemon_complexText_8 && (<ComplexText content={pageContent.lemon_complexText_8} className='py-4 text-gray-400' />)}
                {
                    pageContent.lemon_codeSnippet_7 && (
                        <div className="py-2">
                            <CodeExampleTyped codeObjext={pageContent.lemon_codeSnippet_7} language='jsx' />
                        </div>
                    )
                }

                {pageContent.lemon_complexText_9 && (<ComplexText content={pageContent.lemon_complexText_9} className='py-4 text-gray-400' />)}
                {
                    pageContent.lemon_codeSnippet_8 && (
                        <div className="py-2">
                            <CodeExampleTyped codeObjext={pageContent.lemon_codeSnippet_8} language='jsx' />
                        </div>
                    )
                }

                {pageContent.lemon_complexText_10 && (<ComplexText content={pageContent.lemon_complexText_10} className='py-4 text-gray-400' />)}
                {
                    pageContent.lemon_codeSnippet_9 && (
                        <div className="py-2">
                            <CodeExampleTyped codeObjext={pageContent.lemon_codeSnippet_9} language='jsx' />
                        </div>
                    )
                }

                {pageContent.lemon_complexText_11 && (<ComplexText content={pageContent.lemon_complexText_11} className='py-4 text-gray-400' />)}
                {
                    pageContent.lemon_codeSnippet_10 && (
                        <div className="py-2">
                            <CodeExampleTyped codeObjext={pageContent.lemon_codeSnippet_10} language='jsx' />
                        </div>
                    )
                }

                {pageContent.lemon_complexText_12 && (<ComplexText content={pageContent.lemon_complexText_12} className='py-4 text-gray-400' />)}
                {
                    pageContent.lemon_codeSnippet_11 && (
                        <div className="py-2">
                            <CodeExampleTyped codeObjext={pageContent.lemon_codeSnippet_11} language='jsx' />
                        </div>
                    )
                }

                {pageContent.lemon_complexText_13 && (<ComplexText content={pageContent.lemon_complexText_13} className='py-4 text-gray-400' />)}

                {pageContent.lemon_complexText_14 && (<ComplexText content={pageContent.lemon_complexText_14} className='py-4 text-gray-400' />)}
                {
                    pageContent.lemon_codeSnippet_12 && (
                        <div className="py-2">
                            <CodeExampleTyped codeObjext={pageContent.lemon_codeSnippet_12} language='jsx' />
                        </div>
                    )
                }

            </div>
            <SearchBar />
            <ShipFirstComponent />
        </div>
    )
}

export default page