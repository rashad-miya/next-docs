const fs = require('fs');

const data = [
    {
        "type": "text",
        "content": "This is a paragraph of text."
    },
    {
        "type": "code",
        "language": "javascript",
        "content": `import { useState } from 'react';

const ExampleComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <p className="text">Count: {count}</p>
      <button className="btn" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ExampleComponent;`
    }
];

fs.writeFile('data-started.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been saved.');
    }
});
