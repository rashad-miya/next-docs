import React, { useState, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const fetchData = async () => {
    try {
        const response = await fetch('https://your-api-endpoint.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

const DataDisplay = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            setData(result);
            setLoading(false);
        };

        getData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>No data available</div>;
    }

    return (
        <div>
            {data?.map((item:any, index:number) => (
                <div key={index}>
                    {item.type === 'text' && <p>{item.content}</p>}
                    {item.type === 'code' && (
                        <SyntaxHighlighter language={item.language} style={docco}>
                            {item.content}
                        </SyntaxHighlighter>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DataDisplay;
