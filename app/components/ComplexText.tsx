import Link from 'next/link';
import React from 'react'

interface BaseContentItem {
  type: string;
  content: string;
}

interface TextItem extends BaseContentItem {
  type: 'text';
}

interface UnderlineItem extends BaseContentItem {
  type: 'underlinedText';
}

interface LinkItem extends BaseContentItem {
  type: 'link';
}

interface HighlightedTextItem extends BaseContentItem {
  type: 'highlightedText';
}

interface TextWhiteBold extends BaseContentItem {
  type: 'white_bold';
}

interface LineGap extends BaseContentItem {
  type: 'break';
}
interface BlockText extends BaseContentItem {
  type: 'blockText';
}

type ContentItem = TextItem | UnderlineItem | LinkItem | HighlightedTextItem | TextWhiteBold | LineGap | BlockText;

interface ComplexTextProps {
  content: ContentItem[];
  className?: string
}


const ComplexText: React.FC<ComplexTextProps> = ({ content, className = '' }) => {

  return (
    <div className={`text-left ${className}`}>
      {content.map((item, index) => {
        switch (item.type) {
          case 'text':
            return <span key={index} className='inline'>{item.content}</span>;
          case 'underlinedText':
            return <Link key={index} href={''} className='cursor-pointer underline text-orange-400 inline px-1'>{item.content} </Link>
          case 'link':
            return <Link key={index} href={''} className='cursor-pointer underline inline px-1'>{item.content} </Link>
          case 'highlightedText':
            return <mark key={index} className='text-sm bg-base-100 font-mono rounded m-1 px-1.5 py-[2px] text-base-content select-all break-words inline'>{item.content}</mark>;
          case 'white_bold':
            return <span key={index} className='text-gray-100 px-1'>{item.content}</span>;

          case 'blockText':
            return <p key={index}>{item.content}</p>;
          case 'break':
            return <p key={index}>
            </p>;
          default:
            return null;
        }
      })}
    </div>
  );
}



export default ComplexText