/**
 * Single source of truth for the wedding invitation.
 * Updated with Pahul Kaur & Rounak Singh's personalized details.
 */

export const invitation = {
  couple: {
    bride: "Pahul Kaur",
    groom: "Rounak Singh",
    initials: "P & R",
  },
  /** ISO date-time of the ceremony, used by the countdown and calendar file. */
  dateISO: "2026-12-19T10:00:00+05:30",
  dateLabel: "Saturday, 19 December 2026",
  timeLabel: "10:00 in the morning",
  venue: {
    name: "Golden Heritage",
    address: "Golden Heritage, Grand Trunk Road",
    mapsUrl: "https://maps.app.goo.gl/rF2H5LFMzVzpLFnm8?g_st=ic",
    mapsQuery: "Golden Heritage",
  },
  dressCode: "Traditional / Festive Indian Elegance — pastels, ivory & gold",
  hero: {
    kicker: "Together with our families",
    eyebrow: "Save the Date",
    blessing: "Two souls, one sacred journey",
  },
  story: {
    title: "The Two of Them",
    subtitle: "A story of boundless warmth, creativity and laughter",
    bride: {
      name: "Pahul Kaur",
      role: "The Bride",
      text: "A soul of endless creativity, turning every problem into possibility. With a heart overflowing with love and care, she brings warmth and magic everywhere.",
      photo: "/photos/bride-animated.jpg",
    },
    groom: {
      name: "Rounak Singh",
      role: "The Groom",
      text: "Responsible and always there when needed. Listens to worries with patience and makes everything feel better. And with his love for Mexican food, the perfect mix of comfort, peace and fun.",
      photo: "/photos/groom-animated.jpg",
    },
  },
  music: {
    title: "Kudmai · Shagna Di Shab",
    movie: "Rocky Aur Rani Kii Prem Kahaani",
    youtubeUrl: "https://youtu.be/V9pwJ5JzND8?si=my8oSS-WvCe9YVIP",
    youtubeId: "V9pwJ5JzND8",
    verses: [
      {
        part: "Stanza 1",
        lines: [
          "Salma sitaaron wali",
          "Shagna di shab aayi re",
          "Banno se baane ke",
          "Milne ki jo रुत laayi re",
          "Shehnaayi yun goonji",
          "Sabki aankhein bhar आयीं re",
        ],
      },
      {
        part: "Stanza 2",
        lines: [
          "Solah baras ke do qadam",
          "चौखट ke baahar kya gaye",
          "Teri कुड़माई ke din aa gaye",
        ],
      },
    ],
  },
  chapters: [
    {
      no: "I",
      title: "When Two Paths Crossed",
      when: "The Beginning",
      text: "A creative heart met a steady soul. Between unhurried conversations and shared smiles, something lasting quietly began to bloom.",
    },
    {
      no: "II",
      title: "Comfort, Tacos & Late Night Laughs",
      when: "The Journey",
      text: "Listening to every worry with endless patience, celebrating her boundless creativity, and discovering that the best meals always come with the best company.",
    },
    {
      no: "III",
      title: "The Promise of Forever",
      when: "The Decision",
      text: "Knowing with certainty that every tomorrow is sweeter when faced together hand in hand.",
    },
    {
      no: "IV",
      title: "19 December 2026 — And Now, Together",
      when: "10:00 AM · Golden Heritage",
      text: "Surrounded by loved ones, flowers, and holy blessings, Pahul and Rounak step into their forever.",
    },
  ],
  footer: {
    line1: "Come celebrate with us.",
    line2: "Eat good food, dance with all your heart.",
    signoff: "With all our love, Pahul & Rounak",
  },
} as const;

export const galleryPhotos = [
  {
    src: "/photos/couple-palace-animated.jpg",
    alt: "A Regal Love Story — Pahul and Rounak on a palace terrace at sunset",
    caption: "A Regal Love Story · Pahul & Rounak",
    span: "sm:col-span-2",
    ratio: "aspect-[16/9]",
  },
  {
    src: "/photos/couple-animated.jpg",
    alt: "Animated storybook illustration of Pahul and Rounak holding hands under bougainvillea and lanterns",
    caption: "Two souls, one sacred journey",
    span: "sm:col-span-2",
    ratio: "aspect-[4/3]",
  },
  {
    src: "/photos/bride-animated.jpg",
    alt: "Animated bridal portrait of Pahul Kaur in royal blush lehenga",
    caption: "Pahul — Endless creativity & warmth",
    span: "",
    ratio: "aspect-square",
  },
  {
    src: "/photos/groom-animated.jpg",
    alt: "Animated groom portrait of Rounak Singh in royal ivory and gold sherwani",
    caption: "Rounak — Strength, patience & heart",
    span: "",
    ratio: "aspect-square",
  },
] as const;

export const wishes = [
  {
    from: "The Families",
    text: "May Waheguru bless your union with eternal happiness, laughter, health, and endless love.",
  },
  {
    from: "Friends & Well-wishers",
    text: "Two of the kindest humans coming together. Here's to a lifetime of love, tacos, and celebrations!",
  },
  {
    from: "With Love",
    text: "May your home always be filled with warmth, peace, and music.",
  },
] as const;
