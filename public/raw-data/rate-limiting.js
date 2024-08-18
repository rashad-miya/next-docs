const fs = require('fs');

const data = {
    "nextAuth": {
        "title": "Security > Rate Limiting (API Routes)",

        "next_plainText_1": "It is recommended to protect your API routes from abuse by rate limiting them. This tutorial will show you how to rate limit your API routes using Upstash.",

        "next_complexText_1": [
            {
                "type": "text",
                "content": "We will be protecting API routes"
            },
            {
                "type": "highlightedText",
                "content": "/api/one",
            },
            {
                "type": "text",
                "content": "and"
            },
            {
                "type": "highlightedText",
                "content": "/api/two"
            },
            {
                "type": "text",
                "content": ". You can replace them with your own API endpoints."
            },
        ],


        "next_setup_subTitle": "setup",

        "next_complexText_2": [
            {
                "type": "text",
                "content": "1. Sign up on"
            },
            {
                "type": "link",
                "content": "Upstash",
                "link": ""
            },
        ],

        "next_complexText_3": [
            {
                "type": "text",
                "content": "2. Create a new "
            },
            {
                "type": "link",
                "content": "Redis database",
                "link": ""
            },
        ],

        "next_complexText_3": [
            {
                "type": "text",
                "content": "3. Add the"
            },
            {
                "type": "highlightedText",
                "content": "UPSTASH_REDIS_REST_URL",
            },
            {
                "type": "text",
                "content": "and"
            },

            {
                "type": "highlightedText",
                "content": "UPSTASH_REDIS_REST_TOKEN"
            },
            {
                "type": "text",
                "content": "to your"
            },

            {
                "type": "highlightedText",
                "content": ".env.local"
            },
            {
                "type": "text",
                "content": "file"
            },
        ],

        "next_plainText_2": "4. Install the packages:",

        "next_codeSnippet_1": {
            "title": "terminal",
            "codes": `npm install @upstash/redis @upstash/ratelimit`
        },

        "next_complexText_4": [
            {
                "type": "text",
                "content": "5. Create a new"
            },
            {
                "type": "highlightedText",
                "content": "middleware.js",
            },
            {
                "type": "text",
                "content": "file in the root directory (the same level as the "
            },

            {
                "type": "highlightedText",
                "content": "/app"
            },
            {
                "type": "text",
                "content": "folder) and add the following content:"
            },
        ],

        "next_codeSnippet_2": {
            "title": "/middleware.js",
            "codes": `import { NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(5, "60 s"),
});

export default async function middleware(request) {
  const ip = request.ip ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  return success
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/blocked", request.url));
}

export const config = {
  matcher: ["/api/one", "/api/two"],
};

            `,
            "codes_ts": `
import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(5, "60 s"),
});

export default async function middleware(request: NextRequest) {
  const ip = request.ip ?? "127.0.0.1";
  const { success } = await ratelimit.limit(ip);

  return success
    ? NextResponse.next()
    : NextResponse.redirect(new URL("/blocked", request.url));
}

export const config = {
  matcher: ["/api/one", "/api/two"],
};

`
        },

        "next_highlightedNote_1": [
            {
                "type": "text",
                "content": "We are rate limiting the user to 5 requests per minute based on their IP using the sliding window algorithm. You can refer to the"
            },
            {
                "type": "underlinedText",
                "content": " Upstash ratelimit SDK documentation"
            },
            {
                "type": "text",
                "content": "for more information on customizing it."
            },
        ],

        "next_complexText_5": [
            {
                "type": "text",
                "content": "6. Create a new"
            },
            {
                "type": "highlightedText",
                "content": "/app/blocked/page.js",
            },
            {
                "type": "text",
                "content": "file. This is the page the user will be redirected to when they hit the rate limit. Add the following content:"
            },
        ],

        "next_codeSnippet_3": {
            "title": "/app/blocked/page.js",
            "codes": `"use client";

import config from "@/config";
import { signIn } from "next-auth/react";
import React from "react";
import Link from "next/link";

const Blocked = () => {
return (
  <main className="relative bg-neutral text-neutral-content h-screen w-full flex flex-col justify-center gap-8 items-center p-10">
    <h1 className="text-xl md:text-2xl font-medium">
      Hm, Access Blocked
    </h1>
    <p>Try again in 1 minute</p>

    <div>
      <button
        onClick={() =>
          signIn(undefined, {
            callbackUrl: config.auth.callbackUrl,
          })
        }
        className="link"
      >
        Login
      </button>{" "}
      or{" "}
      <Link className="link" href="/">
        Home
      </Link>
    </div>
  </main>
);
};

export default Blocked;
            `
        },

        "next_complexText_6": [
            {
                "type": "text",
                "content": "7. That's it! You have successfully rate limited the API routes. Now, when a user hits the rate limit, they will be redirected to the"
            },
            {
                "type": "highlightedText",
                "content": "/blocked",
            },
            {
                "type": "text",
                "content": "page.",
            },
        ],
    },

    "supabase": {
        "title": "Security > Rate Limiting (API Routes)",

        "supabase_plainText_1": "It is recommended to protect your API routes from abuse by rate limiting them. This tutorial will show you how to rate limit your API routes using Upstash.",

        "supabase_complexText_1": [
            {
                "type": "text",
                "content": "We will be protecting API routes"
            },
            {
                "type": "highlightedText",
                "content": "/api/one",
            },
            {
                "type": "text",
                "content": "and"
            },
            {
                "type": "highlightedText",
                "content": "/api/two"
            },
            {
                "type": "text",
                "content": ". You can replace them with your own API endpoints."
            },
        ],


        "supabase_setup_subTitle": "setup",

        "supabase_complexText_2": [
            {
                "type": "text",
                "content": "1. Sign up on"
            },
            {
                "type": "link",
                "content": "Upstash",
                "link": ""
            },
        ],

        "supabase_complexText_3": [
            {
                "type": "text",
                "content": "2. Create a new "
            },
            {
                "type": "link",
                "content": "Redis database",
                "link": ""
            },
        ],

        "supabase_complexText_4": [
            {
                "type": "text",
                "content": "3. Add the"
            },
            {
                "type": "highlightedText",
                "content": "UPSTASH_REDIS_REST_URL",
            },
            {
                "type": "text",
                "content": "and"
            },

            {
                "type": "highlightedText",
                "content": "UPSTASH_REDIS_REST_TOKEN"
            },
            {
                "type": "text",
                "content": "to your"
            },

            {
                "type": "highlightedText",
                "content": ".env.local"
            },
            {
                "type": "text",
                "content": "file"
            },
        ],

        "supabase_plainText_2": "4. Install the packages:",

        "supabase_codeSnippet_1": {
            "title": "terminal",
            "codes": `npm install @upstash/redis @upstash/ratelimit`
        },

        "supabase_complexText_5": [
            {
                "type": "text",
                "content": "5. Update the"
            },
            {
                "type": "highlightedText",
                "content": "middleware.js",
            },
            {
                "type": "text",
                "content": "file with the following content:"
            },
        ],

        "supabase_codeSnippet_2": {
            "title": "/middleware.js",
            "codes": `import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(5, "60 s"),
});

const urlsToRateLimit = ["/api/one", "/api/two"];

// The middleware is used to refresh the user's session before loading Server Component routes
export default async function middleware(req) {
  if (urlsToRateLimit.some((url) => req.url.includes(url))) {
    const ip = req.ip ?? "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.redirect(new URL("/blocked", req.url));
    }
  }
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();
  return res;
}

            `,
"codes_ts": `
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(5, "60 s"),
});

const urlsToRateLimit = ["/api/one", "/api/two"];

// The middleware is used to refresh the user's session before loading Server Component routes
export default async function middleware(req: NextRequest) {
  if (urlsToRateLimit.some((url) => req.url.includes(url))) {
    const ip = req.ip ?? "127.0.0.1";
    const { success } = await ratelimit.limit(ip);

    if (!success) {
      return NextResponse.redirect(new URL("/blocked", req.url));
    }
  }
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();
  return res;
}

` },

        "supabase_highlightedNote_1": [
            {
                "type": "text",
                "content": "We are rate limiting the user to 5 requests per minute based on their IP using the sliding window algorithm. You can refer to the"
            },
            {
                "type": "underlinedText",
                "content": " Upstash ratelimit SDK documentation"
            },
            {
                "type": "text",
                "content": "for more information on customizing it."
            },
        ],

        "supabase_complexText_6": [
            {
                "type": "text",
                "content": "6. Create a new"
            },
            {
                "type": "highlightedText",
                "content": "/app/blocked/page.js",
            },
            {
                "type": "text",
                "content": "file. This is the page the user will be redirected to when they hit the rate limit. Add the following content:"
            },
        ],

        "supabase_codeSnippet_3": {
            "title": "/app/blocked/page.js",
            "codes": `"use client";

import config from "@/config";
import React from "react";
import Link from "next/link";

const Blocked = () => {
	return (
		<main className="relative bg-neutral text-neutral-content h-screen w-full flex flex-col justify-center gap-8 items-center p-10">
			<h1 className="text-xl md:text-2xl font-medium">
				Hm, Access Blocked
			</h1>
			<p>Try again in 1 minute</p>

			<div>
				<Link className="link" href="/signin">
					Login
				</Link>{" "}
				or{" "}
				<Link className="link" href="/">
					Home
				</Link>
			</div>
		</main>
	);
};

export default Blocked;
`},

        "supabase_complexText_7": [
            {
                "type": "text",
                "content": "7. That's it! You have successfully rate limited the API routes. Now, when a user hits the rate limit, they will be redirected to the"
            },
            {
                "type": "highlightedText",
                "content": "/blocked",
            },
            {
                "type": "text",
                "content": "page.",
            },
        ],
    }

}



fs.writeFile('data/rate-limiting.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been saved.');
    }
});
