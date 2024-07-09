const fs = require('fs');

const data = {
  "nextAuth": {
    "title": "Features > API call",

    "next_complexText_1": [
      {
        "type": "text",
        "content": "Any file named "
      },
      {
        "type": "highlightedText",
        "content": "/route.js"
      },
      {
        "type": "text",
        "content": "in the"
      },
      {
        "type": "highlightedText",
        "content": "/app/api"
      },
      {
        "type": "text",
        "content": "folder is an API endpoint. Use the helper"
      },
      {
        "type": "highlightedText",
        "content": "/libs/api.js"
      },
      {
        "type": "text",
        "content": "(axios instance with interceptors) to simplify API calls:"
      },
    ],

    "next_plainText_1": "Automatically display error messages",
    "next_plainText_2": "Redirect to login page upon error 401",


    "next_complexText_2": [
      {
        "type": "text",
        "content": "Add"
      },
      {
        "type": "highlightedText",
        "content": "/api"
      },
      {
        "type": "text",
        "content": "as a base URL:"
      },
      {
        "type": "lineThrouh",
        "content": "/api/user/posts"
      },
      {
        "type": "text",
        "content": "as a base URL:"
      },
      {
        "type": "text",
        "content": "→ /user/posts"
      },
    ],

    "next_api_subTitle": "Protected API calls",

    "next_plainText_3": "NextAuth automatically handles the authentication with cookies. Just make a normal API call on the front-end like this:",


    "next_codeSnippet_1": {
      "title": "/app/user-profile/page.js",
      "codes": `"use client"
          import { useState } from "react";
          import apiClient from "@/libs/api";

          const UserProfile = () => {
            const [isLoading, setIsLoading] = useState(false);

            const saveUser = async () => {
              setIsLoading(true);

              try {
                const { data } = await apiClient.post("/user", {
                  email: "new@gmail.com",
                });

                console.log(data);
              } catch (e) {
                console.error(e?.message);
              } finally {
                setIsLoading(false);
              }
            };

            return (
              <button className="btn btn-primary" onClick={() => saveUser()}>
                {isLoading && (
                  <span className="loading loading-spinner loading-sm"></span>
                )}
                Save
              </button>
            );
          };

          export default UserProfile;
            `
    },
    "next_complexText_3": [
      {
        "type": "text",
        "content": "In the backend, we get the session and we can use it to retrieve the user from the database. You have to"
      },
      {
        "type": "underlinedText",
        "content": "configure the database"
      },
      {
        "type": "text",
        "content": "first. The API file should look like this:"
      },
    ],

    "next_codeSnippet_2": {
      "title": "/app/api/user/route.js",
      "codes": `import { NextResponse } from "next/server";
        import { getServerSession } from "next-auth/next";
        import { authOptions } from "@/libs/next-auth";
        import connectMongo from "@/libs/mongoose";
        import User from "@/models/User";

        export async function POST(req) {
          const session = await getServerSession(authOptions);

          if (session) {
            await connectMongo();

            const { id } = session.user;

            const body = await req.json();

            if (!body.email) {
              return NextResponse.json({ error: "Email is required" }, { status: 400 });
            }

            try {
              const user = await User.findById(id);

              if (!user) {
                return NextResponse.json({ error: "User not found" }, { status: 404 });
              }

              user.email = body.email;
              await user.save();

              return NextResponse.json({ data: user }, { status: 200 });
            } catch (e) {
              console.error(e);
              return NextResponse.json(
                { error: "Something went wrong" },
                { status: 500 }
              );
            }
          } else {
            // Not Signed in
            NextResponse.json({ error: "Not signed in" }, { status: 401 });
          }
        }

            `
    },

  },

  "supabase": {
    "title": "Features > API call",

    "supabase_complexText_1": [
      {
        "type": "text",
        "content": "Any file named "
      },
      {
        "type": "highlightedText",
        "content": "/route.js"
      },
      {
        "type": "text",
        "content": "in the"
      },
      {
        "type": "highlightedText",
        "content": "/app/api"
      },
      {
        "type": "text",
        "content": "folder is an API endpoint. Use the helper"
      },
      {
        "type": "highlightedText",
        "content": "/libs/api.js"
      },
      {
        "type": "text",
        "content": "(axios instance with interceptors) to simplify API calls:"
      },
    ],

    "supabase_plainText_1": "Automatically display error messages",
    "supabase_plainText_2": "Redirect to login page upon error 401",


    "supabase_complexText_2": [
      {
        "type": "text",
        "content": "Add"
      },
      {
        "type": "highlightedText",
        "content": "/api"
      },
      {
        "type": "text",
        "content": "as a base URL:"
      },
      {
        "type": "lineThrouh",
        "content": "/api/user/posts"
      },
      {
        "type": "text",
        "content": "as a base URL:"
      },
      {
        "type": "text",
        "content": "→ /user/posts"
      },
    ],

    "supabase_api_subTitle": "Protected API calls",

    "supabase_plainText_3": "Supabase automatically handles the authentication with cookies. Just make a normal API call on the front-end like this:",


    "supabase_codeSnippet_1": {
      "title": "/app/user-profile/page.js",
      "codes": `"use client"

import { useState } from "react";
import apiClient from "@/libs/api";

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(false);

  const saveUser = async () => {
    setIsLoading(true);

    try {
      const { data } = await apiClient.post("/user", {
        email: "new@gmail.com",
      });

      console.log(data);
    } catch (e) {
      console.error(e?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button className="btn btn-primary" onClick={() => saveUser()}>
      {isLoading && (
        <span className="loading loading-spinner loading-sm"></span>
      )}
      Save
    </button>
  );
};

export default UserProfile;

            `
    },
    "supabase_complexText_3": [
      {
        "type": "text",
        "content": "In the backend, we get the session and we can use it to retrieve the user from the database. You have to"
      },
      {
        "type": "underlinedText",
        "content": "configure the database"
      },
      {
        "type": "text",
        "content": "first. The API file should look like this:"
      },
    ],

    "supabase_codeSnippet_2": {
      "title": "/app/api/user/route.js",
      "codes": `import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
        import { NextResponse } from "next/server";
        import { cookies } from "next/headers";

        export const dynamic = "force-dynamic";

        export async function POST(req) {
          const supabase = createRouteHandlerClient({ cookies });
          const { data } = await supabase.auth.getSession();
          const { session } = data;

          if (session) {
            const body = await req.json();

            if (!body.email) {
              return NextResponse.json({ error: "Email is required" }, { status: 400 });
            }

            try {
              // This call will fail if you haven't created a table named "users" in your database
              const { data } = await supabase
                .from("users")
                .insert({ email: body.email })
                .select();

              return NextResponse.json({ data }, { status: 200 });
            } catch (e) {
              console.error(e);
              return NextResponse.json(
                { error: "Something went wrong" },
                { status: 500 }
              );
            }
          } else {
            // Not Signed in
            NextResponse.json({ error: "Not signed in" }, { status: 401 });
          }
        }
            `
    },

  }

}



fs.writeFile('data/api-call.json', JSON.stringify(data, null, 2), (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File has been saved.');
  }
});
