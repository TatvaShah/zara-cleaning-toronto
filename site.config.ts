import type { SiteConfig } from "@/lib/types";

const IG = "https://www.instagram.com/reel/";

export const site: SiteConfig = {
  name: "ZaRa Cleaning Toronto",
  tagline: "Professional house cleaning across Toronto and the GTA. Regular cleans, deep cleans, and move in or move out help.",
  category: "Residential cleaning",
  schemaType: "LocalBusiness",
  area: "Toronto and the GTA, ON",
  siteUrl: "https://zara-cleaning-toronto.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#c9a227", soft: "#f5f0e6" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Toronto and the GTA",
    headline: "Clean spaces, happy places",
    subhead: "Regular and deep house cleaning with care and attention. Supplies and vacuum included. Send a DM or call to book your clean.",
    images: [
      { src: "/images/post-1.jpg", alt: "ZaRa Cleaning at work in a Toronto bathroom" },
      { src: "/images/post-9.jpg", alt: "Spotless marble bathroom after a professional clean" },
      { src: "/images/post-2.jpg", alt: "Freshly cleaned bathtub" },
    ],
    primaryCta: { label: "DM to book", href: "https://ig.me/m/zaracleaningtoronto" },
    secondaryCta: { label: "See our services", href: "#menu" },
  },

  highlights: [
    "Regular and deep cleaning",
    "Supplies and vacuum included",
    "Toronto and the GTA",
    "Book by DM or phone",
  ],

  about: {
    title: "Professional cleaning with care",
    body: [
      "ZaRa Cleaning Toronto helps homes across Toronto and the GTA stay fresh and spotless. From everyday regular cleans to deeper refreshes, we show up with care and attention to the details that make a house feel like home again.",
      "We bring supplies, vacuum and mop. Tell us your home size, the areas that need the most love, and your preferred date, and we will take it from there.",
    ],
    image: { src: "/images/post-8.jpg", alt: "Bathroom vanity after a ZaRa Cleaning visit" },
  },

  menu: {
    label: "Services",
    title: "How we can help",
    intro: "Residential cleaning plans for homes across Toronto, Etobicoke, Mississauga, Oakville, Milton and nearby GTA cities.",
    variant: "list",
    showPrices: true,
    groups: [
      {
        title: "House cleaning",
        note: "From $150 per cleaning",
        items: [
          { name: "Regular house cleaning", description: "Dusting, vacuuming and mopping for a fresh, maintained home.", price: "From $150" },
          { name: "Deep cleaning", description: "A thorough refresh for bathrooms, kitchens and high touch areas." },
          { name: "Move in or move out cleaning", description: "Leave a place spotless for the next chapter." },
        ],
      },
      {
        title: "Focus areas",
        items: [
          { name: "Washrooms deep cleaning", description: "Fixtures, floors and surfaces left sparkling." },
          { name: "Kitchen appliances in and out", description: "Fridge, stove and oven inside cleaning." },
          { name: "Dusting, vacuuming and mopping", description: "The everyday foundation of a clean home." },
        ],
      },
    ],
    priceNote: "Starting from $150 per cleaning as posted. Final quote depends on home size and scope. Message us for your quote.",
    footnote: "Supplies and vacuum or mop included. Flexible scheduling.",
  },

  gallery: {
    title: "Recent cleans",
    items: [
      { src: "/images/post-1.jpg", width: 480, height: 853, alt: "Cleaning cart ready in a marble bathroom", caption: "Ready for a deep bathroom clean", href: IG + "DfPLUTFTemM/" },
      { src: "/images/post-9.jpg", width: 480, height: 852, alt: "Luxury bathroom after cleaning", caption: "Marble bathroom, finished", href: IG + "DewQoSTzSoy/" },
      { src: "/images/post-2.jpg", width: 480, height: 852, alt: "Spotless bathtub", caption: "Bathtub after a clean", href: IG + "DexB-ErzXPU/" },
      { src: "/images/post-12.jpg", width: 480, height: 852, alt: "Double vanity after cleaning", caption: "Double vanity, polished", href: IG + "Der4O_Mz_zC/" },
      { src: "/images/post-3.jpg", width: 480, height: 852, alt: "Kitchen cabinet cleaning", caption: "Kitchen cabinets up high", href: IG + "De34zk-z4F8/" },
      { src: "/images/post-8.jpg", width: 480, height: 852, alt: "Bathroom vanity cleaned", caption: "Vanity and sink refresh", href: IG + "DexB6mizskG/" },
      { src: "/images/post-11.jpg", width: 480, height: 852, alt: "Clean bathroom sink", caption: "Sink and faucet shine", href: IG + "DetrY2nzNyV/" },
      { src: "/images/post-4.jpg", width: 480, height: 852, alt: "Clean bathroom floor and toilet", caption: "Bathroom floors and fixtures", href: IG + "De2MFBKTXJL/" },
      { src: "/images/post-5.jpg", width: 480, height: 852, alt: "Detail vacuuming wood lattice", caption: "Detail vacuuming", href: IG + "De1Mj9ezzas/" },
      { src: "/images/post-7.jpg", width: 480, height: 852, alt: "Mirror cleaning in progress", caption: "Mirrors and glass", href: IG + "DeyutJ9Tg9R/" },
    ],
  },

  instagram: {
    handle: "zaracleaningtoronto",
    embeds: [
      "https://www.instagram.com/reel/DfPLUTFTemM/",
      "https://www.instagram.com/reel/DewQoSTzSoy/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    title: "Book your clean",
    intro: "Tap the button to copy a starter message, then paste it into our Instagram chat. Or call us. We will reply with a quote and availability.",
    headerCtaLabel: "DM to book",
    dmMessage: "Hi ZaRa Cleaning! I would like to book a clean.\nService (regular, deep, move in or move out):\nHome size (bedrooms and bathrooms):\nArea in the GTA:\nPreferred date:\nAnything that needs extra attention:",
    links: [],
    note: "Supplies and vacuum or mop are included. Flexible scheduling across Toronto and the GTA.",
  },

  reviews: { items: [] },

  faq: [
    { q: "Where do you clean?", a: "We serve Toronto and the GTA, including Etobicoke, Mississauga, Oakville, Milton, Brampton and nearby cities." },
    { q: "Do I need to provide cleaning supplies?", a: "No. Supplies and vacuum or mop are included." },
    { q: "How do I book?", a: "Send us an Instagram DM with your home size, the service you want and your preferred date, or call 647-575-5546." },
    { q: "What does a clean start at?", a: "Cleans start from $150, as posted. The final quote depends on your home size and what you need done." },
  ],

  contact: {
    title: "Contact and booking",
    phone: "647-575-5546",
    area: "Toronto and the GTA, Ontario",
    socials: [],
  },

  seo: {
    title: "ZaRa Cleaning Toronto | House cleaning in Toronto and the GTA",
    description: "Professional regular and deep house cleaning across Toronto and the GTA. Supplies included. Book by Instagram DM or call 647-575-5546.",
    keywords: ["house cleaning Toronto", "deep cleaning GTA", "Etobicoke cleaning", "Mississauga house cleaning", "Oakville cleaning service"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
