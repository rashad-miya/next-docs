import React, { FC } from 'react';

interface PlainTextProps {
  content:string;
  className?:string
}

const PlainText:FC<PlainTextProps> = ({content, className}) => {
   
  return (
    <div className={`text-base-content text-sm ${className}`}>{content}</div>
  )
}

export default PlainText