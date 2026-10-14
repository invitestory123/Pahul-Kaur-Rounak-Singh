/**
 * Single source of truth for the wedding invitation.
 * Updated with Pahul Kaur & Rounak Singh's personalized details.
 */

export const invitation = {
  couple: {
    groom: "Rounak Singh",
    bride: "Pahul Kaur",
    initials: "P & R",
  },
  /** ISO date-time of the main wedding ceremony, used by the countdown and calendar file. */
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
    kicker: "Our family warmly welcomes you",
    eyebrow: "Click to open invite",
    blessing: "Two souls, one beautiful journey",
  },
  itinerary: [
    {
      date: "16 December 2026",
      dayName: "Wednesday",
      badge: "Day 1",
      title: "Mehandi & Sangeet",
      tagline: "Henna, Music & Celebration",
      events: [
        {
          name: "Mehandi and sangeet",
          time: "5:30 PM",
          description: "An enchanting evening of intricate mehndi designs, folk sangeet, and joyful melodies.",
          icon: "Sparkles",
        },
      ],
    },
    {
      date: "17 December 2026",
      dayName: "Thursday",
      badge: "Day 2",
      title: "Akhand Path Sahib & Jago Night",
      tagline: "Divine Blessings & Vibrant Celebrations",
      events: [
        {
          name: "Bhog shree akhandpath sahib",
          time: "9:00 AM",
          description: "Seeking Waheguru's divine grace with the culmination of the holy recitation.",
          icon: "BookOpen",
        },
        {
          name: "Jago",
          time: "6:00 PM",
          description: "Carrying the luminous earthen pots, celebrating traditional Punjabi roots with songs and cheers.",
          icon: "Flame",
        },
        {
          name: "DJ Night",
          time: "Following Jago",
          description: "High-octane Punjabi beats, bhangra dance floor, and grand evening feast.",
          icon: "Music",
        },
      ],
    },
    {
      date: "18 December 2026",
      dayName: "Friday",
      badge: "Day 3",
      title: "Pre-Wedding Ceremonies",
      tagline: "Auspicious Rituals & Golden Moments",
      events: [
        {
          name: "Bride’s Shagan",
          time: "Morning 11:00 AM",
          description: "Warm family blessings, chunni ceremony, and auspicious gifts for our radiant bride.",
          icon: "Gift",
        },
        {
          name: "Haldi",
          time: "4:00 PM",
          description: "Golden turmeric paste ceremony filled with joyous splashes and playful love.",
          icon: "Sun",
        },
        {
          name: "Chudha ceremony",
          time: "5:30 PM",
          description: "Sacred ritual of red and ivory wedding bangles tied with sweet maternal love and kaliras.",
          icon: "Heart",
        },
      ],
    },
    {
      date: "19 December 2026",
      dayName: "Saturday",
      badge: "The Wedding Day",
      title: "✨ Anand Karaj & Celebrations",
      tagline: "Sacred Nuptials & Grand Feast",
      events: [
        {
          name: "✨ Anand karaj and celebrations",
          time: "10:00 AM",
          description: "The divine Sikh wedding ceremony around Sri Guru Granth Sahib Ji, followed by royal reception & feast.",
          icon: "Crown",
        },
      ],
    },
  ],
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
    title: "Sunehra (Phullaan Naal Sajjeya Jehda)",
    artist: "Lost Stories & Jai Dhir",
    movie: "Sunehra",
    youtubeUrl: "https://youtu.be/-GZ-eEozdIg?si=_vUc0h2qzl6uxNcw",
    youtubeId: "-GZ-eEozdIg",
    verses: [
      {
        part: "Stanza 1",
        lines: [
          "Phullaan naal sajjeya jehda",
          "Koyi aisa vehda hove",
          "Gaddi saadi jithe jaave",
          "Koyi dhol vaje te chann khidda hove",
        ],
      },
      {
        part: "Stanza 2",
        lines: [
          "Tere naal jodi saadi",
          "Rab ne banayi ae",
          "Khushiyan di rut aayi",
          "Shagna di shaam aayi ae",
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
      text: "Surrounded by loved ones, flowers, and holy blessings, Rounak and Pahul step into their forever.",
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
    src: "/photos/couple-heart-bench.jpg",
    alt: "Rounak and Pahul resting together on a heart-shaped wooden bench in a sunlit garden",
    caption: "A Love Built on Warmth & Togetherness",
    span: "sm:col-span-2",
    ratio: "aspect-[16/10]",
  },
  {
    src: "/photos/couple-garden-laughing.jpg",
    alt: "Rounak in green turban embracing Pahul laughing joyfully in pink dress",
    caption: "Laughter, Magic & Pure Happiness",
    span: "",
    ratio: "aspect-[3/4]",
  },
  {
    src: "/photos/couple-lanterns-twilight.jpg",
    alt: "Rounak and Pahul holding hands under string lights and rising lanterns",
    caption: "Under the Golden Lantern Skies",
    span: "",
    ratio: "aspect-square",
  },
  {
    src: "/photos/couple-palace-animated.jpg",
    alt: "A Regal Love Story — Rounak and Pahul on a palace terrace at sunset",
    caption: "A Regal Love Story · Rounak & Pahul",
    span: "sm:col-span-2",
    ratio: "aspect-[16/9]",
  },
  {
    src: "/photos/groom-animated.jpg",
    alt: "Animated groom portrait of Rounak Singh in royal ivory and gold sherwani",
    caption: "Rounak — Strength, patience & heart",
    span: "",
    ratio: "aspect-square",
  },
  {
    src: "/photos/bride-animated.jpg",
    alt: "Animated bridal portrait of Pahul Kaur in royal blush lehenga",
    caption: "Pahul — Endless creativity & warmth",
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
