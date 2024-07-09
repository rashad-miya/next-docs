const fs = require('fs');

const data = {
    "ship": {
        "title": "Tutorials > Static page",
        "plainText_1": "ShipFast comes with many components to help you build SEO-optimized pages (like a landing page) in no time.",

        "complexText_1": [
            {
                "type": "text",
                "content": "The"
            },
            {
                "type": "highlightedText",
                "content": "/components"
            },
            {
                "type": "text",
                "content": "folder contains all you need (hero, pricing, FAQ sections). Here's the list of all the components & themes.."
            },
            {
                "type": "underlinedText",
                "content": "all the components "
            },
            {
                "type": "text",
                "content": "& themes.."
            },
        ],

        "complexText_2": [
            {
                "type": "text",
                "content": "The"
            },
            {
                "type": "highlightedText",
                "content": "/libs/seo.js"
            },
            {
                "type": "text",
                "content": "file helps you set SEO tags to better rank on Google. Make sure to"
            },
            {
                "type": "underlinedText",
                "content": "customize SEO tags."
            },
        ],

        "plainText_2": "A simple landing page can done like this:",


        "codeSnippet_1": {
            "title": "landing.js",
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


    },

}



fs.writeFile('data/static-page.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been saved.');
    }
});
