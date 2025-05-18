import type { NavigationItem } from '../client/components/NavBar/NavBar';
import { routes } from 'wasp/client/router';
import { DocsUrl, BlogUrl } from '../shared/common';
import daBoiAvatar from '../client/static/da-boi.webp';
import avatarPlaceholder from '../client/static/avatar-placeholder.webp';

export const landingPageNavigationItems: NavigationItem[] = [
  { name: 'Home', to: '#home' },
  { name: 'Features', to: '#features' },
  { name: 'Pricing', to: routes.PricingPageRoute.to },
  { name: 'Our Users', to: '#testimonials' },
  { name: 'FAQ', to: '#faqs' },
];
export const features = [
  {
    name: 'Seamless Auth',
    description: 'Login securely using your email or Google account — fast, simple, and secure.',
    icon: '🔐',
    href: DocsUrl,
  },
  {
    name: 'AI-Powered To-Do',
    description: 'Get personalized task suggestions, prioritization, and productivity tips — all powered by AI.',
    icon: '🤖',
    href: DocsUrl,
  },
  {
    name: 'Smart Pricing',
    description: 'Flexible subscription plans with secure Stripe payments. Upgrade when you\'re ready.',
    icon: '💸',
    href: DocsUrl,
  },
  {
    name: 'Content Management',
    description: 'Easily manage your tasks, notes, and lists in one intuitive dashboard',
    icon: '📋',
    href: DocsUrl,
  },
];
export const testimonials = [
  {
    name: 'Alex T.',
    role: 'Dev Who Hates Planning',
    avatarSrc: daBoiAvatar,
    socialUrl: 'https://twitter.com/wasplang',
    quote: 'I’ve tried dozens of productivity tools — this is the only one that doesn’t feel like work.'
  },
  {
    name: 'Mr. Foobar',
    role: 'Founder @ Neurodivergent Creator',
    avatarSrc: avatarPlaceholder,
    socialUrl: '',
    quote: 'Finally, an app that understands how my brain works. The AI suggestions are scary good',
  },
  {
    name: 'Jamie',
    role: 'Freelancer & Cat Dad',
    avatarSrc: avatarPlaceholder,
    socialUrl: '#',
    quote: '“This thing reminds me of tasks before I forget them. Even my cat’s impressed',
  },
];

export const faqs = [
  {
    id: 1,
    question: 'Is this really free to use?',
    answer: 'Yup. 100% free. No hidden costs, no strings attached.',
    href: '#',
  },
  {
    id: 2,
    question: 'Can I use this for my startup?',
    answer: 'Absolutely. We love startups — go build something amazing',
    href: '#',
  },
  {
    id: 3,
    question: ' Does it support dark mode?',
    answer: 'Not just support — it was born in dark mode',
    href: '#',
  },
  {
    id: 4,
    question: '  Will this make me more productive?',
    answer: ' We can’t promise miracles, but users say it feels like one',
    href: '#',
  },
  {
    id: 5,
    question: 'Is my data safe with you?',
    answer: ' Your data is encrypted and we never sell it. Privacy matters.',
    href: '#',
  },
];
export const footerNavigation = {
  app: [
    { name: 'Documentation', href: DocsUrl },
    { name: 'Blog', href: BlogUrl },
  ],
  company: [
    { name: 'About', href: 'https://wasp.sh' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
};
