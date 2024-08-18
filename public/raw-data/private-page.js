const fs = require('fs');

const data = {
    "nextAuth": {
        "title": "Tutorials > Private page",

        "next_complexText_1": [
            {
                "type": "text",
                "content": "Once "
            },
            {
                "type": "underlinedText",
                "content": "user is authentified,"
            },
            {
                "type": "text",
                "content": "you can build private routes like a user dashboard, account, etc."
            },
        ],

        "next_highlightedNote_1": [
            {
                "type": "text",
                "content": "If you want to make protected API calls, follow "
            },
            {
                "type": "underlinedText",
                "content": "this tutorial."
            },
        ],

        "next_complexText_2": [
            {
                "type": "text",
                "content": "The "
            },
            {
                "type": "highlightedText",
                "content": "/layout.js"
            },
            {
                "type": "text",
                "content": "in"
            },
            {
                "type": "highlightedText",
                "content": "/dashboard"
            },
            {
                "type": "text",
                "content": "ensures any pages & subpages are private. If the user is not authenticated, he'll be redirected to the login page (see"
            },
            {
                "type": "highlightedText",
                "content": "auth"
            },
            {
                "type": "text",
                "content": "in"
            },
            {
                "type": "text",
                "content": "config.js"
            }
        ],

        "next_plainText_1": "Here's an example of a simple user dashboard showing private user data in a server component",


        "next_codeSnippet_1": {
            "title": "/app/dashboard/page.js",
            "codes": `import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/next-auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

export default async function Dashboard() {
  await connectMongo();
  const session = await getServerSession(authOptions);
  const user = await User.findById(session.user.id);

  return (
    <>
      <main className="min-h-screen p-8 pb-24">
        <section className="max-w-xl mx-auto space-y-8">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            User Dashboard
          </h1>
          <p>Welcome {user.name} 👋</p>
          <p>Your email is {user.email}</p>
        </section>
      </main>
    </>
  );
}`
},

    },

    "supabase": {
        "title": "Tutorials > Private page",

        "supabase_complexText_1": [
            {
                "type": "text",
                "content": "Once "
            },
            {
                "type": "underlinedText",
                "content": "user is authentified,"
            },
            {
                "type": "text",
                "content": "you can build private routes like a user dashboard, account, etc."
            },
        ],

        "supabase_highlightedNote_1": [
            {
                "type": "text",
                "content": "If you want to make protected API calls, follow "
            },
            {
                "type": "underlinedText",
                "content": "this tutorial."
            },
        ],

        "supabase_complexText_2": [
            {
                "type": "text",
                "content": "The "
            },
            {
                "type": "highlightedText",
                "content": "/layout.js"
            },
            {
                "type": "text",
                "content": "in"
            },
            {
                "type": "highlightedText",
                "content": "/dashboard"
            },
            {
                "type": "text",
                "content": "ensures any pages & subpages are private. If the user is not authenticated, he'll be redirected to the login page (see"
            },
            {
                "type": "highlightedText",
                "content": "auth"
            },
            {
                "type": "text",
                "content": "in"
            },
            {
                "type": "text",
                "content": "config.js"
            }
        ],

        "supabase_plainText_1": "Here's an example of a simple user dashboard showing private user data in a server component",


        "supabase_codeSnippet_1": {
            "title": "/app/dashboard/page.js",
            "codes": `import { createClient } from "@/libs/supabase/server";

export const dynamic = "force-dynamic";

// This is a private page: It's protected by the layout.js component which ensures the user is authenticated.
// It's a server compoment which means you can fetch data (like the user profile) before the page is rendered.
export default async function Dashboard() {
  const supabase = createClient();
  const { data } = await supabase.from("todos").select();

  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-4xl font-extrabold">Private Page</h1>

        {/* You will only see something if you create an SQL table called todos with at least 1 row */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </section>
    </main>
  );
}
`
        },

    },

}



fs.writeFile('data/private-page.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been saved.');
    }
});
