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
            "codes": `-- Create the profiles table in the public schema
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT,
    email TEXT,
    image TEXT,
    customer_id TEXT,
    price_id TEXT,
    has_access BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT (now() AT TIME ZONE 'UTC'),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT (now() AT TIME ZONE 'UTC')
);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = (now() AT TIME ZONE 'UTC');
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_profiles_updated_at
BEFORE UPDATE ON public.profiles
FOR EACH ROW
EXECUTE FUNCTION update_updated_at();

-- Create a function to automatically add a profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, name, image, created_at, updated_at)
  VALUES (
    NEW.id, 
    NEW.email, 
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name'), 
    NEW.raw_user_meta_data->>'avatar_url',
    (now() AT TIME ZONE 'UTC'), 
    (now() AT TIME ZONE 'UTC')
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a trigger to call the handle_new_user function on signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
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

        "supabase_codeSnippet_2": {
            "title": "SQL Editor",
            "codes": `-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow users to read their own data
CREATE POLICY read_own_profile_data ON public.profiles
FOR SELECT
USING (auth.uid() = id);

-- Create a policy to allow users to update their own data
CREATE POLICY update_own_profile_data ON public.profiles
FOR UPDATE
USING (auth.uid() = id);

-- Create a policy to allow users to insert their own data
CREATE POLICY insert_own_profile_data ON public.profiles
FOR INSERT
WITH CHECK (auth.uid() = id);

-- Create a policy to allow users to delete their own data
CREATE POLICY delete_own_profile_data ON public.profiles
FOR DELETE
USING (auth.uid() = id);
`},


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


        "supabase_codeSnippet_3": {
            "title": "SQL Editor",
            "codes": `-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow users to read their own data
CREATE POLICY read_own_profile_data ON public.profiles
FOR SELECT
USING (auth.uid() = id);

-- Create a policy to allow users to update their own data
CREATE POLICY update_own_profile_data ON public.profiles
FOR UPDATE
USING (auth.uid() = id);

-- Create a policy to allow users to insert their own data
CREATE POLICY insert_own_profile_data ON public.profiles
FOR INSERT
WITH CHECK (auth.uid() = id);

-- Create a policy to allow users to delete their own data
CREATE POLICY delete_own_profile_data ON public.profiles
FOR DELETE
USING (auth.uid() = id);
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
