const fs = require('fs');

const data = {
    "nextAuth": {
        "title": "Get started",
        "shipfast_subTitle": "Hey maker, welcome to ShipFast 👋",
        "shipfast_plainText": "Here's a quick overview of the boilerplate. Follow along to get your app up and running.",
        "shipfast_complexText": [
            {
                "type": "text",
                "content": "Once you're done, start with "
            },
            {
                "type": "underlinedText",
                "content": "this tutorial"
            },
            {
                "type": "text",
                "content": "to launch your project in 5 minutes. Let's build that startup, FAST ⚡️"
            },
        ],

        "shipfast_highlightedNote": [
            {
                "type": "text",
                "content": "You're browsing the /app router documentation. To use the /pages router,"
            },
            {
                "type": "underlinedText",
                "content": "see here"
            },
        ],

        "localServer_subTitle": "Start a local server",
        "localServer_complexTex_1": [
            {
                "type": "text",
                "content": "1. In your terminal, run the following commands "
            },
            {
                "type": "white_bold",
                "content": "one-by-one:"
            },
        ],
        "localServer_codeSnippet_1": {
            "title": "terminal",
            "codes": `git clone https://github.com/Marc-Lou-Org/ship-fast.git [YOUR_APP_NAME]
cd [YOUR_APP_NAME]
npm install
git remote remove origin
npm run dev`,
"codes_ts": `
git clone https://github.com/Marc-Lou-Org/ship-fast-ts.git [YOUR_APP_NAME]
cd [YOUR_APP_NAME]
npm install
git remote remove origin
npm run dev
`
        },

        "localServer_highlightedNote_1": [
            {
                "type": "text",
                "content": "ShipFast requires Node 18.17 or greater. Type"
            },
            {
                "type": "highlightedText",
                "content": "node -v"
            },
            {
                "type": "text",
                "content": " in your terminal to check version."
            },
        ],

        "localServer_complexText_2": [
            {
                "type": "text",
                "content": "2. Rename"
            },
            {
                "type": "highlightedText",
                "content": ".env.example"
            },
            {
                "type": "text",
                "content": "to"
            },
            {
                "type": "highlightedText",
                "content": ".env.local"
            },
        ],
        "localServer_codeSnippet_2": {
            "title": "terminal",
            "codes": `mv .env.example .env.local `
        },

        "localServer_complexText_3": [
            {
                "type": "text",
                "content": "3. Open"
            },
            {
                "type": "highlightedText",
                "content": "http://localhost:3000"
            },
            {
                "type": "text",
                "content": "to see your site. And voila!"
            },
        ],
        "localServer_highlightedNote_3": [
            {
                "type": "text",
                "content": "You will see errors in the console but nothing important."
            },
        ],

        "projectStructure_subTitle": "NextJS project structure",
        "projectStructure_items": [
            [
                {
                    "type": "white_bold",
                    "content": "/app"
                },
                {
                    "type": "text",
                    "content": "→ Pages (1 folder + page.js = 1 page)"
                },
            ],
            [
                {
                    "type": "white_bold",
                    "content": "/app/api"
                },
                {
                    "type": "text",
                    "content": "API calls (1 file = 1 API endpoint)"
                },
            ],
            [
                {
                    "type": "white_bold",
                    "content": "/components"
                },
                {
                    "type": "text",
                    "content": "→ React components"
                },
            ],
            [
                {
                    "type": "white_bold",
                    "content": "/libs"
                },
                {
                    "type": "text",
                    "content": "→ Libraries helper functions (Stripe & Mailgun, auth etc.)"
                },
            ],
            [{
                "type": "white_bold",
                "content": "/models"
            }, {
                "type": "text",
                "content": " → Database models"
            }]
        ],

        "configjs_subTitle": "configFile.js",
        "configjs_complexTex": [
            {
                "type": "text",
                "content": "It is where you configure your app. Each key is documented to know how and why it's used. Have a thorough look at it:"
            },
            {
                "type": "white_bold",
                "content": "it is the backbone of the app."
            },
        ],

        "env_subTitle": ".env file",
        "env_complexTex": [
            {
                "type": "text",
                "content": "Rename the"
            },
            {
                "type": "highlightedText",
                "content": ".env.example"
            },
            {
                "type": "text",
                "content": "file to"
            },
            {
                "type": "highlightedText",
                "content": "env.local"
            },
            {
                "type": "text",
                "content": ". Change"
            },
            {
                "type": "highlightedText",
                "content": "NEXTAUTH_SECRET"
            },
            {
                "type": "text",
                "content": " to anything else. The file content should look like this:"
            },
        ],

        "env_codeSnippet": {
            "title": "env.local",
            "codes": `NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=uhf3874y7fh387u87653947u4rh9394hf
GOOGLE_ID=
GOOGLE_SECRET=
MONGODB_URI=
EMAIL_SERVER=
MAILGUN_API_KEY=
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=`},

        "goNext_complexTex": [
            {
                "type": "text",
                "content": "Now go ahead and follow"
            },
            {
                "type": "underlinedText",
                "content": "this tutorial"
            },
            {
                "type": "text",
                "content": "to get your startup live within 5 minutes!"
            },
        ],

    },

    "supabase": {
        "title": "Get started",
        "shipfast_subTitle": "Hey maker, welcome to ShipFast 👋",
        "shipfast_plainText": "Here's a quick overview of the boilerplate. Follow along to get your app up and running.",
        "shipfast_complexText": [
            {
                "type": "text",
                "content": "Once you're done, start with "
            },
            {
                "type": "underlinedText",
                "content": "this tutorial"
            },
            {
                "type": "text",
                "content": "to launch your project in 5 minutes. Let's build that startup, FAST ⚡️"
            },
        ],

        "shipfast_highlightedNote": [
            {
                "type": "text",
                "content": "You're browsing the /app router documentation. To use the /pages router,"
            },
            {
                "type": "underlinedText",
                "content": "see here"
            },
        ],

        "localServer_subTitle": "Start a local server",
        "localServer_complexTex_1": [
            {
                "type": "text",
                "content": "1. In your terminal, run the following commands "
            },
            {
                "type": "white_bold",
                "content": "one-by-one:"
            },
        ],
        "localServer_codeSnippet_1": {
            "title": "terminal",
            "codes": `git clone https://github.com/Marc-Lou-Org/ship-fast.git [YOUR_APP_NAME]
cd [YOUR_APP_NAME]
git checkout supabase
npm install
git remote remove origin
npm run dev`,
            "codes_ts": `
git clone https://github.com/Marc-Lou-Org/ship-fast-ts.git [YOUR_APP_NAME]
cd [YOUR_APP_NAME]
git checkout supabase
npm install
git remote remove origin
npm run dev
`
        },

        "localServer_highlightedNote_1": [
            {
                "type": "text",
                "content": "ShipFast requires Node 18.17 or greater. Type"
            },
            {
                "type": "highlightedText",
                "content": "node -v"
            },
            {
                "type": "text",
                "content": " in your terminal to check version."
            },
        ],

        "localServer_highlightedNote_2": [
            {
                "type": "text",
                "content": "The main branch is used for the default NextAuth/MongoDB features. The supabase branch is used for the Supabase/PostgreSQL features."
            },
        ],

        "localServer_complexText_2": [
            {
                "type": "text",
                "content": "2. Rename"
            },
            {
                "type": "highlightedText",
                "content": ".env.example"
            },
            {
                "type": "text",
                "content": "to"
            },
            {
                "type": "highlightedText",
                "content": ".env.local"
            },
        ],
        "localServer_codeSnippet_2": {
            "title": "terminal",
            "codes": `mv .env.example .env.local`
        },

        "localServer_complexText_3": [
            {
                "type": "text",
                "content": "3. Go to the Supabase dashboard, create a new project and paste your 2 Supabase environment variables"
            },
            {
                "type": "highlightedText",
                "content": "NEXT_PUBLIC_SUPABASE_URL"
            },
            {
                "type": "highlightedText",
                "content": "NEXT_PUBLIC_SUPABASE_ANON_KEY"
            },
            {
                "type": "text",
                "content": "in"
            },
            {
                "type": "highlightedText",
                "content": ".env.local"
            },
        ],

        "localServer_complexText_4": [
            {
                "type": "text",
                "content": "4. Open"
            },
            {
                "type": "highlightedText",
                "content": "http://localhost:3000"
            },
            {
                "type": "text",
                "content": "to see your site. And voila!"
            },
        ],
        "localServer_highlightedNote_3": [
            {
                "type": "text",
                "content": "You will see errors in the console but nothing important."
            },
        ],

        "projectStructure_subTitle": "NextJS project structure",
        "projectStructure_items": [
            [
                {
                    "type": "white_bold",
                    "content": "/app"
                },
                {
                    "type": "text",
                    "content": "→ Pages (1 folder + page.js = 1 page)"
                },
            ],
            [
                {
                    "type": "white_bold",
                    "content": "/app/api"
                },
                {
                    "type": "text",
                    "content": "API calls (1 file = 1 API endpoint)"
                },
            ],
            [
                {
                    "type": "white_bold",
                    "content": "/components"
                },
                {
                    "type": "text",
                    "content": "→ React components"
                },
            ],
            [
                {
                    "type": "white_bold",
                    "content": "/libs"
                },
                {
                    "type": "text",
                    "content": "→ Libraries helper functions (Stripe & Mailgun, auth etc.)"
                },
            ],
        ],

        "configjs_subTitle": "configFile.js",
        "configjs_complexTex": [
            {
                "type": "text",
                "content": "It is where you configure your app. Each key is documented to know how and why it's used. Have a thorough look at it:"
            },
            {
                "type": "white_bold",
                "content": "it is the backbone of the app."
            },
        ],

        "env_subTitle": ".env file",
        "env_complexTex": [
            {
                "type": "text",
                "content": "Rename the"
            },
            {
                "type": "highlightedText",
                "content": ".env.example"
            },
            {
                "type": "text",
                "content": "file to"
            },
            {
                "type": "highlightedText",
                "content": "env.local"
            },
            {
                "type": "text",
                "content": ". Change"
            },
            {
                "type": "highlightedText",
                "content": "NEXTAUTH_SECRET"
            },
            {
                "type": "text",
                "content": " to anything else. The file content should look like this:"
            },
        ],

        "env_codeSnippet": {
            "title": "env.local",
            "codes": `NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
EMAIL_SERVER=
MAILGUN_API_KEY=
STRIPE_PUBLIC_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=`,
        },

        "goNext_complexTex": [
            {
                "type": "text",
                "content": "Now go ahead and follow"
            },
            {
                "type": "underlinedText",
                "content": "this tutorial"
            },
            {
                "type": "text",
                "content": "to get your startup live within 5 minutes!"
            },
        ],
    }
}



fs.writeFile('data/docs.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been saved.');
    }
});





// "content": [
//             {
//                 "type": "subTitle",
//                 "content": "Start a local server"
//             },
//             {
//                 "type": "image",
//                 "src": "https://example.com/react-logo.png",
//                 "alt": "React Logo"
//             },
//             {
//                 "type": "text",
//                 "content": "Here's a quick overview of the boilerplate. Follow along to get your app up and running."
//             },
//             {
//                 "type": "complex-text",
//                 "content": [
//                     {
//                         "type": "text",
//                         "content": "Once you're done, start with "
//                     },
//                     {
//                         "type": "underlinedText",
//                         "content": "this tutorial"
//                     },
//                     {
//                         "type": "text",
//                         "content": "to launch your project in 5 minutes. Let's build that startup, FAST ⚡️"
//                     },
//                 ],
//             },
//             {
//                 "type": "highlighted-note",
//                 "content": [
//                     {
//                         "type": "text",
//                         "content": "You're browsing the /app router documentation. To use the /pages router,"
//                     },
//                     {
//                         "type": "underlinedText",
//                         "content": "see here"
//                     },
//                 ],
//             },
//             {
//                 "type": "subTitle",
//                 "content": "Let's dive into the core concepts of React."
//             },
//             {
//                 "type": "underlinedText",
//                 "content": "Let's dive into the core concepts of React."
//             },
//         ]