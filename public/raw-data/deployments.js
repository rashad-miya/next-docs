const fs = require('fs');

const data = {
    "nextAuth": {
        "title": "Deployment",
        "next_plainText_1": "1. Commit your code and push to a private repo on GitHub.",

        "next_complexText_1": [
            {
                "type": "text",
                "content": "2. Use your favorite hosting provider (Vercel for me) to create a new project based on the GitHub repo. You can deploy your app anywhere NextJS is supported:"
            },
            {
                "type": "link",
                "content": "Vercel",
                "link":""
            },
            {
                "type": "link",
                "content": "Netlify",
                "link":""
            },
            {
                "type": "link",
                "content": "Render",
                "link":""
            },
            {
                "type": "text",
                "content": "etc."
            },
        ],

        "next_complexText_2": [
            {
                "type": "text",
                "content": "3. Set the right .env file on your deployement as the"
            },
            {
                "type": "highlightedText",
                "content": ".env.local"
            },
            {
                "type": "text",
                "content": "is not committed."
            },
        ],

       "next_highlightedNote_1": [
            {
                "type": "text",
                "content": "Make sure"
            },
            {
                "type": "highlightedText",
                "content": "NEXTAUTH_URL"
            },
            {
                "type": "text",
                "content": " matches your domain name for auth features to work. Change"
            },
            {
                "type": "highlightedText",
                "content": "NEXTAUTH_SECRET"
            },
            {
                "type": "text",
                "content": "to anything else."
            },
        ],

        "next_complexText_3": [
            {
                "type": "text",
                "content": "4. Using Stripe? Follow the"
            },
            {
                "type": "link",
                "content": "production checklist",
                "link":""
            },
            {
                "type": "text",
                "content": "(scroll down on the page)"
            },
        ],

        "comments": {
            "image": "https://shipfa.st/_next/image?url=%2Fmarc.png&w=128&q=75",
            "commentHeader": [
                {
                    "type": "underlinedText",
                    "content": "Join the Leaderboards "
                },
                {
                    "type": "text",
                    "content": "to feature your app and stay motivated! You can also"
                },
                {
                    "type": "underlinedText",
                    "content": "become an affiliate "
                },
                {
                    "type": "text",
                    "content": "and earn 30% per sale."
                },
            ],
            "commentBody": "Congrats on crushing the first steps, legend! ",
            "commentBy": "_Marc"
        },

        "redirect_image_1": {
            "image_url": "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findiepage-netflix.54d5a3ad.png&w=1920&q=75",
            "link": "https://indiepa.ge/?ref=shipfast_deploy",
            "headText": "Showcase your new startup and get more customers",
            "text": "Join 3000+ solopreneurs on Indie Page"
        },
        "redirect_image_2": {
            "image_url": "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaunchviral.fd3b3577.png&w=1920&q=75",
            "link": "https://launchvir.al/?ref=shipfast_deploy",
            "headText": "Make your startup launch go viral",
            "text": "2-hour course to create catchy videos in a day with your phone."
        }


    },

    "supabase": {
        "title": "Deployment",
        "supabase_plainText_1": "1. Commit your code, switch to the main git branch and merge supabase:",

        "supabase_codeSnippet_1": {
            "title": "Terminal",
            "codes": `
git add .
git commit –m "Time to ship"
git checkout main
git merge supabase
            `
        },

        "supabase_complexText_1": [
            {
                "type": "text",
                "content": "2. Use your favorite hosting provider (Vercel for me) to create a new project based on the GitHub repo. You can deploy your app anywhere NextJS is supported:"
            },
            {
                "type": "link",
                "content": "Vercel",
                "link":""
            },
            {
                "type": "link",
                "content": "Netlify",
                "link":""
            },
            {
                "type": "link",
                "content": "Render",
                "link":""
            },
            {
                "type": "text",
                "content": "etc."
            },
        ],

        "supabase_complexText_2": [
            {
                "type": "text",
                "content": "3. Set the right .env file on your deployement as the"
            },
            {
                "type": "highlightedText",
                "content": ".env.local"
            },
            {
                "type": "text",
                "content": "is not committed."
            },
        ],

        "supabase_complexText_3": [
            {
                "type": "text",
                "content": "4. Using Google Oauth? Follow the"
            },
            {
                "type": "link",
                "content": "production checklist",
                "link":""
            },
            {
                "type": "text",
                "content": "(scroll down on the page)"
            },
        ],

        "supabase_complexText_4": [
            {
                "type": "text",
                "content": "5. Using Stripe? Follow the"
            },
            {
                "type": "link",
                "content": "production checklist",
                "link":""
            },
            {
                "type": "text",
                "content": "(scroll down on the page)"
            },
        ],

        "comments": {
            "image": "https://shipfa.st/_next/image?url=%2Fmarc.png&w=128&q=75",
            "commentHeader": [
                {
                    "type": "underlinedText",
                    "content": "Join the Leaderboards "
                },
                {
                    "type": "text",
                    "content": "to feature your app and stay motivated! You can also"
                },
                {
                    "type": "underlinedText",
                    "content": "become an affiliate "
                },
                {
                    "type": "text",
                    "content": "and earn 30% per sale."
                },
            ],
            "commentBody": "Congrats on crushing the first steps, legend! ",
            "commentBy": "_Marc"
        },

        "redirect_image_1": {
            "image_url": "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Findiepage-netflix.54d5a3ad.png&w=1920&q=75",
            "link": "https://indiepa.ge/?ref=shipfast_deploy",
            "headText": "Showcase your new startup and get more customers",
            "text": "Join 3000+ solopreneurs on Indie Page"
        },
        "redirect_image_2": {
            "image_url": "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flaunchviral.fd3b3577.png&w=1920&q=75",
            "link": "https://launchvir.al/?ref=shipfast_deploy",
            "headText": "Make your startup launch go viral",
            "text": "2-hour course to create catchy videos in a day with your phone."
        }


    },

}



fs.writeFile('data/deployments.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been saved.');
    }
});
