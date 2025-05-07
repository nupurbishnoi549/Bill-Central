import Card1 from '../assets/images/webp/Card1.webp';
import Card2 from '../assets/images/webp/Card2.webp';
import Card3 from '../assets/images/webp/Card3.webp';
import Card4 from '../assets/images/webp/Card4.webp';

export const HEADER_LIST = [
    {
        item: 'About',
        link: '#about'
    },
    {
        item: 'How It Works',
        link: '#how-it-works'
    },
    {
        item: 'Services',
        link: '#services'
    },
    {
        item: 'Testimonials',
        link: '#testimonials'
    },
    {
        item: 'Why Us',
        link: '#why-us'
    },
    {
        item: 'FAQ',
        link: '#faq'
    },
];

export const LOGOS = [
    { src: 'src/assets/images/webp/first-energy-logo.webp', alt: 'first-energy' },
    { src: 'src/assets/images/webp/blue-nrg-logo.webp', alt: 'blue-nrg' },
    { src: 'src/assets/images/webp/dodo-logo.webp', alt: 'dodo-logo' },
    { src: 'src/assets/images/webp/origin-logo.webp', alt: 'origin-logo' },
    { src: 'src/assets/images/webp/ovo-logo.webp', alt: 'ovo-logo' },
    { src: 'src/assets/images/webp/sumo-logo.webp', alt: 'sumo-logo' },
    { src: 'src/assets/images/webp/agl-logo.webp', alt: 'agl-logo' },
];

export const BENEFITS = [
    'Save money by finding cheaper deals.',
    'Get better customer service.',
    'Explore greener, more sustainable energy options.',
];

export const SIMPLE_STEPS_LIST = [
    {
        stepImg: Card1,
        alt: 'step-location',
        imgContent: '1. Enter Your Location and Preferences',
        heading: '1. Your Location',
        description: 'Enter your location and preferences to find the best energy, gas, and internet plans for you.'
    },
    {
        stepImg: Card2,
        alt: 'step-compare',
        imgContent: '2. Compare Providers',
        heading: '2. Compare',
        description: 'Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget consectetur mi. Vulputate sapien a a bibendum'
    },
    {
        stepImg: Card3,
        alt: 'step-switch-easily',
        imgContent: '3. Switch Easily',
        heading: '3. Switch Easily',
        description: 'Complete the process in just a few clicks. We’ll handle the rest and ensure a smooth transition to your new provider.'
    },
    {
        stepImg: Card4,
        alt: 'step-best-plan',
        imgContent: '4. Choose the Best Plan',
        heading: '4. Best Plan',
        description: 'Enter your location and preferences to find the best energy, gas, and internet plans for you.'
    },
];
export const planComparisons = [
    {
        id: 1,
        title: 'Electricity Plan Comparisons',
        description: "Whether you want renewable energy, low rates, or flexible contracts, we'll help you find the best provider.",
        imgSrc: 'src/assets/images/svg/electricity.svg',
        marginClass: 'ml-[106px] max-xl:ml-[53px] max-sm:ml-0 max-lg:ml-[253px]',
    },
    {
        id: 2,
        title: 'Gas Plan Comparisons',
        description: 'Compare gas plans to find the best rates and providers for your needs.',
        imgSrc: 'src/assets/images/svg/gas.svg',
        marginClass: 'ml-[163px] max-xl:ml-[113px] max-sm:ml-[11px] max-lg:ml-[313px]',
    },
    {
        id: 3,
        title: 'Internet Plan Comparisons',
        description: 'Find the best internet plans with fast speeds and great customer support.',
        imgSrc: 'src/assets/images/svg/interplan.svg',
        marginClass: 'ml-[127px] max-xl:ml-[78px] max-sm:ml-0 max-lg:ml-[277px]',
    },
    {
        id: 4,
        title: 'Bundle Packages',
        description: 'Get the best value by bundling utilities and services together.',
        imgSrc: 'src/assets/images/svg/bundle.svg',
        marginClass: 'ml-[220px] max-xl:ml-[175px] max-sm:ml-[61px] max-lg:ml-[375px]',
    },
];
export const cardData = [
    {
        id: 1,
        icon: 'src/assets/images/svg/starlike.svg',
        title: 'Tailored Recommendations',
        description:
            'Our platform analyzes your unique energy needs and preferences to suggest the best utility providers, ensuring you get the most personalized options available.',
        isBlueBackground: true,
    },
    {
        id: 2,
        icon: 'src/assets/images/svg/simplified.svg',
        title: 'Simplified Comparison Process',
        description:
            'Our intuitive platform lets you compare the best utility providers in one place, helping you make a quick and informed decision.',
    },
    {
        id: 3,
        icon: 'src/assets/images/svg/time.svg',
        title: 'Save Time and Money',
        description:
            'With up-to-date plans and pricing, you can be sure you’re getting the most competitive rates available.',
    },
    {
        id: 4,
        icon: 'src/assets/images/svg/no-service.svg',
        title: 'No Service Interruptions',
        description:
            'We take care of the entire switching process so you can enjoy a hassle-free experience with zero downtime.',
    },
    {
        id: 5,
        icon: 'src/assets/images/svg/support.svg',
        title: 'Comprehensive Support',
        description:
            'Whether you need assistance selecting a plan or during the switch, our dedicated support team is here to help every step of the way.',
    },
];

export const testimonialsData = [
    {
        name: 'Camron',
        username: '@cameron',
        image: 'src/assets/images/svg/cameron.svg',
        ratingImage: 'src/assets/images/svg/five-star.svg',
        text: 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio adipiscing elit vitae vestibulum vestibulum.'
    },
    {
        name: 'Ronald',
        username: '@ronald',
        image: 'src/assets/images/svg/ronald.svg',
        ratingImage: 'src/assets/images/svg/five-star.svg',
        text: 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio adipiscing elit vitae vestibulum vestibulum.'
    },
    {
        name: 'Jay Shah',
        username: '@jayshah',
        image: 'src/assets/images/svg/jay-shah.svg',
        ratingImage: 'src/assets/images/svg/five-star.svg',
        text: 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio adipiscing elit vitae vestibulum vestibulum.'
    },
    {
        name: 'Ronald',
        username: '@ronald',
        image: 'src/assets/images/svg/ronald.svg',
        ratingImage: 'src/assets/images/svg/five-star.svg',
        text: 'Lorem adipis cing elit ipsum dolor sit amet, consectetur adipis cing elit. Vivamus lacinia odio adipiscing elit vitae vestibulum vestibulum.'
    },
];

export const faqData = [
    {
        id: 1,
        question: "Can I switch providers if I’m currently in a contract?",
        answer:
            "Yes, but some contracts may include exit fees. We can guide you through the terms of your current plan and help you determine if switching now makes sense for you.",
    },
    {
        id: 2,
        question: "Will my service be interrupted if I switch providers?",
        answer:
            "Switching is usually seamless, but we recommend coordinating the changeover to avoid any downtime.",
    },
    {
        id: 3,
        question: "How long does it take to switch providers?",
        answer:
            "It typically takes 1–3 business days depending on your location and provider.",
    },
    {
        id: 4,
        question: "Is there a fee for switching providers?",
        answer:
            "Some providers may charge a small fee. Check with both your current and new provider for specifics.",
    },
];

export const quickLinks = [
    "About",
    "How It Works",
    "Services",
    "Testimonials",
    "Why Us",
    "FAQ",
];
export const servicesData = [
    "Privacy Policy",
    "Terms of Services",
];
