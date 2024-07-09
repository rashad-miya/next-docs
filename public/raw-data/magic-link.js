const fs = require('fs');

const data = {
    "nextAuth": {
        "title": "Features > Magic Links",

        "next_complexText_1": [
            {
                "type": "text",
                "content": "ShipFast uses "
            },
            {
                "type": "underlinedText",
                "content": "nextAuth",
                "link":""
            },
            {
                "type": "text",
                "content": "to authenticate users. You can configure it in the"
            },
            {
                "type": "highlightedText",
                "content": "/app/api/auth/[...nextauth]/route.js"
            },
            {
                "type": "text",
                "content": "file."
            },
        ],


        "next_google_subTitle": "setup",

        "next_complexText_2": [
            {
                "type": "text",
                "content": "1. If you haven't done it yet, add this to your"
            },
            {
                "type": "highlightedText",
                "content": ".env.local"
            },
            {
                "type": "text",
                "content": ":"
            },
        ],

        "next_codeSnippet_1": {
            "title": ".env.local",
            "codes": `
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=4348yhu34h3ui4ofjndfsdfeirh4b637u5sfd3
            `
        },


        "next_highlightedNote_1": [
            {
                "type": "highlightedText",
                "content": "NEXTAUTH_SECRET"
            },
            {
                "type": "text",
                "content": "is a random chain of characters for JWT encryption. Put anything in there with a least 10 characters."
            },
        ],

        "next_complexText_3": [
            {
                "type": "text",
                "content": "2. If you haven't set up sending/receiving emails, "
            },
            {
                "type": "underlinedText",
                "content": "do it fast",
                "link": "",
            },
        ],


        "next_complexText_4": [
            {
                "type": "text",
                "content": "3. In config.js file, add an from field to"
            },
            {
                "type": "highlightedText",
                "content": "mailgun.fromNoReply"
            },
            {
                "type": "text",
                "content": "(usually noreply@mail.yourdomain.com)"
            },
        ],

        "next_complexText_5": [
            {
                "type": "text",
                "content": "4. Add a "
            },
            {
                "type": "underlinedText",
                "content": "sending limit",
                "link":""
            },
            {
                "type": "text",
                "content": " to prevent abuse"
            },
        ],

        "next_highlightedNote_2": [
            {
                "type": "text",
                "content": "The mongoDB adapter saves new users in the database when they click the login link they receive by email. You have to"
            },
            {
                "type": "underlinedText",
                "content": "configure the database",
                "link": "",
            },
            {
                "type": "text",
                "content": "first"
            },
        ],

    },

    "supabase": {
        "title": "Features > Magic Links",
        "supabase_plainText_1": "Supabase handles Magic Links automatically for you.",

    },

}



fs.writeFile('data/magic-link.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been saved.');
    }
});
