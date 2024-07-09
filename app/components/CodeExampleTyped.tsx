'use client'
import { useState, ChangeEvent } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoCopyOutline } from 'react-icons/io5';
import { TbCopyCheck } from 'react-icons/tb';

interface CodeItem {
    codes: string;
    codes_ts: string;
    title?: string;
}

interface CodeExampleTypedProps {
    codeObjext: CodeItem;
    language: string;
}

const CodeExampleTyped: React.FC<CodeExampleTypedProps> = ({ codeObjext, language, }) => {
    const [isCopied, setIsCopied] = useState(false);
    const [codeString, setCodeString] = useState(codeObjext.codes);

    const [selectedLanguage, setSelectedLanguage] = useState('javascript');

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(event.target.value);
        const newValue = event.target.value;
        setSelectedLanguage(newValue);
        if(newValue === "typescript"){
            setCodeString(codeObjext.codes_ts)
        }
    };

    const handleCopy = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 2000); // Reset after 2 seconds
    };

    return (
        <div className="relative text-sm bg-base-100 rounded-lg overflow-hidden border border-base-content border-opacity-20">

            <div className="px-4 py-2 flex justify-between items-center border-b border-base-content border-opacity-80">
                <p className="text-base-content text-opacity-0">{codeObjext.title}</p>
                <div className="flex items-center gap-x-2">
                    <select name="" id="" className='select select-sm select-bordered w-full max-w-xs bg-transparent font-normal'
                        value={selectedLanguage}
                        onChange={handleChange}
                    >
                        <option value="javascript" className='text-base-content'>JavaScript</option>
                        <option value="typescript" className='text-base-content'>TypeScript</option>
                    </select>
                    <CopyToClipboard text={codeString} onCopy={handleCopy}>
                        <button className="p-1 text-white">
                            {isCopied ? <TbCopyCheck size={20} /> : <IoCopyOutline size={20} />}
                        </button>
                    </CopyToClipboard>
                </div>
            </div>

            <div className="block scrollbar-large overflow-x-auto bg-[#2B2B2B] text-[#383737]">
                <SyntaxHighlighter language={language} style={tomorrow} className='scrollbar-large'>
                    {codeString}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeExampleTyped;
