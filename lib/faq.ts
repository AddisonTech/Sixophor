export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "How long does a project take?",
    answer:
      "Most small business sites take two to four weeks from deposit to launch, depending on scope and how quickly content and feedback come back. Bigger builds take longer. Either way, the scope of work includes a real timeline before you commit.",
  },
  {
    question: "How does payment work?",
    answer:
      "50% deposit to start, 50% at handoff. The deposit locks in your spot on the schedule. No surprise charges: if you ask for something outside the agreed scope, I quote it separately before doing the work.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Whatever you already have: logo, photos, text, examples of sites you like. If you're missing pieces, branding and copy help is part of what I do. After kickoff, the main thing I need is feedback at the revision checkpoints.",
  },
  {
    question: "What happens after launch?",
    answer:
      "You own everything: the code, the accounts, the domain. I hand off final files and a walkthrough. If you'd rather not think about hosting, updates, and backups, a maintenance retainer is available, but it's optional.",
  },
  {
    question: "Can you improve my existing site instead of building new?",
    answer:
      "Yes. Redesigns, front end rebuilds, speed and SEO fixes, or adding features to what you have are all fair game. We scope it the same way as a new build.",
  },
  {
    question: "Do you only work with local businesses?",
    answer:
      "No. I'm based in Upstate South Carolina and happy to meet local clients in person, but everything about the process works remotely, so location is never a blocker.",
  },
];
