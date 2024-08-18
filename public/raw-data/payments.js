const fs = require('fs');

const data = {
  "stripe": {
    "title": "Features > Payments",

    "stripe_lifecycle_image": {
      "image_url": "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstripe_helper.3c27ba9d.png&w=1920&q=75",
      "bottom_text": "How ShipFast handles Stripe subscription lifecycle"
    },

    "payments_subTitle": "setup",

    "stripe_complexText_1": [
      {
        "type": "text",
        "content": "1. Create a new account on "
      },
      {
        "type": "underlinedText",
        "content": "Stripe"
      },
      {
        "type": "text",
        "content": "and activate payments (boring, I know.. see you in a bit!)"
      },
    ],

    "stripe_plainText_1": "2. In your [Settings], [Public Details], add your website URL",
    "stripe_plainText_2": "3. In your [Settings], [Branding], add your logo & colors",
    "stripe_plainText_3": "4. In your [Settings], [Customer Emails], turn on emails for successful payments & refunds",
    "stripe_plainText_4": "5. In your [Settings], [Customer Portal], activate link to customer portal (in case you need later)",
    "stripe_plainText_5": "6. In the search box, type 'rules' and click [Fraud Prevention > Rules] , make sure the first 3DS rule is enabled. I also turn on the second one (recommended). Make sure to block payments if CVC fails (check below)",
    "stripe_plainText_6": "7. Turn ON Test Mode",

    "stripe_complexText_2": [
      {
        "type": "text",
        "content": "8. Create a new product and copy the price ID (price_1ju5GD464564) in "
      },
      {
        "type": "highlightedText",
        "content": "config.stripe.plans[0].priceId"
      },
      {
        "type": "text",
        "content": "in the"
      },
      {
        "type": "highlightedText",
        "content": "config.js"
      },
      {
        "type": "text",
        "content": "file ."
      },
    ],

    "stripe_complexText_3": [
      {
        "type": "text",
        "content": "9. In your [Developers], copy your public & private keys and add them to "
      },
      {
        "type": "highlightedText",
        "content": "STRIPE_SECRET_KEY"
      },
      {
        "type": "text",
        "content": "&"
      },
      {
        "type": "highlightedText",
        "content": "STRIPE_PUBLIC_KEY"
      },
      {
        "type": "text",
        "content": "in"
      },
      {
        "type": "text",
        "content": ".env.local"
      },
    ],

    "stripe_plainText_7": "10. To set up the webhook locally, follow the steps in [Developers], [Webhook], [Test in local environment]. After login to Stripe CLI, use this command to forward webhook events to our API:",


    "stripe_codeSnippet_1": {
      "title": "terminal",
      "codes": `stripe listen --forward-to localhost:3000/api/webhook/stripe`
    },

    "stripe_complexText_4": [
      {
        "type": "text",
        "content": "Copy the signing secret and add it to"
      },
      {
        "type": "highlightedText",
        "content": "STRIPE_WEBHOOK_SECRET"
      },
      {
        "type": "text",
        "content": "in"
      },
      {
        "type": "highlightedText",
        "content": "env.local"
      },
    ],

    "stripe_highlightedNote_1": [
      {
        "type": "white_bold",
        "content": "Going to production?"
      },
      {
        "type": "break",
        "content": ""
      },
      {
        "type": "blockText",
        "content": "1. Turn OFF Test Mode in your Stripe Dashboard"
      },
      {
        "type": "text",
        "content": "2. In your [Developers], copy your public & private keys and add them to"
      },
      {
        "type": "highlightedText",
        "content": "STRIPE_SECRET_KEY"
      },
      {
        "type": "text",
        "content": "&"
      },
      {
        "type": "highlightedText",
        "content": "STRIPE_PUBLIC_KEY"
      },
      {
        "type": "text",
        "content": "in your production environment variables."
      },
      {
        "type": "blockText",
        "content": "3. In your [Developers], [Webhook], [Add Enpoint]. Set your domain +"
      },
      {
        "type": "text",
        "content": "/api/webhook/stripe. Select [checkout.session.completed] event (or more if needed). Copy the signing secret and add it to"
      },
      {
        "type": "highlightedText",
        "content": "STRIPE_WEBHOOK_SECRET"
      },
      {
        "type": "text",
        "content": "in your production environment variables."
      },
      {
        "type": "blockText",
        "content": "4. Optional: In [Balance], [Manage Payouts], set a specific date of the month to receive your payouts (I use the 10th of each month)"
      },
      {
        "type": "blockText",
        "content": "5. Optional: In [Settings], [Customers Emails], activate emails for successful payments & refunds"
      },
    ],

    "stripe_checkout_subTitle": "Create a checkout",
    "stripe_complexText_5": [
      {
        "type": "text",
        "content": "From the front-end, use the"
      },
      {
        "type": "highlightedText",
        "content": "ButtonCheckout"
      },
      {
        "type": "text",
        "content": "to automatically create a checkout session (one-time payment or subscription)"
      },
    ],

    "stripe_webhook_subTitle": "Stripe webhooks & subscription handling",
    "stripe_complexText_6": [
      {
        "type": "text",
        "content": "Our API listens to Stripe selected webhooks events & update the user accordingly. It turns boolean"
      },
      {
        "type": "highlightedText",
        "content": "hasAccess"
      },
      {
        "type": "text",
        "content": "( or"
      },
      {
        "type": "highlightedText",
        "content": "has_access"
      },
      {
        "type": "text",
        "content": "in Supabase) to true/false based on whether the user should have access to a paid resource or not."
      },
      {
        "type": "blockText",
        "content": "You can add your own business logic to the"
      },
      {
        "type": "highlightedText",
        "content": "/api/webhook/stripe"
      },
      {
        "type": "text",
        "content": "API endpoint (add credits to a user, send email with a paid e-book etc.)"
      },
    ],

    "stripe_redirect_image_1": {
      "image_url": "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbyedispute.acbdb5af.jpg&w=1920&q=75",
      "link": "https://byedispute.com/?ref=shipfast_docs",
      "headText": "Don't get banned from Stripe before getting your first customer",
      "text": "Prevent disputes before they happen with ByeDispute"
    },
    "stripe_redirect_image_2": {
      "image_url": "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzenvoice.2d9f9d95.jpg&w=1920&q=75",
      "link": "https://zenvoice.io/?ref=shipfast_docs",
      "headText": "Tired of managing Stripe invoices?",
      "text": "Let your customers generate, edit, and download Stripe invoices, so you don’t have to."
    }

  },

  "lemon": {
    "title": "Features > Payments",

    "lemon_highlightedNote_1": [
      {
        "type": "text",
        "content": "ShipFast uses Stripe by default. But no worries! This tutorial will help you set up Lemon Squeezy in minutes. Just a few copy paste 😌"
      },
    ],

    "payments_subTitle": "setup",

    "lemon_plainText_1": "1. Install the package",

    "lemon_codeSnippet_1": {
      "title": "terminal",
      "codes": `npm install @lemonsqueezy/lemonsqueezy.js`
    },

    "lemon_plainText_2": "2. Add the environment variables",

    "lemon_codeSnippet_2": {
      "title": "terminal",
      "codes": `LEMONSQUEEZY_API_KEY=
LEMONSQUEEZY_STORE_ID=
LEMONSQUEEZY_SIGNING_SECRET=`
    },

    "lemon_complexText_1": [
      {
        "type": "text",
        "content": "Create a new API key from "
      },
      {
        "type": "highlightedText",
        "content": "Settings > API"
      },
    ],

    "lemon_complexText_2": [
      {
        "type": "text",
        "content": "Find your store ID from "
      },
      {
        "type": "highlightedText",
        "content": "Settings > Stores"
      },
    ],

    "lemon_highlightedNote_2": [
      {
        "type": "text",
        "content": "Just copy the number, without the #"
      },
    ],

    "lemon_complexText_3": [
      {
        "type": "text",
        "content": "Generate a random string for the signing secret"
      },
    ],

    "lemon_complexText_4": [
      {
        "type": "text",
        "content": "3. Create a new product from"
      },
      {
        "type": "underlinedText",
        "content": "Store > Product."
      },
      {
        "type": "white_bold",
        "content": "Make sure to add a variant, even if you plan to have a single price."
      }
    ],

    "lemon_highlightedNote_3": [
      {
        "type": "text",
        "content": "You can get the"
      },
      {
        "type": "highlightedText",
        "content": "variantId"
      },
      {
        "type": "text",
        "content": "by selecting the variant and then copying the number from the URL. It follows the convention:"
      },
      {
        "type": "highlightedText",
        "content": "https://app.lemonsqueezy.com/product/[productId]/variants/[variantId]"
      },
    ],

    "lemon_plainText_3": "4. Update your config",

    "lemon_codeSnippet_3": {
      "title": "config.js",
      "codes": `lemonsqueezy: {
  // Create a product and add multiple variants via your Lemon Squeezy dashboard, then add them here. You can add as many plans as you want, just make sure to add the variantId.
  plans: [
    {
      // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)
      variantId:
        process.env.NODE_ENV === "development"
          ? "123456"
          : "456789",
      //  REQUIRED - Name of the plan, displayed on the pricing page
      name: "Starter",
      // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others.
      description: "Perfect for small projects",
      // The price you want to display, the one user will be charged on Lemon Squeezy
      price: 99,
      // If you have an anchor price (i.e. $149) that you want to display crossed out, put it here. Otherwise, leave it empty.
      priceAnchor: 149,
      features: [
        {
          name: "NextJS boilerplate",
        },
        { name: "User oauth" },
        { name: "Database" },
        { name: "Emails" },
      ],
    },
    {
      variantId:
        process.env.NODE_ENV === "development"
          ? "123456"
          : "456789",
      // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true.
      isFeatured: true,
      name: "Advanced",
      description: "You need more power",
      price: 149,
      priceAnchor: 299,
      features: [
        {
          name: "NextJS boilerplate",
        },
        { name: "User oauth" },
        { name: "Database" },
        { name: "Emails" },
        { name: "1 year of updates" },
        { name: "24/7 support" },
      ],
    },
  ],
},`
    },
    "lemon_complexText_5": [
      {
        "type": "text",
        "content": "5. [Skip if using JavaScript] If you’re using TypeScript, add the following inside the"
      },
      {
        "type": "highlightedText",
        "content": "ConfigProps"
      },
      {
        "type": "text",
        "content": "interface"
      }
    ],

    "lemon_codeSnippet_4": {
      "title": "types/config.ts",
      "codes": `lemonsqueezy: {
  plans: {
    isFeatured?: boolean;
    variantId: string;
    name: string;
    description?: string;
    price: number;
    priceAnchor?: number;
    features: {
      name: string;
    }[];
  }[];
};`
    },

    "lemon_complexText_6": [
      {
        "type": "text",
        "content": "6. Update your"
      },
      {
        "type": "highlightedText",
        "content": "user"
      },
      {
        "type": "text",
        "content": "file model"
      }
    ],

    "lemon_codeSnippet_5": {
      "title": "models/user.js",
      "codes": `import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";
// USER SCHEMA
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      private: true,
    },
    image: {
      type: String,
    },
    // Used in the Stripe webhook to identify the user in Stripe and later create Customer Portal or prefill user credit card details
    customerId: {
      type: String,
    },
    // Used in the Stripe webhook. should match a plan in config.js file.
    variantId: {
      type: String,
    },
    // Used to determine if the user has access to the product—it's turn on/off by the Stripe webhook
    hasAccess: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

// add plugin that converts mongoose to json
userSchema.plugin(toJSON);

export default mongoose.models.User || mongoose.model("User", userSchema);
        };`
    },



    "lemon_complexText_7": [
      {
        "type": "text",
        "content": "7. Update your"
      },
      {
        "type": "highlightedText",
        "content": "Pricing"
      },
      {
        "type": "text",
        "content": "compoment"
      }
    ],

    "lemon_codeSnippet_6": {
      "title": "components/Pricing.js",
      "codes": `import config from "@/config";
import ButtonCheckout from "./ButtonCheckout";

// <Pricing/> displays the pricing plans for your app
// It's your Lemon Squeezy config in config.js (config.lemonsqueezy.plans[]) that will be used to display the plans
// <ButtonCheckout /> renders a button that will redirect the user to Lemon Squeezy checkout called the /api/lemonsqueezy/create-checkout API endpoint with the correct variantId

const Pricing = () => {
  return (
    <section className="bg-base-200 overflow-hidden" id="pricing">
      <div className="py-24 px-8 max-w-5xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="font-medium text-primary mb-8">Pricing</p>
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight">
            Save hours of repetitive code and ship faster!
          </h2>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {config.lemonsqueezy.plans.map((plan) => (
            <div key={plan.variantId} className="relative w-full max-w-lg">
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span
                    className={'badge text-xs text-primary-content font-semibold border-0 bg-primary'}
                  >
                    POPULAR
                  </span>
                </div>
              )}

              {plan.isFeatured && (
                <div
                  className={'absolute -inset-[1px] rounded-[9px] bg-primary z-10'}
                ></div>
              )}

              <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-lg">
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <p className="text-lg lg:text-xl font-bold">{plan.name}</p>
                    {plan.description && (
                      <p className="text-base-content/80 mt-2">
                        {plan.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  {plan.priceAnchor && (
                    <div className="flex flex-col justify-end mb-[4px] text-lg ">
                      <p className="relative">
                        <span className="absolute bg-base-content h-[1.5px] inset-x-0 top-[53%]"></span>
                        <span className="text-base-content/80">
                          {plan.priceAnchor}
                        </span>
                      </p>
                    </div>
                  )}
                  <p className={'text-5xl tracking-tight font-extrabold'}>
                    {plan.price}
                  </p>
                  <div className="flex flex-col justify-end mb-[4px]">
                    <p className="text-xs text-base-content/60 uppercase font-semibold">
                      USD
                    </p>
                  </div>
                </div>
                {plan.features && (
                  <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-[18px] h-[18px] opacity-80 shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>

                        <span>{feature.name} </span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="space-y-2">
                  <ButtonCheckout variantId={plan.variantId} />

                  <p className="flex items-center justify-center gap-2 text-sm text-center text-base-content/80 font-medium relative">
                    Pay once. Access forever.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
            `
    },

    "lemon_complexText_8": [
      {
        "type": "text",
        "content": "8. Update your"
      },
      {
        "type": "highlightedText",
        "content": "ButtonCheckout"
      },
      {
        "type": "text",
        "content": "compoment"
      }
    ],

    "lemon_codeSnippet_7": {
      "title": "components/ButtonCheckout.js",
      "codes": `"use client";

import { useState } from "react";
import apiClient from "@/libs/api";
import config from "@/config";

// This component is used to create Lemon Squeezy Checkout Sessions
// It calls the /api/lemonsqueezy/create-checkout route with the variantId and redirectUrl
const ButtonCheckout = ({ variantId }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);

    try {
      const { url }: { url: string } = await apiClient.post(
        "/lemonsqueezy/create-checkout",
        {
          variantId,
          redirectUrl: window.location.href,
        }
      );

      window.location.href = url;
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

  return (
    <button
      className="btn btn-primary btn-block group"
      onClick={() => handlePayment()}
    >
      {isLoading ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : (
        <svg
          className="w-5 h-5 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200"
          viewBox="0 0 375 509"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z" />
        </svg>
      )}
      Get {config?.appName}
    </button>
  );
};

export default ButtonCheckout;
            `,
      "codes_ts": `"use client";

import { useState } from "react";
import apiClient from "@/libs/api";
import config from "@/config";

// This component is used to create Lemon Squeezy Checkout Sessions
// It calls the /api/lemonsqueezy/create-checkout route with the variantId and redirectUrl
const ButtonCheckout = ({ variantId }: { variantId: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePayment = async () => {
    setIsLoading(true);

    try {
      const { url }: { url: string } = await apiClient.post(
        "/lemonsqueezy/create-checkout",
        {
          variantId,
          redirectUrl: window.location.href,
        }
      );

      window.location.href = url;
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

  return (
    <button
      className="btn btn-primary btn-block group"
      onClick={() => handlePayment()}
    >
      {isLoading ? (
        <span className="loading loading-spinner loading-xs"></span>
      ) : (
        <svg
          className="w-5 h-5 fill-primary-content group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-200"
          viewBox="0 0 375 509"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M249.685 14.125C249.685 11.5046 248.913 8.94218 247.465 6.75675C246.017 4.57133 243.957 2.85951 241.542 1.83453C239.126 0.809546 236.463 0.516683 233.882 0.992419C231.301 1.46815 228.917 2.69147 227.028 4.50999L179.466 50.1812C108.664 118.158 48.8369 196.677 2.11373 282.944C0.964078 284.975 0.367442 287.272 0.38324 289.605C0.399039 291.938 1.02672 294.226 2.20377 296.241C3.38082 298.257 5.06616 299.929 7.09195 301.092C9.11775 302.255 11.4133 302.867 13.75 302.869H129.042V494.875C129.039 497.466 129.791 500.001 131.205 502.173C132.62 504.345 134.637 506.059 137.01 507.106C139.383 508.153 142.01 508.489 144.571 508.072C147.131 507.655 149.516 506.503 151.432 504.757L172.698 485.394C247.19 417.643 310.406 338.487 359.975 250.894L373.136 227.658C374.292 225.626 374.894 223.327 374.882 220.99C374.87 218.653 374.243 216.361 373.065 214.341C371.887 212.322 370.199 210.646 368.17 209.482C366.141 208.318 363.841 207.706 361.5 207.707H249.685V14.125Z" />
        </svg>
      )}
      Get {config?.appName}
    </button>
  );
};

export default ButtonCheckout;
            `
    },

    "lemon_complexText_9": [
      {
        "type": "text",
        "content": "9. Update your"
      },
      {
        "type": "highlightedText",
        "content": "ButtonAccount"
      },
      {
        "type": "text",
        "content": "compoment"
      }
    ],

    "lemon_codeSnippet_8": {
      "title:": "components/ButtonAccount.js",
      "codes": `/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useSession, signOut } from "next-auth/react";
import apiClient from "@/libs/api";

// A button to show user some account actions
//  1. Billing: open a LemonSqeeuzy Customer Portal to manage their billing (cancel subscription, update payment method, etc.).
//     This is only available if the customer has a customerId (they made a purchase previously)
//  2. Logout: sign out and go back to homepage
// See more at https://shipfa.st/docs/components/buttonAccount
const ButtonAccount = () => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  const handleBilling = async () => {
    setIsLoading(true);

    try {
      const { url } = await apiClient.post(
        "/lemonsqueezy/create-portal"
      );

      window.location.href = url;
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

  // Don't show anything if not authenticated (we don't have any info about the user)
  if (status === "unauthenticated") return null;

  return (
    <Popover className="relative z-10">
      {({ open }) => (
        <>
          <Popover.Button className="btn">
            {session?.user?.image ? (
              <img
                src={session?.user?.image}
                alt={session?.user?.name || "Account"}
                className="w-6 h-6 rounded-full shrink-0"
                referrerPolicy="no-referrer"
                width={24}
                height={24}
              />
            ) : (
              <span className="w-6 h-6 bg-base-300 flex justify-center items-center rounded-full shrink-0">
                {session?.user?.name?.charAt(0) ||
                  session?.user?.email?.charAt(0)}
              </span>
            )}

            {session?.user?.name || "Account"}

            {isLoading ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={'w-5 h-5 duration-200 opacity-50'}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </Popover.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className="absolute left-0 z-10 mt-3 w-screen max-w-[16rem] transform">
              <div className="overflow-hidden rounded-xl shadow-xl ring-1 ring-base-content ring-opacity-5 bg-base-100 p-1">
                <div className="space-y-0.5 text-sm">
                  <button
                    className="flex items-center gap-2 hover:bg-base-300 duration-200 py-1.5 px-4 w-full rounded-lg font-medium"
                    onClick={handleBilling}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.5 4A1.5 1.5 0 001 5.5V6h18v-.5A1.5 1.5 0 0017.5 4h-15zM19 8.5H1v6A1.5 1.5 0 002.5 16h15a1.5 1.5 0 001.5-1.5v-6zM3 13.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm4.75-.75a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Billing
                  </button>
                  <button
                    className="flex items-center gap-2 hover:bg-error/20 hover:text-error duration-200 py-1.5 px-4 w-full rounded-lg font-medium"
                    onClick={handleSignOut}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Logout
                  </button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default ButtonAccount;`,
      "codes_ts": `/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { useSession, signOut } from "next-auth/react";
import apiClient from "@/libs/api";

// A button to show user some account actions
//  1. Billing: open a LemonSqeeuzy Customer Portal to manage their billing (cancel subscription, update payment method, etc.).
//     This is only available if the customer has a customerId (they made a purchase previously)
//  2. Logout: sign out and go back to homepage
// See more at https://shipfa.st/docs/components/buttonAccount
const ButtonAccount = () => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  const handleBilling = async () => {
    setIsLoading(true);

    try {
      const { url }: { url: string } = await apiClient.post(
        "/lemonsqueezy/create-portal"
      );

      window.location.href = url;
    } catch (e) {
      console.error(e);
    }

    setIsLoading(false);
  };

  // Don't show anything if not authenticated (we don't have any info about the user)
  if (status === "unauthenticated") return null;

  return (
    <Popover className="relative z-10">
      {({ open }) => (
        <>
          <Popover.Button className="btn">
            {session?.user?.image ? (
              <img
                src={session?.user?.image}
                alt={session?.user?.name || "Account"}
                className="w-6 h-6 rounded-full shrink-0"
                referrerPolicy="no-referrer"
                width={24}
                height={24}
              />
            ) : (
              <span className="w-6 h-6 bg-base-300 flex justify-center items-center rounded-full shrink-0">
                {session?.user?.name?.charAt(0) ||
                  session?.user?.email?.charAt(0)}
              </span>
            )}

            {session?.user?.name || "Account"}

            {isLoading ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={'w-5 h-5 duration-200 opacity-50'}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </Popover.Button>
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel className="absolute left-0 z-10 mt-3 w-screen max-w-[16rem] transform">
              <div className="overflow-hidden rounded-xl shadow-xl ring-1 ring-base-content ring-opacity-5 bg-base-100 p-1">
                <div className="space-y-0.5 text-sm">
                  <button
                    className="flex items-center gap-2 hover:bg-base-300 duration-200 py-1.5 px-4 w-full rounded-lg font-medium"
                    onClick={handleBilling}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.5 4A1.5 1.5 0 001 5.5V6h18v-.5A1.5 1.5 0 0017.5 4h-15zM19 8.5H1v6A1.5 1.5 0 002.5 16h15a1.5 1.5 0 001.5-1.5v-6zM3 13.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm4.75-.75a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Billing
                  </button>
                  <button
                    className="flex items-center gap-2 hover:bg-error/20 hover:text-error duration-200 py-1.5 px-4 w-full rounded-lg font-medium"
                    onClick={handleSignOut}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Logout
                  </button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default ButtonAccount;
            `
    },


    "lemon_complexText_10": [
      {
        "type": "text",
        "content": "10. Create a"
      },
      {
        "type": "highlightedText",
        "content": "lemonsqueezy"
      },
      {
        "type": "text",
        "content": "lib"
      }
    ],

    "lemon_codeSnippet_9": {
      "title": "libs/lemonsqueezy.js",
      "codes": `import {
  createCheckout,
  getCustomer,
  lemonSqueezySetup,
} from "@lemonsqueezy/lemonsqueezy.js";

// This is used to create a Stripe Checkout for one-time payments. It's usually triggered with the <ButtonCheckout /> component. Webhooks are used to update the user's state in the database.
export const createLemonSqueezyCheckout = async ({
  user,
  redirectUrl,
  variantId,
  discountCode,
}) => {
  try {
    lemonSqueezySetup({ apiKey: process.env.LEMONSQUEEZY_API_KEY });

    const storeId = process.env.LEMONSQUEEZY_STORE_ID;

    const newCheckout = {
      productOptions: {
        redirectUrl,
      },
      checkoutData: {
        discountCode,
        email: user?.email,
        name: user?.name,
        custom: {
          userId: user?._id.toString(),
        },
      },
    };

    const { data, error } = await createCheckout(
      storeId,
      variantId,
      newCheckout
    );

    if (error) {
      throw error;
    }

    return data.data.attributes.url;
  } catch (e) {
    console.error(e);
    return null;
  }
};

// This is used to create Customer Portal sessions, so users can manage their subscriptions (payment methods, cancel, etc..)
export const createCustomerPortal = async ({
  customerId,
}) => {
  try {
    lemonSqueezySetup({ apiKey: process.env.LEMONSQUEEZY_API_KEY });

    const { data, error } = await getCustomer(customerId);

    if (error) {
      throw error;
    }

    return data.data.attributes.urls.customer_portal;
  } catch (error) {
    console.error(error);
    return null;
  }
};
            `,
      "codes_ts": `import {
  NewCheckout,
  createCheckout,
  getCustomer,
  lemonSqueezySetup,
} from "@lemonsqueezy/lemonsqueezy.js";

interface CreateLemonSqueezyCheckoutParams {
  variantId: string;
  redirectUrl: string;
  discountCode?: string;
  user?: {
    email: string;
    name: string;
    _id: string;
  };
}

interface CreateCustomerPortalParams {
  customerId: string;
}

// This is used to create a Stripe Checkout for one-time payments. It's usually triggered with the <ButtonCheckout /> component. Webhooks are used to update the user's state in the database.
export const createLemonSqueezyCheckout = async ({
  user,
  redirectUrl,
  variantId,
  discountCode,
}: CreateLemonSqueezyCheckoutParams): Promise<string> => {
  try {
    lemonSqueezySetup({ apiKey: process.env.LEMONSQUEEZY_API_KEY });

    const storeId = process.env.LEMONSQUEEZY_STORE_ID;

    const newCheckout: NewCheckout = {
      productOptions: {
        redirectUrl,
      },
      checkoutData: {
        discountCode,
        email: user?.email,
        name: user?.name,
        custom: {
          userId: user?._id.toString(),
        },
      },
    };

    const { data, error } = await createCheckout(
      storeId,
      variantId,
      newCheckout
    );

    if (error) {
      throw error;
    }

    return data.data.attributes.url;
  } catch (e) {
    console.error(e);
    return null;
  }
};

// This is used to create Customer Portal sessions, so users can manage their subscriptions (payment methods, cancel, etc..)
export const createCustomerPortal = async ({
  customerId,
}: CreateCustomerPortalParams): Promise<string> => {
  try {
    lemonSqueezySetup({ apiKey: process.env.LEMONSQUEEZY_API_KEY });

    const { data, error } = await getCustomer(customerId);

    if (error) {
      throw error;
    }

    return data.data.attributes.urls.customer_portal;
  } catch (error) {
    console.error(error);
    return null;
  }
};
            `
    },

    "lemon_complexText_11": [
      {
        "type": "text",
        "content": "11. Create an API route for creating a Checkout session"
      }
    ],

    "lemon_codeSnippet_10": {
      "title": "app/api/lemonsqueezy/create-checkout/route.js",
      "codes": `import { createLemonSqueezyCheckout } from "@/libs/lemonsqueezy";
import connectMongo from "@/libs/mongoose";
import { authOptions } from "@/libs/next-auth";
import User from "@/models/User";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

// This function is used to create a Stripe Checkout Session (one-time payment or subscription)
// It's called by the <ButtonCheckout /> component
// By default, it doesn't force users to be authenticated. But if they are, it will prefill the Checkout data with their email and/or credit card
export async function POST(req) {
  const body = await req.json();

  if (!body.variantId) {
    return NextResponse.json(
      { error: "Variant ID is required" },
      { status: 400 }
    );
  } else if (!body.redirectUrl) {
    return NextResponse.json(
      { error: "Redirect URL is required" },
      { status: 400 }
    );
  }

  try {
    const session = await getServerSession(authOptions);

    await connectMongo();

    const user = await User.findById(session?.user?.id);

    const { variantId, redirectUrl } = body;

    const checkoutURL = await createLemonSqueezyCheckout({
      variantId,
      redirectUrl,
      // If user is logged in, this will automatically prefill Checkout data like email and/or credit card for faster checkout
      user,
      // If you send coupons from the frontend, you can pass it here
      // discountCode: body.discountCode,
    });

    return NextResponse.json({ url: checkoutURL });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}

            `,
      "codes_ts": `import { createLemonSqueezyCheckout } from "@/libs/lemonsqueezy";
import connectMongo from "@/libs/mongoose";
import { authOptions } from "@/libs/next-auth";
import User from "@/models/User";
import { getServerSession } from "next-auth/next";
import { NextRequest, NextResponse } from "next/server";

// This function is used to create a Stripe Checkout Session (one-time payment or subscription)
// It's called by the <ButtonCheckout /> component
// By default, it doesn't force users to be authenticated. But if they are, it will prefill the Checkout data with their email and/or credit card
export async function POST(req: NextRequest) {
  const body = await req.json();

  if (!body.variantId) {
    return NextResponse.json(
      { error: "Variant ID is required" },
      { status: 400 }
    );
  } else if (!body.redirectUrl) {
    return NextResponse.json(
      { error: "Redirect URL is required" },
      { status: 400 }
    );
  }

  try {
    const session = await getServerSession(authOptions);

    await connectMongo();

    const user = await User.findById(session?.user?.id);

    const { variantId, redirectUrl } = body;

    const checkoutURL = await createLemonSqueezyCheckout({
      variantId,
      redirectUrl,
      // If user is logged in, this will automatically prefill Checkout data like email and/or credit card for faster checkout
      user,
      // If you send coupons from the frontend, you can pass it here
      // discountCode: body.discountCode,
    });

    return NextResponse.json({ url: checkoutURL });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: e?.message }, { status: 500 });
  }
}

            `
    },

    "lemon_complexText_12": [
      {
        "type": "text",
        "content": "12. Create an API route for creating a Customer Portal session"
      }
    ],

    "codeSnippet_11": {
      "title": "app/api/lemonsqueezy/create-portal/route.js",
      "codes": `import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/libs/next-auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import { createCustomerPortal } from "@/libs/lemonsqueezy";

export async function POST() {
  const session = await getServerSession(authOptions);

  if (session) {
    try {
      await connectMongo();

      const { id } = session.user;

      const user = await User.findById(id);

      if (!user?.customerId) {
        return NextResponse.json(
          {
            error:
              "You don't have a billing account yet. Make a purchase first.",
          },
          { status: 400 }
        );
      }

      const url = await createCustomerPortal({
        customerId: user.customerId,
      });

      return NextResponse.json({
        url,
      });
    } catch (e) {
      console.error(e);
      return NextResponse.json({ error: e?.message }, { status: 500 });
    }
  } else {
  // Not Signed in
  return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }
}

            `,
      "codes_ts": `import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/libs/next-auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import { createCustomerPortal } from "@/libs/lemonsqueezy";

export async function POST() {
  const session = await getServerSession(authOptions);

  if (session) {
    try {
      await connectMongo();

      const { id } = session.user;

      const user = await User.findById(id);

      if (!user?.customerId) {
        return NextResponse.json(
          {
            error:
              "You don't have a billing account yet. Make a purchase first.",
          },
          { status: 400 }
        );
      }

      const url = await createCustomerPortal({
        customerId: user.customerId,
      });

      return NextResponse.json({
        url,
      });
    } catch (e) {
      console.error(e);
      return NextResponse.json({ error: e?.message }, { status: 500 });
    }
  } else {
  // Not Signed in
  return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }
}

            `
    },


    "lemon_complexText_13": [
      {
        "type": "text",
        "content": "13. Add your webhook URL on"
      },
      {
        "type": "underlinedText",
        "content": "Settings > Webhooks."
      }
    ],


    "lemon_complexText_14": [
      {
        "type": "text",
        "content": "14. Create an API route for your Lemon Sqeeuzy webhook"
      }
    ],

    "lemon_codeSnippet_12": {
      "title": "pages/api/webhook/lemonsqueezy/route.js",
      "codes": `import { NextResponse } from "next/server";
import { headers } from "next/headers";
import connectMongo from "@/libs/mongoose";
import crypto from "crypto";
import config from "@/config";
import User from "@/models/User";

// This is where we receive LemonSqueezy webhook events
// It used to update the user data, send emails, etc...
// By default, it'll store the user in the database
// See more: https://shipfa.st/docs/features/payments
export async function POST(req) {
  const secret = process.env.LEMONSQUEEZY_SIGNING_SECRET;
  if (!secret) {
    return new Response("LEMONSQUEEZY_SIGNING_SECRET is required.", {
      status: 400,
    });
  }

  await connectMongo();

  // Verify the signature
  const text = await req.text();

  const hmac = crypto.createHmac("sha256", secret);
  const digest = Buffer.from(hmac.update(text).digest("hex"), "utf8");
  const signature = Buffer.from(headers().get("x-signature"), "utf8");

  if (!crypto.timingSafeEqual(digest, signature)) {
    return new Response("Invalid signature.", {
      status: 400,
    });
  }

  // Get the payload
  const payload = JSON.parse(text);

  const eventName = payload.meta.event_name;
  const customerId = payload.data.attributes.customer_id.toString();

  try {
    switch (eventName) {
      case "order_created": {
        // ✅ Grant access to the product
        const userId = payload.meta?.custom_data?.userId;

        const email = payload.data.attributes.user_email;
        const name = payload.data.attributes.user_name;
        const variantId =
          payload.data.attributes.first_order_item.variant_id.toString();

        const plan = config.lemonsqueezy.plans.find(
          (p) => p.variantId === variantId
        );
        if (!plan) {
          throw new Error("Plan not found for variantId:", variantId);
        }

        let user;

        // Get or create the user. userId is normally pass in the checkout session (clientReferenceID) to identify the user when we get the webhook event
        if (userId) {
          user = await User.findById(userId);
        } else if (email) {
          user = await User.findOne({ email });

          if (!user) {
            user = await User.create({
              email,
              name,
            });

            await user.save();
          }
        } else {
          throw new Error("No user found");
        }

        // Update user data + Grant user access to your product. It's a boolean in the database, but could be a number of credits, etc...
        user.variantId = variantId;
        user.customerId = customerId;
        user.hasAccess = true;
        await user.save();

        // Extra: send email with user link, product page, etc...
        // try {
        //   await sendEmail(...);
        // } catch (e) {
        //   console.error("Email issue:" + e?.message);
        // }

        break;
      }

      case "subscription_cancelled": {
        // The customer subscription stopped
        // ❌ Revoke access to the product

        const user = await User.findOne({ customerId });

        // Revoke access to your product
        user.hasAccess = false;
        await user.save();

        break;
      }

      default:
      // Unhandled event type
    }
  } catch (e) {
    console.error("lemonsqueezy error: ", e.message);
  }

  return NextResponse.json({});
}

            `,
      "codes_ts": `import { NextResponse, NextRequest } from "next/server";
import { headers } from "next/headers";
import connectMongo from "@/libs/mongoose";
import crypto from "crypto";
import config from "@/config";
import User from "@/models/User";

// This is where we receive LemonSqueezy webhook events
// It used to update the user data, send emails, etc...
// By default, it'll store the user in the database
// See more: https://shipfa.st/docs/features/payments
export async function POST(req: NextRequest) {
  const secret = process.env.LEMONSQUEEZY_SIGNING_SECRET;
  if (!secret) {
    return new Response("LEMONSQUEEZY_SIGNING_SECRET is required.", {
      status: 400,
    });
  }

  await connectMongo();

  // Verify the signature
  const text = await req.text();

  const hmac = crypto.createHmac("sha256", secret);
  const digest = Buffer.from(hmac.update(text).digest("hex"), "utf8");
  const signature = Buffer.from(headers().get("x-signature"), "utf8");

  if (!crypto.timingSafeEqual(digest, signature)) {
    return new Response("Invalid signature.", {
      status: 400,
    });
  }

  // Get the payload
  const payload = JSON.parse(text);

  const eventName = payload.meta.event_name;
  const customerId = payload.data.attributes.customer_id.toString();

  try {
    switch (eventName) {
      case "order_created": {
        // ✅ Grant access to the product
        const userId = payload.meta?.custom_data?.userId;

        const email = payload.data.attributes.user_email;
        const name = payload.data.attributes.user_name;
        const variantId =
          payload.data.attributes.first_order_item.variant_id.toString();

        const plan = config.lemonsqueezy.plans.find(
          (p) => p.variantId === variantId
        );
        if (!plan) {
          throw new Error("Plan not found for variantId:", variantId);
        }

        let user;

        // Get or create the user. userId is normally pass in the checkout session (clientReferenceID) to identify the user when we get the webhook event
        if (userId) {
          user = await User.findById(userId);
        } else if (email) {
          user = await User.findOne({ email });

          if (!user) {
            user = await User.create({
              email,
              name,
            });

            await user.save();
          }
        } else {
          throw new Error("No user found");
        }

        // Update user data + Grant user access to your product. It's a boolean in the database, but could be a number of credits, etc...
        user.variantId = variantId;
        user.customerId = customerId;
        user.hasAccess = true;
        await user.save();

        // Extra: send email with user link, product page, etc...
        // try {
        //   await sendEmail(...);
        // } catch (e) {
        //   console.error("Email issue:" + e?.message);
        // }

        break;
      }
      
      case "subscription_cancelled": {
        // The customer subscription stopped
        // ❌ Revoke access to the product

        const user = await User.findOne({ customerId });

        // Revoke access to your product
        user.hasAccess = false;
        await user.save();

        break;
      }

      default:
      // Unhandled event type
    }
    
  } catch (e) {
    console.error("lemonsqueezy error: ", e.message);
  }

  return NextResponse.json({});
}

            `
    }

  },

}



fs.writeFile('data/payments.json', JSON.stringify(data, null, 2), (err) => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File has been saved.');
  }
});
