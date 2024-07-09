const fs = require('fs');

const data = {
    "docs": {
        "title": "Features > Emails",

        "plainText_0": "You don't have to use Mailgun, but you'll need an email tool to to setup magic login links, abandoned carts emails, etc...",

        "highlightedNote_1": [
            {
                "type": "white_bold",
                "content": `Mailgun silently removed their "pay-as-you-go" flex tier from their pricing page,`
            },
            {
                "type":"underlinedText",
                "content":"but it's still there."
            },
            
            {
                "type": "text",
                "content": `Start a free trial for the 35$ tier, then cancel it. You'll be downgraded to the "pay as you go" free tier. If you send <1000 emails/mo you"ll pay 1$/mo.`
            }, 
            {
                "type": "blockText",
                "content": ""
            },
            {
                "type": "white_bold",
                "content": `Prefer to use Resend?`
            },
            {
                "type": "text",
                "content": `Here's an`
            },
            {
                "type": "underlinedText",
                "content": `excellent tutorial`
            },
            {
                "type": "text",
                "content": `made by our top community member, Bill.`
            },
        ],

        "seo_subTitle": "Setup",

        "complexText_1": [
            {
                "type": "text",
                "content": "1. Create a new account on "
            },
            {
                "type": "underlinedText",
                "content": "Mailgun"
            },
        ],

        "plainText_1": "2. In [Sending] click [Domains] then [Add New Domain]. It's recommended to add a subdomain like mail.yourdomain.com.",


        "highlightedNote_2": [
            {
                "type": "text",
                "content": "If you pick the EU region, add the URL below to the Mailgun client setup in"
            },
            {
                "type": "highlightedText",
                "content": "libs/mailgun.js"
            },
            {
                "type": "text",
                "content": "right under"
            },
            {
                "type": "highlightedText",
                "content": `username: "api"`
            },
            {
                "type": "text",
                "content": ":"
            },
            {
                "type": "blockText",
                "content": ``
            },
            {
                "type": "highlightedText",
                "content": `url: "https://api.eu.mailgun.net/"`
            }
        ],

        "plainText_2": "3. Do all the DNS verification steps. If you use a subdomain, make sure it's reflected in your DNS records",


        "complexText_2": [
            {
                "type": "text",
                "content": "4. Add extra DMARC for better deliverability:"
            },
            {
                "type": "highlightedText",
                "content": "TXT"
            },
            {
                "type": "text",
                "content": "|"
            },
            {
                "type": "highlightedText",
                "content": "_dmarc.mail.yourdomain.com"
            },
            {
                "type": "text",
                "content": "|"
            },
            {
                "type": "highlightedText",
                "content": "v=DMARC1; p=none"
            },
        ],
        "plainText_3": "5. Go to [Domain Settings] then [SMTP Credentials] then [Reset Passsword], choose [Automatic] and then [Create Password]",



        "complexText_3": [
            {
                "type": "text",
                "content": "6. Click [Copy] at the bottom right of the modal. In .env.local, set"
            },
            {
                "type": "highlightedText",
                "content": "EMAIL_SERVER"
            },
            {
                "type": "text",
                "content": "to :"
            },
            {
                "type": "highlightedText",
                "content": "smtp://postmaster@[mail.yourdomain.com]:[copied_password]@smtp.mailgun.org:587"
            },
            {
                "type": "text",
                "content": "(without the brackets)"
            },
        ],

        "complexText_4": [
            {
                "type": "text",
                "content": "7. In [Sending API Keys] click [Create sending key] and add it to .env.local as"
            },
            {
                "type": "highlightedText",
                "content": "MAILGUN_API_KEY"
            }
        ],

        "complexText_5": [
            {
                "type": "text",
                "content": "8. (skip if do not need to receive emails) In [Receiving] click [Create Route]. Select [Match Recipient] and add the email you want to send from. (i.e. name@mail.yourdomain.com)."
            },
            {
                "type": "white_bold",
                "content": "Make sure to match the email you set up at mailgun.supportEmail in the config.js file."
            },
            {
                "type": "text",
                "content": "Forward to"
            },
            {
                "type": "highlightedText",
                "content": "https://[your-domain].com/api/webhook/mailgun"
            },
            {
                "type": "text",
                "content": ". Click [Create Route]."
            },
            {
                "type": "text",
                "content": "Then add your receiving email (I use my gmail for instance) in"
            },
            {
                "type": "underlinedText",
                "content": "mailgun.forwardREpliesTo"
            },
            {
                "type": "text",
                "content": "in config.js."
            }
        ],

        "highlightedNote_3": [
            {
                "type": "text",
                "content": "Check your records are valid on "
            },
            {
                "type": "underlinedText",
                "content": "MxToolbox"
            },
            {
                "type": "text",
                "content": "(enter your subdomain if you used one)"
            }
        ],

        "sending_mail_subTitle": "Sending emails",
        "plainText_4": "There are 2 ways to send emails:",
        "plainText_4": "1/ SMTP: Emails sent for magic login links will be sent using SMTP, for instance.",

        "complexText_6": [
            {
                "type": "text",
                "content": "2/ Mailgun API: To send any other emails, use the"
            },
            {
                "type": "highlightedText",
                "content": "sendEmail()"
            },
            {
                "type": "text",
                "content": "function in"
            },
            {
                "type": "highlightedText",
                "content": "libs/mailgun.js"
            },
        ],

        "receiving_mail_subTitle": "Receiving emails",
        "plainText_5": "Mailgun doesn't forward emails automatically, nor store them.",

        "complexText_7": [
            {
                "type": "text",
                "content": "So we created a route that match emails sent to our support email("
            },
            {
                "type": "highlightedText",
                "content": "mailgun.supportEmail"
            },
            {
                "type": "text",
                "content": "in"
            },
            {
                "type": "highlightedText",
                "content": "config.js"
            },
            {
                "type": "text",
                "content": ") and forward them to our API (your-domain.com/api/webhook/mailgun) which forwards them to our"
            },
            {
                "type": "highlightedText",
                "content": "forwardRepliesTo"
            },
            {
                "type": "text",
                "content": "email in"
            },
            {
                "type": "highlightedText",
                "content": "config.js."
            }
        ],

        "plainText_6": "It automatically adds the sender in reply-to so you can reply directly from your inbox.",

        "checklist_image": {
            "image_url": "https://shipfa.st/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Femail_helper.c4a7f868.png&w=1920&q=75",
            "bottom_text": "Checklist to avoid the spam folder"
        },
    },

}



fs.writeFile('data/emails.json', JSON.stringify(data, null, 2), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been saved.');
    }
});
