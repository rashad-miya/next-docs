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

interface HighlightedTextItem extends BaseContentItem {
    type: 'highlightedText';
}

interface WhiteBold extends BaseContentItem {
    type: 'white_bold';
}

interface LineGap extends BaseContentItem {
    type: 'break';
}
interface BlockText extends BaseContentItem {
    type: 'blockText';
}

type ContentItem = TextItem | UnderlineItem | HighlightedTextItem | WhiteBold | LineGap | BlockText;

interface HighLightedNoteProps {
    content: ContentItem[];
    className?: string
}


const HighLightedNote: React.FC<HighLightedNoteProps> = ({ content, className = '' }) => {

    return (
        <div className={`${className} p-4 px-5 rounded-r-lg text-base-content bg-[#272010] text-sm border-l-[3px] border-[#706241]`}>
            {content.map((item, index) => {
                switch (item.type) {
                    case 'text':
                        return <span key={index} className=' text-base-content text-sm leading-7'>{item.content}</span>;
                    case 'white_bold':
                        return <span key={index} className=' text-gray-100 font-semibold text-sm pr-2 leading-7'>{item.content}</span>;
                    case 'underlinedText':
                        return <Link key={index} href={''} className='underline cursor-pointer px-1 leading-7'>{item.content} </Link>
                    case 'highlightedText':
                        return <mark key={index} className='bg-base-100 font-mono rounded mx-1.5 px-1.5 py-1 text-base-content select-all break-words text-xs leading-7'>
                            {item.content}
                        </mark>;
                    case 'blockText':
                        return <p key={index} className=' text-base-content text-sm leading-7'>{item.content}</p>;
                    case 'break':
                        return <p key={index} className='leading-5'>
                        </p>;
                    default:
                        return null;
                }
            })}
        </div>
    );
}



export default HighLightedNote