const fs = require('fs');

const data = {
    "nextAuth": {
        "title": "Features > Google Oauth",

        "next_complexText_1": [
            {
                "type": "text",
                "content": "ShipFast uses "
            },
            {
                "type": "underlinedText",
                "content": "nextAuth"
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
            "codes": `NEXTAUTH_URL=http://localhost:3000
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
                "content": "2. Create a new project on "
            },
            {
                "type": "underlinedText",
                "content": "Google Cloud",
                "link": "",
            },
        ],


        "next_plainText_1": "3. Go to APIs & Services then Credentials",
        "next_plainText_2": "4. Click [Configure Consent Screen]",
        "next_plainText_3": `5. Fill info. Use the ChatGPT prompts in pages /tos & /privacy-policy to generate yours automatically.
        Add userinfo.email & userinfo.profile to scope.
        Add yourself as a test user.
        Submit.`,

        "next_plainText_4": "6. Go to Credentials and click [+ Create Credentials] then [Oauth Client ID]",

        "next_complexText_4": [
            {
                "type": "text",
                "content": "7. Choose [Web Application]. Add"
            },
            {
                "type": "highlightedText",
                "content": "http://localhost:3000"
            },
            {
                "type": "text",
                "content": "and"
            },
            {
                "type": "highlightedText",
                "content": "https://your-site.com"
            },
            {
                "type": "text",
                "content": "to Authorized JavaScript origins.."
            },

            {
                "type": "text",
                "content": "Add"
            },
            {
                "type": "highlightedText",
                "content": "http://localhost:3000/api/auth/callback/google"
            },
            {
                "type": "text",
                "content": "and"
            },
            {
                "type": "highlightedText",
                "content": "https://your-site.com/api/auth/callback/google"
            },
            {
                "type": "text",
                "content": "to Authorized redirect URIs (if you're using a subdomain like www, make sure to add it too). Click [Create]"
            },
        ],

        "next_complexText_5": [
            {
                "type": "text",
                "content": "8. Copy paste the Client ID in"
            },
            {
                "type": "highlightedText",
                "content": "GOOGLE_ID",
            },
            {
                "type": "text",
                "content": "and Client Secret in"
            },
            {
                "type": "highlightedText",
                "content": "GOOGLE_SECRET",
            },
            {
                "type": "text",
                "content": "to"
            },
            {
                "type": "highlightedText",
                "content": ".env.local.",
            },
        ],

        "next_complexText_6": [
            {
                "type": "text",
                "content": "9. Go to [Oauth Consent Screen] and click [Publish App] then submit for verification."
            },
            {
                "type": "blockText",
                "content": "Click [Prepare for verification] and fill the missing information.",
            },
            {
                "type": "text",
                "content": "Google will email you and you will"
            },
            {
                "type": "white_bold",
                "content": "have to reply to start the process.",
            },
            {
                "type": "text",
                "content": "You'll need to have your domain verified with"
            },
            {
                "type": "underlinedText",
                "content": "Google Search Console.",
                "link": ""
            },
            {
                "type": "text",
                "content": "You can go ahead and do that now."
            },
            {
                "type": "blockText",
                "content": "You can already login with Google on localhost. On production, it will work too but show a warning until you're verified (takes a few days)."
            }
        ],

        "next_highlightedNote_2": [
            {
                "type": "text",
                "content": "The mongoDB adapter saves new users in the database when they successfully log in with Google. You have to"
            },
            {
                "type": "underlinedText",
                "content": " configure the database",
                "link": "",
            },
            {
                "type": "text",
                "content": "first"
            },
        ],

    },

    "supabase": {
        "title": "Features > Google Oauth",

        "google_subTitle": "setup",

        "supabase_complexText_1": [
            {
                "type": "text",
                "content": "1. Create a new project on "
            },
            {
                "type": "underlinedText",
                "content": "Google Cloud",
                "link": "",
            },
        ],


        "supabase_plainText_1": "2. Go to APIs & Services then Credentials",
        "supabase_plainText_2": "3. Click [Configure Consent Screen]",
        "supabase_plainText_3": `4. Fill info. Use the ChatGPT prompts in pages /tos & /privacy-policy to generate yours automatically.
        Add userinfo.email & userinfo.profile to scope.
        Add yourself as a test user.
        Submit.`,

        "supabase_plainText_4": "5. Go to Credentials and click [+ Create Credentials] then [Oauth Client ID]",

        "supabase_complexText_2": [
            {
                "type": "text",
                "content": "6. Choose [Web Application]. Add"
            },
            {
                "type": "highlightedText",
                "content": "http://localhost:3000"
            },
            {
                "type": "text",
                "content": "and"
            },
            {
                "type": "highlightedText",
                "content": "https://your-project.supabase.co"
            },
            {
                "type": "text",
                "content": "to Authorized JavaScript origins.."
            },

            {
                "type": "text",
                "content": "Add"
            },
            {
                "type": "highlightedText",
                "content": "https://your-project.supabase.co/auth/v1/callback"
            },
            {
                "type": "text",
                "content": "to Authorized redirect URIs (if you're using a subdomain like www, make sure to add it too).Click [Create]"
            },
        ],

        "supabase_complexText_3": [
            {
                "type": "text",
                "content": "7. Copy paste the Client ID in"
            },
            {
                "type": "highlightedText",
                "content": "GOOGLE_ID",
            },
            {
                "type": "text",
                "content": "and Client Secret in"
            },
            {
                "type": "highlightedText",
                "content": "GOOGLE_SECRET",
            },
            {
                "type": "text",
                "content": "to your Supabase dashboard (Authentication > Providers > Google)"
            },
        ],

        "supabase_complexText_4": [
            {
                "type": "text",
                "content": "8. In Supabase, go to [Authentication] then [URL Configuration] and add"
            },
            {
                "type": "highlightedText",
                "content": "http://localhost:3000",
            },
            {
                "type": "text",
                "content": "to [Site URL]. Then add"
            },
            {
                "type": "highlightedText",
                "content": "http://localhost:3000/*",
            },
            {
                "type": "text",
                "content": "to [Redirect URLs]."
            },
        ],

        "supabase_complexText_5": [
            {
                "type": "text",
                "content": "9. Go to [Oauth Consent Screen] and click [Publish App] then submit for verification."
            },
            {
                "type": "blockText",
                "content": "Click [Prepare for verification] and fill the missing information.",
            },
            {
                "type": "text",
                "content": "Google will email you and you will"
            },
            {
                "type": "white_bold",
                "content": "have to reply to start the process.",
            },
            {
                "type": "text",
                "content": "You'll need to have your domain verified with"
            },
            {
                "type": "underlinedText",
                "content": "Google Search Console.",
                "link": ""
            },
            {
                "type": "text",
                "content": "You can go ahead and do that now."
            },
            {
                "type": "blockText",
                "content": "You can already login with Google on localhost. On production, it will work too but show a warning until you're verified (takes a few days)."
            }
        ],

        "supabase_highlightedNote_2": [
            {
                "type": "white_bold",
                "content": "Going to production?"
            },
            {
                "type": "blockText",
                "content": "In Supabase dashboard, go to [Authentication] then [URL Configuration] and",
            },
            {
                "type": "text",
                "content": "add"
            },
            {
                "type": "highlightedText",
                "content": "https://your-domain.com"
            },
            {
                "type": "text",
                "content": " to [Site URL]. Then add"
            },
            {
                "type": "highlightedText",
                "content": "https://your-domain.com/*"
            },
            {
                "type": "text",
                "content": "to [Redirect URLs]."
            },
        ],

    },

}



fs.writeFile('data/google-oauth.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been saved.');
    }
});
