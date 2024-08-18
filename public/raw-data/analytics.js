const fs = require('fs');

const data = {
    "docs": {
        "title": "Features > Analytics",

        "support_subTitle": "setup",

        "complexText_1": [
            {
                "type": "text",
                "content": "1. Create a new site on"
            },
            {
                "type": "link",
                "content": "plausible",
                "link": ""
            },
        ],

        "complexText_2": [
            {
                "type": "text",
                "content": "2. (optional) Some adblockers block Plausible. To fix this, proxy the script through the nextjs /api."
            },
            {
                "type": "blockText",
                "content": "First add this to next.config.js:"
            },
        ],

        "codeSnippet_1": {
            "title": "next.config.js",
            "codes": `async rewrites() {
    return [
      {
        source: "/plausible/js/script.js",
        destination: "https://plausible.io/js/script.js",
      },
      {
        source: "/plausible/api/event",
        destination: "https://plausible.io/api/event",
      },
    ];
}`
        },


        "complexText_3": [
            {
                "type": "text",
                "content": "Then replace the Plausible script in the the main"
            },
            {
                "type": "highlightedText",
                "content": "layout.js"
            },
            {
                "type": "text",
                "content": "file:"
            },
        ],

        "codeSnippet_2": {
    "title": "layout.js",
    "codes": `<script
    defer
    data-domain="YOUR_DOMAIN"
    data-api="/plausible/api/event"
    src="/plausible/js/script.js"
  ></script>`
        },

        "complexText_4": [
            {
                "type": "text",
                "content": "I use Plausible for traffic analytics & custom events. If you want to use another tool, remove the Plausible script in the"
            },
            {
                "type": "highlightedText",
                "content": "layout.js",
            },
            {
                "type": "text",
                "content": "file."
            }
        ],
    },

}



fs.writeFile('data/analytics.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been saved.');
    }
});
