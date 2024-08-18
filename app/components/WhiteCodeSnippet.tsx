'use client'
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow, dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { IoCopyOutline } from 'react-icons/io5';
import { TbCopyCheck } from 'react-icons/tb';

const customStyle = {
  'code[class*="language-"]': {
    color: '#f8f8f2',
    fontFamily: '"Fira Code", "Fira Mono", monospace',
    fontSize: '16px',
    lineHeight: '1.5',
    borderRadius: '5px',
    // padding: '20px',
  },
  // You can customize more specific elements
  'pre[class*="language-"]': {
    background: '#424242',
    padding: '20px',
  },
  'comment': { color: '#6272a4' },
  'keyword': { color: '#ff79c6' },
  'string': { color: '#f1fa8c' },
}

interface CodeExampleProps {
  codeString: string;
  language: string;
  title?: string;
}

const WhiteCodeSnippet: React.FC<CodeExampleProps> = ({ codeString, language, title = 'Terminal' }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000); // Reset after 2 seconds
  };

  // console.log("dodododod :", codeString)

  return (
    <div className="relative text-sm bg-base-100 rounded-lg overflow-hidden border border-base-content border-opacity-20">

      <div className="px-4 py-2 flex justify-between items-center border-b border-base-content border-opacity-80">
        <p className="text-gray-300 text-opacity-50">{title}</p>
        <div className="flex items-center gap-x-2">
          <CopyToClipboard text={codeString} onCopy={handleCopy}>
            <button className="p-1 text-white">
              {isCopied ? <TbCopyCheck size={20} /> : <IoCopyOutline size={20} />}
            </button>
          </CopyToClipboard>
        </div>
      </div>

      <div className="block scrollbar-large overflow-x-auto bg-[#2B2B2B] text-[#383737]">
        <SyntaxHighlighter language={language}
          style={customStyle}
          className='scrollbar-large'
          showLineNumbers
          >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default WhiteCodeSnippet;

// custom syntax highlighting.js

// import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// const customStyle = {
//   ...tomorrow,
//   'tag': { color: '#ff7f50' }, // HTML tags
//   'attr-name': { color: '#2ecc71' }, // Attribute names
//   'attr-value': { color: '#e74c3c' }, // Attribute values
//   'class-name': { color: '#9b59b6' }, // Class names
// };

// export default customStyle;
