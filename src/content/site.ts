export const site = {
  name: "Nathanael Nienaber",
  title: "Nathanael Nienaber",
  description:
    "Personal story of Nathanael Nienaber — from a small-business dinner table to technology leadership, founder lessons, and a return to operator-led ownership.",
  location: "Bellevue, Washington",
  heroHook: "I was raised at a dinner table that doubled as a boardroom.",
  email: "nnienaber@protonmail.com",
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
        "I grew up middle-class. My father owned a small landscaping company, and every night we sat around a table where payroll, customers, equipment breakdowns, and wins were discussed like weather — constant, real, unavoidable.",
        "That table was my first classroom in entrepreneurship. I learned that owning a business is not a lifestyle brand. It is late invoices and early mornings. It is pride in work done well and the quiet stress of making payroll. Over the years, I worked every role in his operation, from the ground up. I didn't study business from a distance. I lived it.",
      ],
    },
    {
      id: "mission",
      title: "The mission",
      paragraphs: [
        "Somewhere in those years, the mission became clear: I would become a small business owner — but better and bigger.",
        "I was the first in my immediate and extended family to graduate college. I left with a business degree and something no classroom could teach: the practical wisdom of watching a real operator navigate real problems. I had the theory. I had the table.",
      ],
    },
    {
      id: "learning-to-sell",
      title: "Learning to sell",
      paragraphs: [
        "Good advice came early: if you want to own a business, learn how revenue actually gets made.",
        "So I did. I spent years in medical device sales and manufacturer representation — multi-state territories, quotas, clinical environments, long sales cycles. I learned to listen, to qualify, to close, and to carry a number. I got married. My wife and I pursued our graduate degrees side by side — hers and mine, in parallel, while life kept moving.",
        "Revenue wasn't a chapter I skipped on the way to something more respectable. It was the foundation.",
      ],
    },
    {
      id: "ghostruck",
      title: "Ghostruck",
      paragraphs: [
        "Early in my MBA, I pivoted hard. A planned service business became Ghostruck — on-demand moving, think Uber for trucks. We raised $3M, expanded nationwide, and for a moment it felt like the mission was happening in real time.",
        "Then regulatory complexity caught up with velocity. Ghostruck was shut down — not because the market wasn't there, but because scale and compliance don't always arrive on the same schedule. I didn't walk away with a neat success story. I walked away with something more useful: a firsthand education in what breaks when ambition outruns structure.",
      ],
    },
    {
      id: "reset",
      title: "The reset",
      paragraphs: [
        "After Ghostruck, I chased other startup ideas. Then life intervened — severe health challenges that forced a different kind of honesty. I needed stability. I needed to be close to home.",
        "That led me to Boeing — seven minutes from my front door — for five years that reshaped how I think about technology at scale. I served as Chief of Staff to the Chief Data Officer and led cloud efforts behind Autonomy Hub, hosting autonomous research on infrastructure that couldn't afford to fail. I thrived in that environment: high stakes, high complexity, real consequences.",
        "Until the industry shifted, and layoffs came — fourth round, mine included.",
      ],
    },
    {
      id: "today",
      title: "Today",
      paragraphs: [
        "The timing, in its own way, was fortunate. My health fully recovered. The layoff didn't end the story — it turned the page back toward the beginning.",
        "Today I'm doing two things at once — on purpose. Through tmrw LLC, I consult on IT, technology, and modernization: helping teams fix legacy systems, adopt cloud and automation, and ship product that holds up in production.",
        "In parallel, I'm running a Self-Funded Search to acquire and operate a small or medium-sized business in Washington — using Attuned Holdings LLC as the legal vehicle. That's the long game I set at my father's dinner table, now backed by enterprise-scale discipline and founder grit.",
        "Same person. Two tracks. One direction: own and operate — but better and bigger.",
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
    name: "tmrw",
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
