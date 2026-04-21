export type HomeBlogEntry = {
  title: string;
  href: string;
  ariaLabel: string;
  publishDate: string;
  year: string;
  summary: string[];
};

export type HomeProjectEntry = {
  title: string;
  releaseDate: string;
  summary: string[];
  liveUrl: string;
  repoUrl: string;
  installCommand?: string;
};

export const blogs: HomeBlogEntry[] = [
  {
    title: "Learn How to Learn",
    href: "/blogs/learn-how-to-learn",
    ariaLabel: "navigate to the Learn How to Learn article",
    publishDate: "April 21, 2026",
    year: "2026",
    summary: [
      "Everyone wants to get better at stuff. But, from my experience, not many people actually have a concrete way of doing it.",
      "This is a simple framework for learning in a structured way, especially in a world where it's easy to let AI do the thinking for you.",
    ],
  },
  {
    title: "Keeping Your Software Project Maintainable",
    href: "/blogs/keeping-your-software-project-maintainable",
    ariaLabel:
      "navigate to the Keeping Your Software Project Maintainable article",
    publishDate: "February 18th, 2026",
    year: "2026",
    summary: [
      "Writing great software is hard. Building systems that solve real problems is hard. So, when you're embarking on any software journey, there is a concept called conceptual complexity. Put simply, it's the idea that the more \"concepts\" you introduce into a system, the more complex it gets.",
      "When you're building great software, there are a few principles that you can abide by that will make your, and your colleagues', lives easier.",
    ],
  },
  {
    title: "OAuth Sucks",
    href: "/blogs/oauth-sucks",
    ariaLabel: "navigate to the OAuth Sucks article",
    publishDate: "February 17th, 2026",
    year: "2026",
    summary: [
      "OAuth is the biggest pile of crap and any security benefits that there might be are vastly out-matched by the constant annoyance that is using it.",
      "What I love in my life is whenever I try and log into a website, I have to play this game where I have to figure out, \"which OAuth provider did I create an account with?\"",
    ],
  },
  {
    title: "Responsibility and Agency - How to build great internal processes",
    href: "/blogs/great-internal-processes",
    ariaLabel:
      "navigate to the Responsibility and Agency - How to build great internal processes article",
    publishDate: "Febuary 5th, 2026",
    year: "2026",
    summary: [
      "At any company, you'll end up having to have jobs that \"keep the lights on\". This is common and to be expected. Much the same as when you own a home, someone's gotta do the dishes.",
      "There is a common dysfunction that occurs in companies though, which doesn't usually happen at home. People end up getting an ever-growing set of responsibilities, without an equivalently growing agency to do them.",
    ],
  },
  {
    title: "Importing a database via a .bacpac file on MacOS",
    href: "/blogs/bacpac-via-sqlpackage",
    ariaLabel:
      "navigate to the Importing a database via a .bacpac file on MacOS article",
    publishDate: "December 23, 2025",
    year: "2025",
    summary: [
      "As a .NET developer working on MacOS, you'll likely run into a situation where you're trying to use a backed up version of your SQLServer database and do some testing. But, you'll find that the current release of VSCode's MSSQL package doesn't support .bacpac imports right now.",
    ],
  },
  {
    title: "Advanced Deck-building Guide: Fast Brewing",
    href: "/blogs/fast-brew",
    ariaLabel: "navigate to the Advanced Deck-building: Fast Brew article",
    publishDate: "December 29, 2024",
    year: "2024",
    summary: [
      "Have you ever had a moment where you find a commander and you think it's cool but you're not sure if there will be enough cards available to make the deck run smoothly, or you weren't sure if it will feel good to play so you've not wanted to waste time brewing up a 100-card deck?",
      "In this guide, I'm going to show you how you can dramatically reduce the time it takes to test out a deck idea or even just a commander.",
    ],
  },
  {
    title: "Build your first Magic: The Gathering - Commander deck",
    href: "/blogs/first-commander-deck",
    ariaLabel: "navigate to the Build your first commander deck article",
    publishDate: "September 29, 2024",
    year: "2024",
    summary: [
      "Building your first Commander deck can be both exciting and overwhelming. With thousands of cards to choose from and countless strategies to explore, it's easy to feel lost.",
      "This guide is designed to help new players step into the world of Commander with a simple framework they can refine over time.",
    ],
  },
  {
    title: "Learning Rust",
    href: "/blogs/rust-game",
    ariaLabel: "navigate to Learning Rust blog post",
    publishDate: "December 10, 2023",
    year: "2023",
    summary: [
      "Starting out in the industry there's been one thing I've heard continually: Rust is cool, and you should learn it. So, after endless nagging by a few colleagues and the swathes of social media that pushes it, I've made the plunge.",
    ],
  },
];

export const projects: HomeProjectEntry[] = [
  {
    title: "TwentyTwenty",
    releaseDate: "March 19, 2026",
    summary: [
      "A retrospective web app for teams. Run retro sessions with your project members, collect feedback, vote on items, bundle themes, assign actions, and hold each other accountable in the next session's review phase.",
      "Built to help teams turn retros into a rhythm instead of a one-off conversation.",
    ],
    liveUrl: "https://twentytwenty.dev",
    repoUrl: "https://github.com/SamBWagner/twenty-twenty",
  },
  {
    title: "Braeburn",
    releaseDate: "February 23, 2026",
    summary: [
      "A macOS system updater CLI that keeps tools installed via Homebrew, npm, pip, .NET, and others up to date.",
      "Built for keeping a Mac development toolchain current without turning updates into a manual chore.",
    ],
    liveUrl: "https://github.com/SamBWagner/braeburn",
    repoUrl: "https://github.com/SamBWagner/braeburn",
    installCommand: "npm install -g braeburn",
  },
];

export function parseDisplayDate(dateString: string) {
  return new Date(dateString.replace(/(\d+)(st|nd|rd|th)/g, "$1"));
}
