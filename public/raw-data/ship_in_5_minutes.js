const fs = require('fs');

const data = {
    "ship": {
        "title": "Tutorials > Ship in 5 minutes",
        "plainText_1": "Let's get your startup in front of your customers in 5 minutes ⚡️",
        "plainText_2": "We're building a beautiful landing page and adding forms to collect emails for a waitlist (optional)",
        "plainText_3": "Finish this tutorial to be featured on our homepage ⭐️",
        "complexText_1": [
            {
                "type": "text",
                "content": "1. If you havent't already, clone the repo and run the server locally. See the"
            },
            {
                "type": "underlinedText",
                "content": "Get Started"
            },
            {
                "type": "text",
                "content": "tutorial."
            },
        ],

        "complexText_2": [
            {
                "type": "text",
                "content": "2. Delete everything in "
            },
            {
                "type": "highlightedText",
                "content": "/app/page.js"
            },
            {
                "type": "text",
                "content": ", and paste this:"
            }
        ],

        "codeSnippet_1": `import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Problem />
        <FeaturesAccordion />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}`,

        "complexText_3": [
            {
                "type": "text",
                "content": "3. Edit the copy to fit your business logic."
            },
            {
                "type": "white_bold",
                "content": "Each component has tips to help you write copy that sells—see"
            },
            {
                "type": "underlinedText",
                "content": "component section."
            },
            {
                "type": "text",
                "content": "Congrats you have a beautiful landing page to show!"
            },
        ],


        "complexText_4": [
            {
                "type": "text",
                "content": "4. (Optional) To collect emails for a waitlist, "
            },
            {
                "type": "underlinedText",
                "content": "set up a database."
            },
        ],

        "complexText_5": [
            {
                "type": "text",
                "content": "5. (Optional) Replace the main call-to-action button in"
            },
            {
                "type": "highlightedText",
                "content": "Hero"
            },
            {
                "type": "text",
                "content": ","
            },
            {
                "type": "highlightedText",
                "content": "Pricing"
            },
            {
                "type": "text",
                "content": ","
            },
            {
                "type": "text",
                "content": "and"
            },
            {
                "type": "highlightedText",
                "content": "CTA"
            },
            {
                "type": "text",
                "content": "with this:"
            },
        ],

        "codeSnippet_2": `import ButtonLead from "@/components/ButtonLead";

  ...
  </div>

  {/* For the Hero & CTA use this 👇 */}
  <ButtonLead />

  {/* For the Pricing use this instead 👇 */}
  <ButtonLead extraStyle="!max-w-none !w-full" />
  
  <div>
  ...`,

        "complexText_6": [
            {
                "type": "text",
                "content": "It's time to deploy! If you need help, here's a "
            },
            {
                "type": "underlinedText",
                "content": "simple tutorial"
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
        }

    },

}



fs.writeFile('data/ship-in-5-minutes.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been saved.');
    }
});
