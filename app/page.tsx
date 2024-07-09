'use client'
import Image from 'next/image';
import { useEffect, useState } from "react";
import { CiFolderOn } from 'react-icons/ci';
import ComplexText from "./components/ComplexText";
import HighLightedNote from "./components/HighlightedNote";
import PlainText from "./components/PlainText";
import SearchBar from './components/SearchBar';
import ShipFirstComponent from './components/ShipFirstComponent';
import WhiteCodeSnippet from "./components/WhiteCodeSnippet";

const fetchData = async () => {
  try {
    const response = await fetch('data/docs.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};



export default function Home() {
  const [pageContent, setPageContent] = useState<any>(null || Object);
  const [activeContent, setActiveContent] = useState("1");

  useEffect(() => {
    let result;
    const getData = async () => {
      result = await fetchData();
      if (activeContent == "1") {
        setPageContent(result.nextAuth);
      } else {
        setPageContent(result.supabase);
      }
    };

    getData();

  }, [activeContent]);


  return (
    <main className="">
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
          {/* greetings container */}
          <div className="py-6 leading-relaxed">
            {pageContent.shipfast_subTitle &&
              <div className="text-xl text-base-content mb-6">{pageContent.shipfast_subTitle}</div>
            }

            {pageContent.shipfast_plainText && (<PlainText content={pageContent.shipfast_plainText} />)}




            {pageContent.shipfast_complexText && (
              <div className="mt-4">
                <ComplexText content={pageContent.shipfast_complexText} className='text-base-content text-sm' />
              </div>
            )}
          </div>

          <div className="py-4">
            {pageContent.shipfast_highlightedNote && (
              <HighLightedNote content={pageContent.shipfast_highlightedNote} />
            )}
          </div>

          <div className="pt-6">
            {
              pageContent.localServer_subTitle && (
                <h2 className="text-xl font-bold mb-6 text-base-content">
                  {pageContent.localServer_subTitle}
                </h2>
              )
            }

            <div className="py-2">

              {
                pageContent.localServer_complexTex_1 && (
                  <ComplexText content={pageContent.localServer_complexTex_1} className="leading-relaxed text-base-content pb-2" />

                )
              }


              {
                pageContent.localServer_codeSnippet_1 && (
                  <WhiteCodeSnippet codes={pageContent.localServer_codeSnippet_1} />
                )
              }



              {
                pageContent.localServer_highlightedNote_1 && (
                  <div className="py-4">
                    <HighLightedNote content={pageContent.localServer_highlightedNote_1} />
                  </div>
                )
              }{
                pageContent.localServer_highlightedNote_2 && (
                  <div className="py-4">
                    <HighLightedNote content={pageContent.localServer_highlightedNote_2} />
                  </div>
                )
              }


              {
                pageContent.localServer_complexText_2 && (
                  <div className="py-4 text-base-content">
                    <ComplexText content={pageContent.localServer_complexText_2} />
                  </div>
                )
              }

              {pageContent.localServer_codeSnippet_2 && (
                <WhiteCodeSnippet codes={pageContent.localServer_codeSnippet_2} />
              )}

              {pageContent.localServer_complexText_3 && (
                <div className="pt-8 pb-4 text-base-content">
                  <ComplexText content={pageContent.localServer_complexText_3} />
                </div>
              )}

              {pageContent.localServer_complexText_4 && (
                <div className="pt-8 pb-4 text-base-content">
                  <ComplexText content={pageContent.localServer_complexText_4} />
                </div>
              )}

              {pageContent.localServer_highlightedNote_3 && (
                <HighLightedNote content={pageContent.localServer_highlightedNote_3} />
              )}

            </div>
          </div>

          {/*project structure */}
          <div className="py-12">

            {pageContent.projectStructure_subTitle &&
              <h2 className="text-xl font-bold mb-6 text-base-content">
                {pageContent.projectStructure_subTitle}
              </h2>
            }
            <ul className="space-y-2 leading-relaxed">
              {pageContent.projectStructure_items && pageContent.projectStructure_items.map((item: any, index: number) => {
                console.log("structure item :", item)
                return (
                  <li className="flex gap-3 items-center text-gray-400" key={index}>
                    <CiFolderOn size={20} className='opacity-80' />
                    {item.map((elem: any, index: number) => (
                      <span>
                        {elem.type == "white_bold" && <span className="text-base-content font-medium text-sm">{elem.content}</span>}
                        {elem.type == "text" && <span>{elem.content}</span>}
                      </span>

                    ))}
                  </li>
                )
              }
              )}
            </ul>
          </div>

          {/*config.js file */}
          <div className="pb-9">
            {pageContent.configjs_subTitle && (
              <h2 className="text-xl font-bold mb-6 text-base-content">
                {pageContent.configjs_subTitle}
              </h2>
            )}

            {pageContent.configjs_complexTex && (
              <div className="space-y-2 leading-relaxed text-gray-400">
                <ComplexText content={pageContent.configjs_complexTex} />
              </div>
            )}
          </div>

          {/*.env file */}
          <div className="pb-9">
            {pageContent.env_subTitle && (
              <h2 className="text-xl font-bold mb-6 text-base-content">
                {pageContent.env_subTitle}
              </h2>
            )}
            {pageContent.env_complexTex && (
              <div className="space-y-2 leading-relaxed text-gray-400">
                <ComplexText content={pageContent.env_complexTex} />
              </div>
            )}

            {pageContent.env_codeSnippet && (
              <WhiteCodeSnippet codes={pageContent.env_codeSnippet} className="mt-4" />
            )}
          </div>

          {/* bottom sentence */}
          {
            pageContent.goNext_complexTex && (
              <div className="mt-4 text-gray-400">
                <ComplexText content={pageContent.goNext_complexTex} />
              </div>
            )
          }


        </div>
        <SearchBar />
        <ShipFirstComponent />
      </div>
    </main>
  );
}
