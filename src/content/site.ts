export const site = {
  name: "Nathanael Nienaber",
  title: "Nathanael Nienaber",
  description:
    "Personal story of Nathanael Nienaber — from a small-business dinner table to technology leadership, founder lessons, and a return to operator-led ownership.",
  location: "Bellevue, Washington",
  heroHook: "I was raised at a dinner table that doubled as a boardroom.",
  email: "nathanaelnienaber@protonmail.com",
  links: {
    linkedin: "https://linkedin.com/in/nnienaber",
    github: "https://github.com/nathanaelnienaber",
  },
} as const;

export const story = {
  chapters: [
    {
      id: "dinner-table",
      title: "The dinner table",
      paragraphs: [
        "I grew up middle-class where my father owned a small landscaping company. The nightly dinner table was my first classroom in entrepreneurship and a place where I learned the difficulties and joys of owning a business firsthand. Over the years, I worked every role within his operation from the ground up.",
      ],
    },
    {
      id: "mission",
      title: "The mission",
      paragraphs: [
        "My mission became clear to become a small business owner but better and bigger. As the first in my immediate and extended family to graduate college, I armed myself with a Business Degree and the practical wisdom gained from working alongside my father. Following advice to master revenue generation, I honed my skills in medical device sales and manufacturer representation. During this time, I also got married and pursued my Master's degree alongside my wife.",
      ],
    },
    {
      id: "ghostruck",
      title: "Ghostruck",
      paragraphs: [
        "Early in my Master's program, I pivoted from a planned service business to a service-tech venture called Ghostruck in the on-demand moving space. Think Uber but for trucks. We successfully raised $3M and expanded nationwide before the company was shut down due to complex regulatory hurdles. That experience taught me valuable lessons about scale and compliance.",
      ],
    },
    {
      id: "reset",
      title: "The reset",
      paragraphs: [
        "Following Ghostruck, I explored several other startup concepts. However, severe health challenges required me to stabilize my life and secure a role close to home. This led to five impactful years at Boeing. Situated just seven minutes from my front door, I served as Chief of Staff to the Chief Data Officer and led cloud efforts to host autonomous research in the Autonomy Hub. I thrived there, contributing to high-stakes innovation until the shifting landscape of aviation led to layoffs during the fourth round of cuts.",
      ],
    },
    {
      id: "today",
      title: "Today",
      paragraphs: [
        "Fortunately, coinciding with the layoff, our health troubles fully resolved. Today, I am back and ready to merge my deep expertise in technology and large-scale operations with my original passion for owning and operating small to medium-sized businesses. I consult on IT, technology, and modernization through tmrw LLC while I conduct a Self-Funded Search to acquire and operate a business in Washington through Attuned Holdings LLC. I bring the discipline of a corporate leader, the grit of a founder, and the heart of a small-business son.",
      ],
    },
  ],
} as const;

export const doors = [
  {
    name: "Attuned Holdings",
    href: "https://attunedholdings.com",
    label: "Self-Funded Search",
    description:
      "Acquisition criteria, operator approach, and how to reach me about deal flow in Washington.",
    cta: "Visit attunedholdings.com",
  },
  {
    name: "tmrw llc",
    href: "https://tmrw.it",
    label: "Consulting",
    description:
      "IT, tech, and modernization consulting through tmrw LLC while I search.",
    cta: "Visit tmrw.it",
  },
  {
    name: "studio.tmrw",
    href: "https://studio.tmrw.it",
    label: "Builds",
    description:
      "Projects, experiments, and things I've built under tmrw LLC.",
    cta: "Visit studio.tmrw.it",
  },
] as const;
