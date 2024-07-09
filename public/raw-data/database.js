const fs = require('fs');

const data = {
    "nextAuth": {
        "title": "Features > Database",

        "database_subTitle": "Setup",

        "next_complexText_1": [
            {
                "type": "text",
                "content": "1. Create a new project and deploy a cluster on"
            },
            {
                "type": "underlinedText",
                "content": "MongoDB Atlas"
            },
        ],

        "next_highlightedNote_1": [
            {
                "type": "text",
                "content": "Run a local database for your dev setup so you can work offline and it's faster"
            },
        ],


        "next_complexText_2": [
            {
                "type": "text",
                "content": "2. In your project on MongoDB Altas, click [Network Access] then [+ Add IP Address]. Enter"
            },
            {
                "type": "highlightedText",
                "content": "0.0.0.0/0"
            },
            {
                "type": "text",
                "content": "in [Access List Entry]. This allows connections from your computer and your production deployment(s) (Vercel for instance)."
            },
        ],


        "next_complexText_3": [
            {
                "type": "text",
                "content": "3. If you haven't done it yet, rename"
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
            {
                "type": "text",
                "content": "Then add your connection string to"
            },
            {
                "type": "highlightedText",
                "content": ".MONGODB_URI"
            },
            {
                "type": "text",
                "content": "in"
            },
            {
                "type": "highlightedText",
                "content": ".env.local"
            },
            {
                "type": "text",
                "content": "."
            }
        ],

        "next_mongoose_subTitle": "Mongoose (optional)",


        "next_plainText_1": "Mongoose makes it easier to deal with MongoDB and has some cool features.",

        "next_complexText_4": [
            {
                "type": "text",
                "content": "Models are defined in the folder /models. Add any new models there. The plugin toJSON is added to all models to remove the"
            },
            {
                "type": "highlightedText",
                "content": "_id"
            },
            {
                "type": "text",
                "content": "and"
            },
            {
                "type": "highlightedText",
                "content": "__v"
            },
            {
                "type": "text",
                "content": "(easier on front-end)."
            },
        ],

        "next_complexText_5": [
            {
                "type": "text",
                "content": "Also if you add"
            },
            {
                "type": "highlightedText",
                "content": "private: true"
            },
            {
                "type": "text",
                "content": "to any field it will be removed from the response. I.e. make email private so it's not sent to the front-end."
            }
        ],
    },

    "supabase": {
        "title": "Features > Database",

        "database_subTitle": "Setup",

        "supabase_complexText_1": [
            {
                "type": "text",
                "content": "1. In Supabase SQL Editor, run this query to add a "
            },
            {
                "type": "highlightedText",
                "content": "profiles"
            },
            {
                "type": "text",
                "content": "table (an extension of the authenticated user to store data like Stripe customer_id, subscription access, etc...):"
            },

        ],

        "supabase_codeSnippet_1": {
            "title": "SQL Editor",
            "codes": `
            
            create table public.profiles (
            id uuid not null references auth.users on delete cascade,
            customer_id text,
            price_id text,
            has_access boolean,
            email text,

            primary key (id)
            );

            alter table public.profiles enable row level security;

            `
        },


        "supabase_complexText_2": [
            {
                "type": "text",
                "content": "2. Go to the new"
            },
            {
                "type": "highlightedText",
                "content": "profiles"
            },
            {
                "type": "text",
                "content": "table and add 2 RLS policies:"
            },
        ],

        "supabase_plainText_1": "- Enable read access for authenticated users only",
        "supabase_plainText_2": "- Enable insert access for authenticated users only",
        "supabase_code_screenshot_url": "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupabase_rls_helper.c7a6cd10.jpg&w=3840&q=75",


        "supabase_complexText_3": [
            {
                "type": "text",
                "content": "3. (Optional) If you want to collect leads with"
            },
            {
                "type": "underlinedText",
                "content": "ButtonLead"
            },
            {
                "type": "text",
                "content": "create a new table called"
            },
            {
                "type": "highlightedText",
                "content": "leads"
            },
            {
                "type": "text",
                "content": "and add a RLS policy with insert access for anyone:"
            },
        ],


        "supabase_codeSnippet_2": {
            "title": "SQL Editor",
            "codes": `
            create table public.leads (
            id uuid default gen_random_uuid(),
            email text,
            created_at timestamp with time zone default timezone('utc'::text, now()) not null,

            primary key (id)
            );

            alter table public.leads enable row level security;

            `
        },
    },

}



fs.writeFile('data/database.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been saved.');
    }
});
