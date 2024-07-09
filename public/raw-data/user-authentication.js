const fs = require('fs');

const data = {
    "nextAuth": {
        "title": "Tutorials > User authentication",
            "complexText_1": [
            {
                "type": "text",
                "content": "ShipFast uses"
            },
            {
                "type": "underlinedText",
                "content": "NextAuth"
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

        "complexText_2": [
            {
                "type": "text",
                "content": "There are 2 built-in ways to authenticate users with ShipFast:"
            },
            {
                "type": "underlinedText",
                "content": "Magic Links"
            },
            {
                "type": "text",
                "content": "&"
            },
            {
                "type": "underlinedText",
                "content": "Google Oauth."
            },
        ],

        "plainText_1": "Once you've completed at least one of the tutorials above, you can login users like this:",


        "codeSnippet_1": {
            "title": "ButtonSignin.js",
            "codes": `import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({ canonicalUrlRelative: "/" });

export default function Landing() {
  return (
    <>
      <main
        className="min-h-screen p-12 pb-24 text-center"
        data-theme="dark"
      >
        <section className="max-w-xl mx-auto space-y-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Food recipes you&apos;ll love 🥦
          </h1>

          <p className="text-lg leading-relaxed text-base-content/80">
            Our AI will generate recipes based on your preferences. New recipes
            will be added every week!
          </p>

          <img
            src="https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3484&q=80"
            alt="Vegetables"
            width={500}
            height={250}
            className="rounded-lg mx-auto"
          />

          <button className="btn btn-primary btn-wide">Get started</button>
        </section>
      </main>
    </>
  );
}`
        },

        "highlightedNote_1":[
            {
                "type": "text",
                "content": "The"
            },
            {
                "type": "highlightedText",
                "content": "callbackUrl"
            },
            {
                "type": "text",
                "content": "variable in the"
            },
            {
                "type": "highlightedText",
                "content": "config.js"
            },
            {
                "type": "text",
                "content": "file is used accross the app to redirect the user at the right place after a successfull sign-up/login. It's usually a private page like"
            },
            {
                "type":"highlightedText",
                "content":"/dashboard"
            }
        ],


    },

    "supabase":{
        "title": "Tutorials > User authentication",
           
        "complexText_1": [
            {
                "type": "text",
                "content": "There are 2 built-in ways to authenticate users with ShipFast:"
            },
            {
                "type": "underlinedText",
                "content": "Magic Links"
            },
            {
                "type": "text",
                "content": "&"
            },
            {
                "type": "underlinedText",
                "content": "Google Oauth."
            },
        ],

        "plainText_1": "Once you've completed at least one of the tutorials above, you can login users like this:",


        "codeSnippet_1": {
            "title": "ButtonSignin.js",
            "codes": `"use client";

import Link from "next/link";

const SigninButton = () => {
  return (
    <Link className="btn btn-primary" href="/signin">
      Login
    </Link>
  );
};

export default SigninButton;
`
        },

        "highlightedNote_1":[
            {
                "type": "text",
                "content": "The"
            },
            {
                "type": "highlightedText",
                "content": "callbackUrl"
            },
            {
                "type": "text",
                "content": "variable in the"
            },
            {
                "type": "highlightedText",
                "content": "config.js"
            },
            {
                "type": "text",
                "content": "file is used accross the app to redirect the user at the right place after a successfull sign-up/login. It's usually a private page like"
            },
            {
                "type":"highlightedText",
                "content":"/dashboard"
            }
        ],


    },

}



fs.writeFile('data/user-authentication.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been saved.');
    }
});
