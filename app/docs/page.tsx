import Link from 'next/link'
import React from 'react'
import { CiFolderOn } from 'react-icons/ci'
import { IoCopyOutline } from 'react-icons/io5'
import ShipFirstComponent from '../components/ShipFirstComponent'
import SearchBar from '../components/SearchBar'
import Image from 'next/image'

const page = () => {
  return (
    <div className='p-8 md:p-12 '>
      <h2 className='flex items-center gap-2 font-bold text-3xl lg:text-5xl tracking-tight text-base-content flex-wrap'>
        <span>Get Started</span>
      </h2>

      <div className="flex flex-col py-8 text-base-content/80 max-w-xl">
        {/* top button container */}
        <div className="p-1 rounded-xl bg-base-100 flex items-stretch justify-center gap-1 text-xs font-medium text-base-content">
          <button className="w-full rounded-lg px-4 py-2 cursor-pointer duration-100 uppercase tracking-wide flex gap-2 items-center justify-center bg-[#000] animate-popup shadow-lg">
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

          <button className="w-full rounded-lg  py-2 cursor-pointer duration-100 uppercase tracking-wide  flex gap-2 items-center justify-center ">
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
          <div className="text-xl text-base-content mb-6">Hey maker, welcome to ShipFast 👋</div>
          <div className=" text-base-content text-sm">Here's a quick overview of the boilerplate. Follow along to get your app up and running.</div>

          <div className="mt-4 text-base-content text-sm">
            Once you're done, start with
            <Link href={''} className='cursor-pointer underline text-orange-300'> this tutorial </Link>
            to launch your project in 5 minutes. Let's build that startup, FAST ⚡️
          </div>
        </div>

        <div className="py-4">
          <div className="p-4 px-5 rounded-r-lg text-base-content bg-[#272010] text-sm border-l-[3px] border-[#706241]">
            You're browsing the /app router documentation. To use the /pages router,
            <Link href={''} className='underline cursor-pointer px-1'>see here</Link>
          </div>
        </div>

        <div className="pt-6">
          <h2 className="text-xl font-bold mb-6 text-base-content">
            Start a local server
          </h2>
          <div className="py-2">
            <div className="leading-relaxed text-base-content pb-2">
              1. In your terminal, run the following commands
              <span className="text-gray-100 px-1">one-by-one:</span>
            </div>

            <div className="text-sm bg-base-100 rounded-lg overflow-hidden border border-base-content border-opacity-20">

              <div className="px-4 py-2 flex justify-between items-center border-b border-base-content border-opacity-80">
                <p className="text-base-content text-opacity-0">Terminal</p>
                <div className="flex items-center gap-x-2">
                  <select name="" id="" className='select select-sm select-bordered w-full max-w-xs bg-transparent font-normal'>
                    <option value="javascript" className='text-base-content'>JavaScript</option>
                    <option value="typescript" className='text-base-content'>TypeScript</option>
                  </select>
                  <button className="btn btn-sm btn-square btn-ghost text-base-content">
                    <IoCopyOutline size={20} />
                  </button>
                </div>
              </div>

              <pre className='p-5 block scrollbar-large overflow-x-auto bg-[#2B2B2B] text-[#383737]'>
                <code className='whitespace-pre'>
                  <div>
                    <span className="comment linenumber react-syntax-highlighter-line-number code-number">
                      1
                    </span>
                    <span className='text-gray-100 mr-2'>
                      git clone https://github.com/Marc-Lou-Org/ship-fast.git [YOUR_APP_NAME]
                    </span>
                  </div>
                  <div>
                    <span className="comment linenumber react-syntax-highlighter-line-number code-number">
                      2
                    </span>
                    <span className='text-gray-100 mr-2'>cd [YOUR_APP_NAME]</span>
                  </div>
                </code>
              </pre>

            </div>

            <div className="py-4">
              <div className="p-4 px-5 rounded-r-lg text-base-content bg-[#272010] text-sm border-l-[3px] border-[#706241]">
                ShipFast requires Node 18.17 or greater. Type
                <code className='bg-base-100 font-mono rounded mx-1.5 px-1.5 py-1 text-base-content select-all break-words text-xs'>node -v</code>
                in your terminal to check version.
              </div>
            </div>

            <div className="py-4 text-base-content">
              2. Rename
              <code className="text-sm bg-base-100 font-mono rounded mx-1 px-1.5 py-1 text-base-content select-all break-words ">
                .env.example
              </code>
              to
              <code className="text-sm bg-base-100 font-mono rounded mx-1 px-1.5 py-1 text-base-content select-all break-words ">
                .env.local
              </code>
            </div>

            <div className="text-sm bg-base-100 rounded-lg overflow-hidden border border-base-content border-opacity-20">

              <div className="px-4 py-2 flex justify-between items-center border-b border-base-content border-opacity-80">
                <p className="text-base-content text-opacity-0">Terminal</p>
                <div className="flex items-center gap-x-2">
                  <button className="btn btn-sm btn-square btn-ghost text-base-content">
                    <IoCopyOutline size={20} />
                  </button>
                </div>
              </div>

              <pre className='p-5 block scrollbar-large overflow-x-auto bg-[#2B2B2B] text-[#383737]'>
                <code className='whitespace-pre'>
                  <div>
                    <span className="comment linenumber react-syntax-highlighter-line-number code-number">
                      1
                    </span>
                    <span className='text-gray-100 mr-2'>
                      mv .env.example .env.local
                    </span>
                  </div>

                </code>
              </pre>
            </div>

            <div className="pt-8 pb-4 text-base-content">
              3. Open
              <code className="text-sm bg-base-100 font-mono rounded mx-1 px-1.5 py-1 text-base-content select-all break-words ">
                http://localhost:3000
              </code>
              to see your site. And voila!
            </div>

            <div>
              <div className="p-4 px-5 rounded-r-lg text-base-content bg-[#272010] text-sm border-l-[3px] border-[#706241]">
                You will see errors in the console but nothing important.
              </div>
            </div>

          </div>
        </div>

        {/*project structure */}
        <div className="py-12">
          <h2 className="text-xl font-bold mb-6 text-base-content">
            NextJS project structure
          </h2>
          <ul className="space-y-2 leading-relaxed">
            <li className="flex gap-3 items-center text-gray-400">
              <CiFolderOn size={20} className='opacity-80' />
              <span className="text-base-content font-medium text-sm">/app</span>
              →Pages (1 folder + page.js = 1 page)
            </li>
            <li className="flex gap-3 items-center text-gray-400">
              <CiFolderOn size={20} className='opacity-80' />
              <span className="text-base-content font-medium text-sm">/app/api</span>
              → API calls (1 file = 1 API endpoint)
            </li>

            <li className="flex gap-3 items-center text-gray-400">
              <CiFolderOn size={20} className='opacity-80' />
              <span className="text-base-content font-medium text-sm">/components</span>
              → React components
            </li>

            <li className="flex gap-3 items-center text-gray-400">
              <CiFolderOn size={20} className='opacity-80' />
              <span className="text-base-content font-medium text-sm">/libs</span>
              → Libraries helper functions (Stripe & Mailgun, auth etc.)
            </li>

            <li className="flex gap-3 items-center text-gray-400">
              <CiFolderOn size={20} className='opacity-80' />
              <span className="text-base-content font-medium text-sm">/models</span>
              → Database models
            </li>
          </ul>
        </div>

        {/*config.js file */}
        <div className="pb-9">
          <h2 className="text-xl font-bold mb-6 text-base-content">
            config.js file
          </h2>
          <p className="space-y-2 leading-relaxed text-gray-400">
            It is where you configure your app. Each key is documented to know how and why it's used. Have a thorough look at it:
            <span className="text-base-content font-medium"> it is the backbone of the app.</span>
          </p>
        </div>

        {/*.env file */}
        <div className="pb-9">
          <h2 className="text-xl font-bold mb-6 text-base-content">
            .env file
          </h2>
          <p className="space-y-2 leading-relaxed text-gray-400">
            Rename the
            <code className="text-sm bg-base-100 font-mono rounded mx-1 px-1.5 py-1 text-base-content select-all break-words ">
              .env.example
            </code>
            file to
            <code className="text-sm bg-base-100 font-mono rounded mx-1 px-1.5 py-1 text-base-content select-all break-words ">
              .env.local
            </code>
            Change
            <code className="text-sm bg-base-100 font-mono rounded mx-1 px-1.5 py-1 text-base-content select-all break-words ">
              NEXTAUTH_SECRET
            </code>
            to anything else. The file content should look like this:
          </p>

          <div className="mt-4 text-sm bg-base-100 rounded-lg overflow-hidden border border-base-content border-opacity-20">

            <div className="px-4 py-2 flex justify-between items-center border-b border-base-content border-opacity-80">
              <p className="text-base-content text-opacity-0">.env.local</p>
              <div className="flex items-center gap-x-2">
                <button className="btn btn-sm btn-square btn-ghost text-base-content">
                  <IoCopyOutline size={20} />
                </button>
              </div>
            </div>

            <pre className='p-5 block scrollbar-large overflow-x-auto bg-[#2B2B2B] text-[#383737]'>
              <code className='whitespace-pre'>
                <div>
                  <span className="comment linenumber react-syntax-highlighter-line-number code-number">
                    1
                  </span>
                  <span className='text-gray-100 mr-2'>
                    NEXTAUTH_URL=http://localhost:3000
                  </span>
                </div>

                <div>
                  <span className="comment linenumber react-syntax-highlighter-line-number code-number">
                    2
                  </span>
                  <span className='text-gray-100 mr-2'>
                    NEXTAUTH_SECRET=uhf3874y7fh387u87653947u4rh9394hf
                  </span>
                </div>

                <div>
                  <span className="comment linenumber react-syntax-highlighter-line-number code-number">
                    3
                  </span>
                  <span className='text-gray-100 mr-2'>
                    GOOGLE_ID=
                  </span>
                </div>

              </code>
            </pre>
          </div>
        </div>

        {/* bottom sentence */}
        <div className="mt-4 text-gray-400">
          Now go ahead and follow
          <Link href={''} className='cursor-pointer underline text-orange-300'> this tutorial </Link>
          to get your startup live within 5 minutes!
        </div>

      </div>
      <SearchBar />
      <ShipFirstComponent />
    </div>
  )
}

export default page