const fs = require('fs');

const data = {
    "docs": {
        "title": "Features > Customer support",

        "support_subTitle": "setup",

        "complexText_1": [
            {
                "type": "text",
                "content": "1. Create a "
            },
            {
                "type": "link",
                "content": " Crisp Account",
                "link":""
            },
        ],

        "complexText_2": [
            {
                "type": "text",
                "content": "2. Create a new website and copy the website ID. You can find it in the Integrations menu, in the HTML option. It' called CRISP_WEBSITE_ID."
            },
        ],

        "complexText_3": [
            {
                "type": "text",
                "content": "3. Paste your Crisp website ID in"
            },
            {
                "type": "highlightedText",
                "content": "crisp.id",
            },
            {
                "type":"text",
                "content":"in config.js"
            }
        ],
    },

}



fs.writeFile('data/customer-support.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been saved.');
    }
});
