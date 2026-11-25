import type { Dictionary } from './pl'

// English version of every text on the site. Same structure as pl.ts.

export const en: Dictionary = {
  meta: {
    home: {
      title: 'Finansowa Bestie | Personal finance made simple',
      description:
        'Kasia, aka Finansowa Bestie: a financial educator and speaker who helps young women feel confident about money.',
    },
    about: {
      title: 'About me | Finansowa Bestie',
      description:
        'Kasia, aka Finansowa Bestie: an engineer, former IT manager and Personal Finance graduate of SGH Warsaw School of Economics who explains money in plain language.',
    },
    talks: {
      title: 'Workshops and talks | Finansowa Bestie',
      description:
        'Personal finance talks and workshops for women: pay rises and lifestyle inflation, emergency funds and first steps in investing.',
    },
  },

  nav: {
    label: 'Main menu',
    home: 'Home',
    about: 'About me',
    talks: 'Workshops and talks',
    contact: 'Contact',
    language: 'Site language',
  },

  footer: {
    name: 'Kasia · Finansowa Bestie',
    rights: '© 2026 All rights reserved.',
  },

  contact: {
    button: 'Get in touch',
    title: "Let's talk",
    description:
      "Workshops, talks, panels or collaborations — tell me what you have in mind and I'll get back to you.",
    successTitle: 'Thank you!',
    successText: "Your message has arrived. I'll be in touch soon.",
    close: 'Close',
    honeypot: 'Leave this empty',
    name: 'Full name',
    email: 'Email',
    organization: 'Organisation',
    optional: '(optional)',
    message: 'Message',
    error:
      "Your message couldn't be sent. Your details are still in the form — please try again in a moment.",
    sending: 'Sending…',
    send: 'Send message',
  },

  home: {
    eyebrow: 'Financial educator · Speaker',
    titleLine1: "Hi, I'm Kasia.",
    titleLine2: 'Your money bestie.',
    intro:
      'I help young women feel confident and calm about money — through talks, workshops and honest conversations about financial education.',
    invite: 'Invite me to speak',
    moreAboutMe: 'More about me',
    aboutTitle: 'About me',
    aboutP1Before: "I'm a financial educator and speaker, known online as ",
    aboutP1Highlight: 'Finansowa Bestie',
    aboutP1After:
      ' (“financial bestie”) — the friend who talks about money the way nobody did at school: openly, simply and without judgement.',
    aboutP2:
      'I believe financial independence starts with knowledge. My mission is to give young women the tools to budget, save, invest and make decisions that fit the life they want.',
    readMoreAboutMe: 'Read more about me',
    offersEyebrow: 'Open to collaboration',
    offersTitle: "Let's teach young women about money — together.",
    offers: [
      {
        title: 'Talks and presentations',
        text: "Warm, honest talks about money at conferences, schools, universities and women's communities.",
      },
      {
        title: 'Workshops',
        text: 'Hands-on sessions on budgeting, saving, investing basics and a healthy relationship with money.',
      },
      {
        title: 'Collaborations',
        text: 'Partnerships with brands, organisations and creators who want financial education to be accessible to everyone.',
      },
    ],
    seeTopics: 'See talk and workshop topics',
    interestsTitle: 'Beyond finance',
    interests: [
      {
        title: 'Travel',
        text: 'I collect places, people and stories — and I plan every trip with a budget.',
      },
      {
        title: 'Learning vibe coding',
        text: 'I build small projects with the help of AI and curiosity. This website is one of them.',
      },
      {
        title: 'Reading a lot',
        text: "I'm always in the middle of a book — from personal finance to fiction.",
      },
    ],
    ctaTitle: 'Planning an event or a workshop?',
    ctaText:
      "I'd love to hear about it. Write to me and let's make conversations about money a little less scary — together.",
  },

  about: {
    eyebrow: 'About me',
    title: "Hi, I'm Kasia!",
    p1: "Ever since my first paycheck, I set aside part of my earnings because I dreamed of financial independence. Sounds sensible? I thought so too. A little too late, I realised that saving alone isn't enough, even with a good salary. Without thoughtful investing, inflation quietly eats away at your savings.",
    quote:
      'Today I want to be the person I was missing back then: an older friend who explains in simple terms how money, saving and building wealth work.',
    p3: "I'm an engineer by training, a graduate of Wrocław University of Science and Technology. More than 10 years ago I switched careers to IT, where I built teams and led projects. I liked working at start-ups best, where you can really make a difference. In 2026 I completed postgraduate studies in Personal Finance at SGH Warsaw School of Economics, and now I'm exploring real estate, including selling and renting property.",
    p4: "Step by step, over the years and with a few mistakes along the way, I reached the stage known as Barista FIRE. It's the point where I can choose work that means something to me, not just work that pays the bills.",
    p5: "I'm happiest live, at trainings and workshops 😊 After hours I read books and plan my next trips.",
    welcome: 'Make yourself at home!',
  },

  talks: {
    eyebrow: 'Workshops and talks',
    titleStart: 'Personal finance',
    titleEnd: 'simple, practical and jargon-free.',
    introP1:
      'I teach women how money, saving and building wealth work. I talk about finances like an older friend, sharing what I wish someone had told me 10–15 years ago.',
    introP2:
      'After my sessions, participants leave with a plan they can put into action, not just a page of notes.',
    invite: 'Invite me',
    topicsTitle: 'Topics',
    outcomesLabel: 'Participants leave with',
    topics: [
      {
        kind: 'Talk',
        title: "Earning more, but your money isn't growing?",
        text: "Why a higher salary doesn't automatically make you wealthier, and what to do so that pay rises actually work for your future.",
        details: [
          {
            label: 'Duration and format',
            value: '30–45 min + Q&A, in person or online',
          },
          {
            label: "Who it's for",
            value:
              "women in IT and corporate jobs who earn well but don't see their wealth growing",
          },
          {
            label: 'Group size',
            value: 'in person 20–300+, online up to 100+',
          },
        ],
        outcomes: [
          'an understanding of lifestyle inflation',
          'a simple plan for every pay rise',
          'a way to automate saving',
        ],
      },
      {
        kind: 'Workshop',
        title: 'The Three Musketeers of Your Finances',
        text: 'A hands-on workshop about the emergency fund, the safety cushion and sinking funds. Participants work with their own numbers, which they never have to show anyone.',
        details: [
          {
            label: 'Duration and format',
            value: '2–2.5 h, ideally in person (online possible)',
          },
          {
            label: "Who it's for",
            value: 'beginners who want to get their finances in order',
          },
          {
            label: 'Group size',
            value: 'in person 8–20 (max. 25), online 8–15',
          },
        ],
        outcomes: [
          'a calculated target for their emergency fund and safety cushion',
          'a list of larger expenses for the year with a monthly amount to set aside',
          'an automatic transfer set up',
        ],
      },
      {
        kind: 'Workshop',
        title: "I'm saving — now what? How not to let inflation eat your savings",
        text: 'For women who have savings but keep them in a bank account because investing seems difficult or scary.',
        details: [
          { label: 'Duration and format', value: '2 h, in person or online' },
          {
            label: "Who it's for",
            value: "people with savings who haven't started investing yet",
          },
          { label: 'Group size', value: 'in person 10–30, online up to 50' },
        ],
        outcomes: [
          'an understanding of inflation and compound interest',
          'key concepts: risk, time horizon, diversification, costs, and IKE/IKZE (Polish tax-advantaged retirement accounts)',
          'a list of questions to ask before your first investment, plus a PDF glossary',
        ],
      },
    ],
    combineLead: 'Topics can be combined,',
    combineRest:
      " for example a talk on the main stage and a workshop for a smaller group on the same day. I'll tailor the programme to your audience and schedule. All content is educational and is not investment advice.",
    faqTitle: 'FAQ for organisers',
    faq: [
      {
        q: 'How much does a talk or workshop cost?',
        a: "Pricing is on request. It depends on the format, length, number of participants and whether the session is in person or online. Tell me what you're planning and I'll prepare an offer.",
      },
      {
        q: 'Can you tailor the topic to our audience?',
        a: 'Yes. Before the event we have a short call about your group: who the participants are, where they are on their journey and what they need. Based on that, I adjust the examples, the length and the balance between theory and practice. Topics can also be combined, for example a talk for everyone and a workshop for a smaller group.',
      },
      {
        q: 'How does working together look, and how far ahead should we book?',
        a: "First we agree on the date, format and details, and then you receive an offer. Once it's accepted, I send you a bio, a photo and a session description for your communications. For workshops, it's best to get in touch at least 4 weeks in advance so there's time to prepare the materials.",
      },
      {
        q: 'Do you run sessions online and outside your city?',
        a: 'Yes. Every topic can take place online, although the “Three Musketeers of Your Finances” workshop works best in person. I also travel to events in other cities; travel costs are included in the quote.',
      },
      {
        q: 'Do you recommend specific investments or financial products?',
        a: "No. The sessions are educational and are not investment advice. I explain mechanisms, concepts and habits, but I don't point to specific companies, funds, cryptocurrencies or financial institutions.",
      },
      {
        q: 'What do you need from us on site, and what do participants receive?',
        a: "Usually a projector and a microphone, plus worktables and Wi-Fi for workshops. We'll confirm the details when preparing the quote. Workshop participants receive worksheets or a PDF with materials. Recording the session can be arranged individually.",
      },
    ],
    ctaTitle: "Let's talk about your event",
    ctaText:
      "Tell me what you're planning and I'll prepare a proposal tailored to your audience.",
  },

  errors: {
    notFoundTitle: 'Page not found',
    notFoundText:
      "This page doesn't exist. Check the address or go back to the home page.",
    loadErrorTitle: "The page couldn't be loaded",
    loadErrorText: 'Try again or go back to the home page.',
    retry: 'Try again',
    home: 'Home page',
  },
}
