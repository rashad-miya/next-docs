const fs = require('fs');

const data = {
    "docs": {
        "title": "Features > Error handling",

        "support_subTitle": "setup",

        "complexText_1": [
            {
                "type": "text",
                "content": "Javascript errors are handled gracefully in the"
            },
            {
                "type": "highlightedText",
                "content": "/app/error.js",
            },
            {
                "type": "text",
                "content": "high-level component. Error 404 (not found) is handled gracefully in the"
            },
            {
                "type": "highlightedText",
                "content": "/app/not-found.js",
            },
            {
                "type": "text",
                "content": "high-level component",
            },
        ],

        "complexText_2": [
            {
                "type": "text",
                "content": "When an error occurs, a beautiful page is shown and users can reach out support through the"
            },
            {
                "type": "highlightedText",
                "content": "<ButtonSupport />"
            },
            {
                "type": "text",
                "content": "component."
            }
        ],

        "complexText_3": [
            {
                "type": "text",
                "content": "By default, it will open the Crisp customer chat (if crisp.id is present in config.js). Here's the"
            },
            {
                "type": "underlinedText",
                "content": "tutorial to set up Crisp.",
                "link": ""
            },
        ],

        "complexText_4": [
            {
                "type": "text",
                "content": "If crisp.id is not set up in the config.js file, it will open the user mail client (mailto:) and let them them an email to your email support (mailgun.supportEmail in config.js)"
            },
        ],
    },

}



fs.writeFile('data/error-handling.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been saved.');
    }
});
