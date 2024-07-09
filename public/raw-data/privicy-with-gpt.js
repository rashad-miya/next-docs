const fs = require('fs');

const data = {
    "docs": {
        "title": "Tutorials > Privacy policy with GPT",
        "plainText_1": "Privacy policy & terms of service are mandatory when you set a Stripe account or apply for Google Oauth constent screen.",
        "plainText_2": "ShipFast boilerplate includes ChatGPT prompts to help you generate these boring documents in minutes",

        "complexText_1": [
            {
                "type": "text",
                "content": "Go to the"
            },
            {
                "type": "highlightedText",
                "content": "/app/tos/page.js"
            },
            {
                "type": "text",
                "content": "&"
            },
            {
                "type": "highlightedText",
                "content": "/app/privacy-policy/page.js"
            },
            {
                "type": "text",
                "content": "files in the repo to get the prompts. Add your business details, prompt ChatGPT, and you're up & running!"
            },
        ],
    },

}



fs.writeFile('data/privicy.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been saved.');
    }
});
