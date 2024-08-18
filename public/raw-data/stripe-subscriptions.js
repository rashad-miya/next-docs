const fs = require('fs');

const data = {
    "docs": {
        "title": "Tutorials > Stripe Subscriptions",

        "highlightedNote_1": [
            {
                "type": "text",
                "content": "The flow is the same for one-time payments"
            },
        ],

        "highlightedNote_2": [
            {
                "type": "text",
                "content": "Looking to use Lemon Squeezy? Follow "
            },
            {
                "type": "underlinedText",
                "content": "this tutorial."
            },
        ],

        "plainText_1": "Let's create a Stripe Checkout to set up a subscription and let our webhook handle the logic to provision access to the user.",

        "complexText_1": [
            {
                "type": "text",
                "content": "You need to have  "
            },
            {
                "type": "underlinedText",
                "content": "Stripe"
            },
            {
                "type": "text",
                "content": "and a"
            },
            {
                "type": "underlinedText",
                "content": "database"
            },
            {
                "type": "text",
                "content": "setup"
            },
        ],

        "stipe_subTitle": "Setup",

        "complexText_2": [
            {
                "type": "text",
                "content": "1. In your  "
            },
            {
                "type": "underlinedText",
                "content": "Stripe dashboard,"
            },
            {
                "type": "text",
                "content": " Click [More +] > [Product Catalog] > [+ Add Product]. Set a name and a monthly price (or anything according to your business model). Then click [Save Product]."
            }
        ],

        "complexText_3": [
            {
                "type": "text",
                "content": "2. In the [Pricing] section, copy the product price ID (starts with"
            },
            {
                "type": "highlightedText",
                "content": "price_"
            },
            {
                "type": "text",
                "content": ") and add it to the first plan in the"
            },
            {
                "type": "highlightedText",
                "content": "stripe.plans"
            },
            {
                "type": "text",
                "content": "array"
            },
            {
                "type": "highlightedText",
                "content": "config.js"
            },
            {
                "type": "text",
                "content": "."
            },
        ],

        "complexText_4": [
            {
                "type": "text",
                "content": "3. In "
            },
            {
                "type": "highlightedText",
                "content": "/dashboard/page.js"
            },
            {
                "type": "text",
                "content": ", paste this:"
            }
        ],

        "codeSnippet_1": {
            "title": "/app/dashboard/pages.js",
            "codes": `import ButtonAccount from "@/components/ButtonAccount";
import ButtonCheckout from "@/components/ButtonCheckout";
import config from "@/config";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-xl mx-auto space-y-8">
        <ButtonAccount />

        <h1 className="text-3xl md:text-4xl font-extrabold">
          Subscribe to get access:
        </h1>

        <ButtonCheckout
          mode="subscription"
          priceId={config.stripe.plans[0].priceId}
        />
      </section>
    </main>
  );
}
`
        },

        "complexText_5": [
            {
                "type": "text",
                "content": "4. Open "
            },
            {
                "type": "highlightedText",
                "content": "http://localhost:3000/dashboard"
            },
            {
                "type": "text",
                "content": "in your browser, log-in and click the button to make a payment with the credit card number"
            },
            {
                "type": "highlightedText",
                "content": "4242 4242 4242 4242"
            },
            {
                "type": "text",
                "content": "."
            }
        ],

        "complexText_6": [
            {
                "type": "text",
                "content": "5. Our webhook "
            },
            {
                "type": "highlightedText",
                "content": "/api/webhook/stripe/route.js"
            },
            {
                "type": "text",
                "content": "listens to Stripe events and will handle the logic to provision access (or not) to the user—See the boolean"
            },
            {
                "type": "highlightedText",
                "content": "hasAccess"
            },
            {
                "type": "text",
                "content": "in the"
            },
            {
                "type": "highlightedText",
                "content": "user.js"
            },
            {
                "type": "text",
                "content": "schema (NextAuth) or"
            },
            {
                "type": "highlightedText",
                "content": "has_access"
            },
            {
                "type": "text",
                "content": "in your Supabase ."
            },
            {
                "type": "highlightedText",
                "content": "profiles"
            },
            {
                "type": "text",
                "content": "table."
            }
        ],

        "highlightedNote_3": [
            {
                "type": "text",
                "content": "You need to have a "
            },
            {
                "type": "underlinedText",
                "content": "Stripe local endpoint "
            },
            {
                "type": "underlinedText",
                "content": "running on your computer for this to work in dev mode."
            },
        ],

        "complexText_7": [
            {
                "type": "text",
                "content": "6. You can add your own logic in"
            },
            {
                "type": "highlightedText",
                "content": "/api/webhook/stripe/route.js"
            },
            {
                "type": "text",
                "content": "like sending abandoned cart emails, remove credits, etc. "
            }
        ],

        "complexText_8": [
            {
                "type": "text",
                "content": "7.  Users can manage their accounts with"
            },
            {
                "type": "highlightedText",
                "content": "<ButtonAccount /> "
            },
            {
                "type": "text",
                "content": "(cancel subscription, update credit card, etc.)"
            }
        ],

        "plainText_2": "That's it. You can build your SaaS on top of this flow!",
        "redirect_image_1": {
            "image_url": "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbyedispute.acbdb5af.jpg&w=1920&q=75",
            "link": "https://byedispute.com/?ref=shipfast_docs",
            "headText": "Don't get banned from Stripe before getting your first customer",
            "text": "Prevent disputes before they happen with ByeDispute"
        },
        "redirect_image_2": {
            "image_url": "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzenvoice.2d9f9d95.jpg&w=1920&q=75",
            "link": "https://zenvoice.io/?ref=shipfast_docs",
            "headText": "Tired of managing Stripe invoices?",
            "text": "Let your customers generate, edit, and download Stripe invoices, so you don’t have to."
        }
    },

}



fs.writeFile('data/stipe-subscriptions.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been saved.');
    }
});
