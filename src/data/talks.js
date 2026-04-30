import voxxedZurich2026Image from './talks/voxxed-days-zurich-2026/index.jpg';

export const talks = [
  // 2026
  {
    slug: 'overcommitted-podcast-2026',
    type: 'podcast',
    title: 'Building Bulletproof Systems: Engineering for High Availability',
    conference: 'Overcommitted',
    location: null,
    date: '2026-04-07',
    eventUrl: 'https://overcommitted.dev/building-bulletproof-systems-warren-parad-on-software-engineering-for-high-availability/',
    articleUrl: null,
    canonicalUrl: 'https://overcommitted.dev/building-bulletproof-systems-warren-parad-on-software-engineering-for-high-availability/',
    videoUrl: null,
    videoTitle: null,
    description: `In this episode of the Overcommitted Podcast, hosts Bethany and Erika sit down with Warren Parad, CTO and co-founder of Authress, a user authorization API built for reliability. Warren shares how his team stayed fully operational during the massive AWS US-East-1 outage in October 2025 using DNS failover and multi-region strategies, and what the delayed alert logs taught them about timestamp trust.

The conversation kicks off with a candid discussion on AI agents and critical thinking, whether managing multiple coding agents is really multitasking or just micromanagement, and what the trade-offs mean for early-career engineers. Warren traces his reliability-first mindset back to his roots in electrical engineering and healthcare IT, where late-night on-call pages through Citrix proxies and hospital billing systems shaped how he thinks about uptime today. The group also explores what it really takes to build a Five Nines organization and how hiring practices need to match the reliability culture you want. The episode wraps up with a round of Never Have I Ever: SRE Edition, featuring Friday deploys gone wrong, blaming DNS, and discovering outages from customer tweets.`,
  },
  {
    slug: 'voxxed-days-zurich-2026',
    type: 'talk',
    title: 'Meeting Impossible SLAs: How we made our uptime 99.999%',
    conference: 'Voxxed Days',
    location: 'Zurich',
    date: '2026-03-19',
    eventUrl: 'https://vdz26.voxxeddays.ch/talk/?id=8065',
    articleUrl: 'https://authress.io/knowledge-base/articles/2025/11/01/how-we-prevent-aws-downtime-impacts',
    slidesUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vTPeeTwgC3TUl0dNynk7BBVcTIqxPEguahsuDBalcSlPpMaP1Fg8gH3RyWg2bl8BAC7g4YGsd3k8DLY/pub?start=false&loop=false&delayms=5000',
    canonicalUrl: null,
    videoUrl: 'https://youtu.be/ZSv6HHQjS2o?list=PLRsbF2sD7JVrH2IcCB1mdAUJMFr8ukKRS&t=1016',
    videoTitle: 'Voxxed Zurich — Meeting Impossible SLAs: How we made our uptime 99.999% by Warren Parad',
    imageUrl: voxxedZurich2026Image,
    description: `Here I'll share, how when our cloud provider was down, how we were still up. Running critical components requires a completely different mindset when the required uptime is five nines. Can a service even have a 99.999% uptime guarantee? It's easy to promise, but delivering on that is something else. What works at two or three nines can't work when components become critical. The math actually tells us this.

    You'll get a full review of how we managed to promise such a high up time, if it is even possible to make it happen, and how we think about it. From this talk attendees will learn key trade-offs in elevating the reliability of their solutions.

    Key Takeaways — The core components of a highly reliable solution, Lessons learned in the process, Architecture strategies to increase the reliability.`,
  },

  // 2025
  {
    slug: 'techtalkthursday-zurich-2025',
    type: 'talk',
    title: 'What the @#!? is Auth',
    conference: 'TechTalkThursday',
    location: 'Zurich',
    date: '2025-04-03',
    eventUrl: 'https://youtu.be/8_-QiLzNM7w?t=3627',
    articleUrl: 'https://authress.io/knowledge-base/academy/topics/implementating-user-login',
    canonicalUrl: null,
    videoUrl: 'https://youtu.be/8_-QiLzNM7w?t=3627',
    videoTitle: 'TechTalkThursdays',
    description: 'Auth is everywhere, but nobody really understands it. This talk demystifies the full auth ecosystem — tokens, OAuth, OIDC, WebAuthn — and gives developers a clear mental model without the jargon.',
  },
  {
    slug: 'tech-internals-berlin-2025',
    type: 'talk',
    title: 'What the @#!? is Auth',
    conference: 'Tech Internals',
    location: 'Berlin',
    date: '2025-05-26',
    eventUrl: 'https://internals.tech/berlin/2025/abstracts/10100',
    articleUrl: 'https://authress.io/knowledge-base/academy/topics/implementating-user-login',
    canonicalUrl: 'https://authress.io/knowledge-base/articles/2025/05/26/what-the-heck-is-auth',
    videoUrl: null,
    videoTitle: null,
    description: 'Authentication remains a complicated yet critical aspect of application security. In this talk, I demystify the core concepts, diving into access tokens, refresh tokens, and browser security mechanisms like WebAuthn for hardware-based authentication.',
  },
  {
    slug: 'l8conf-warsaw-2025',
    type: 'talk',
    title: 'Meeting Impossible SLAs: How we made our uptime 99.999%',
    conference: 'L8Conf',
    location: 'Warsaw',
    date: '2025-03-18',
    eventUrl: 'https://eventory.cc/event/l8-conference/schedule/99576',
    articleUrl: 'https://authress.io/knowledge-base/articles/2025/11/01/how-we-prevent-aws-downtime-impacts',
    canonicalUrl: 'https://authress.io/knowledge-base/articles/2025/03/18/meeting-impossible-slas',
    videoUrl: null,
    videoTitle: null,
    description: 'Running critical components requires a completely different mindset when the required uptime is five nines. Can a service even have a 99.999% uptime guarantee?',
  },

  // 2024
  {
    slug: 'aws-global-summit-zurich-2024',
    type: 'talk',
    title: 'Meeting SLAs: What it takes to be 99.999% reliable',
    conference: 'AWS Global Summit',
    location: 'Zurich',
    date: '2024-06-05',
    eventUrl: 'https://aws.amazon.com/events/summits/emea/zurich/agenda/?emea-event-agenda-card.q=Authress&emea-event-agenda-card.q_operator=AND',
    articleUrl: 'https://authress.io/knowledge-base/articles/2025/11/01/how-we-prevent-aws-downtime-impacts',
    canonicalUrl: 'https://authress.io/knowledge-base/articles/2024/09/04/aws-ensuring-reliability-of-authress',
    videoUrl: null,
    videoTitle: null,
    description: 'Authress has an expected 99.999% SLA. There can be many requirements for uptimes — regulatory needs, core dependencies, or your service offers life-saving responsibilities.',
  },
  {
    slug: 'dwx24-nuremberg-2024',
    type: 'talk',
    title: 'Why you Should Check Your Secrets Into Git',
    conference: 'DWX24',
    location: 'Nuremberg',
    date: '2024-07-02',
    eventUrl: 'https://www.developer-week.de/en/program/#/talk/why-you-should-check-your-secrets-into-git',
    articleUrl: 'https://authress.io/knowledge-base/academy/topics/credential-management',
    canonicalUrl: 'https://authress.io/knowledge-base/articles/2024/07/02/devweek-why-you-should-check-your-secrets-into-git',
    videoUrl: null,
    videoTitle: null,
    description: 'In any software that involves more than one user, you will have to deal with authentication. And when you have more than one service, you will have to deal with credentials. This talk makes the case for encrypted, auditable secrets in git.',
  },
  {
    slug: 'challenges-of-open-source',
    type: 'podcast',
    title: 'The Challenges of Open Source',
    conference: 'Adventures in DevOps Podcast',
    location: null,
    date: '2024-01-01',
    eventUrl: null,
    articleUrl: null,
    canonicalUrl: null,
    videoUrl: 'https://www.youtube.com/watch?v=exSYwiVKK88',
    videoTitle: 'The Challenges of Open Source',
    description: 'What happens when your project goes open source — the governance challenges, security responsibilities, community dynamics, and sustainability questions that nobody warns you about beforehand.',
  },
  {
    slug: 'techspot-warsaw-2024',
    type: 'talk',
    title: 'Build a Security-First API',
    conference: 'TechSpot',
    location: 'Warsaw',
    date: '2024-05-10',
    eventUrl: 'https://techspot.onthespotdev.com/cybersecurity-focused-techspot',
    articleUrl: 'https://authress.io/knowledge-base/articles/2024/05/10/techspot-building-security-first-apis',
    canonicalUrl: 'https://authress.io/knowledge-base/articles/2024/05/10/techspot-building-security-first-apis',
    videoUrl: null,
    videoTitle: null,
    description: 'Embrace a security-first mindset in API development to proactively prevent malicious attacks. Learn how to integrate fundamental security building blocks, authenticate requests, validate access control, implement secure communication channels, identify potentially dangerous actors, and dynamically prevent attacks as they happen.',
  },
  {
    slug: 'decompiled-dresden-2024',
    type: 'talk',
    title: 'Adding security to your architecture and mindset',
    conference: 'Decompiled',
    location: 'Dresden',
    date: '2024-03-08',
    eventUrl: 'https://decompiled.de/schedule',
    articleUrl: 'https://authress.io/knowledge-base/articles/2024/03/08/decompiled-adding-security-to-your-architecture',
    canonicalUrl: 'https://authress.io/knowledge-base/articles/2024/03/08/decompiled-adding-security-to-your-architecture',
    videoUrl: null,
    videoTitle: null,
    description: 'It\'s easy to make security an all-or-nothing approach. Many architectures thrive in delivering the perfect product vision while others attempt to deliver something quickly. Often what gets lost is attention to security in a race to deliver the best architecture for the best product.',
  },
  {
    slug: 'fosdem-brussels-2024',
    type: 'talk',
    title: 'Stopping all the attacks',
    conference: 'FOSDEM',
    location: 'Brussels',
    date: '2024-02-04',
    eventUrl: 'https://fosdem.org/2024/schedule/event/fosdem-2024-2352-stopping-all-the-attacks-before-they-start-building-a-security-first-api/',
    articleUrl: 'https://authress.io/knowledge-base/articles/2024/02/04/fosdem-building-security-first-apis',
    canonicalUrl: 'https://authress.io/knowledge-base/articles/2024/02/04/fosdem-building-security-first-apis',
    videoUrl: 'https://www.youtube.com/watch?v=xLjxbX0hbPo',
    videoTitle: 'Building Security First APIS',
    description: 'Embrace a security-first mindset in API development to proactively prevent malicious attacks. Learn how to integrate fundamental security building blocks, authenticate requests, validate access control, identify potentially dangerous actors, and dynamically prevent attacks as they happen.',
  },

  // 2023
  {
    slug: 'codemotion-madrid-2023',
    type: 'talk',
    title: 'Why you should check your secrets into Git',
    conference: 'Codemotion',
    location: 'Madrid',
    date: '2023-10-12',
    eventUrl: 'https://extra.codemotion.com/ma23ce-agenda/',
    articleUrl: 'https://authress.io/knowledge-base/academy/topics/credential-management',
    canonicalUrl: 'https://authress.io/knowledge-base/articles/2023/07/11/codemotion-why-you-should-check-your-secrets-into-git',
    videoUrl: 'https://www.youtube.com/watch?v=hccFB6uqTIE',
    videoTitle: 'Adding Security to your Architecture',
    description: 'In any software that involves more than one user, you will have to deal with authentication. And when you have more than one service, you will have to deal with credentials. This talk makes the case that git — done right — is the best place for them.',
  },
  {
    slug: 'codemotion-milan-2023',
    type: 'talk',
    title: 'Why you should check your secrets into Git',
    conference: 'Codemotion',
    location: 'Milan',
    date: '2023-11-23',
    eventUrl: 'https://conferences.codemotion.com/milan2023-live/agenda/',
    articleUrl: 'https://authress.io/knowledge-base/academy/topics/credential-management',
    canonicalUrl: 'https://authress.io/knowledge-base/articles/2023/07/11/codemotion-why-you-should-check-your-secrets-into-git',
    videoUrl: null,
    videoTitle: null,
    description: 'Every team eventually wrestles with secrets management. This talk makes the case that git — with proper tooling and encryption — is actually the best place to keep them, and shows you how.',
  },

  // 2022
  {
    slug: 'agile-meets-architecture-berlin-2022',
    type: 'talk',
    title: 'Adding security to your architecture one step at a time',
    conference: 'Agile Meets Architecture',
    location: 'Berlin',
    date: '2022-09-11',
    eventUrl: 'https://www.agile-meets-architecture.com/2022/sessions/add-security-to-architecture-one-step-at-a-time',
    articleUrl: 'https://authress.io/knowledge-base/articles/2022/09/11/agile-architecture-adding-security-to-your-architecture',
    canonicalUrl: 'https://authress.io/knowledge-base/articles/2022/09/11/agile-architecture-adding-security-to-your-architecture',
    videoUrl: 'https://www.youtube.com/watch?v=hccFB6uqTIE',
    videoTitle: 'Adding Security to your Architecture',
    description: 'Security and agile delivery don\'t have to be in tension. This talk presents a practical, incremental approach to hardening your architecture without pausing feature development or creating a separate security track.',
  },
];

function youtubeVideoId(videoUrl) {
  if (!videoUrl) { return null; }
  const url = new URL(videoUrl);
  const isShort = url.hostname === 'youtu.be';
  return isShort ? url.pathname.slice(1) : url.searchParams.get('v');
}

function youtubeEmbedUrl(videoUrl, { keepParams = false } = {}) {
  if (!videoUrl) { return null; }
  const url = new URL(videoUrl);
  const isShort = url.hostname === 'youtu.be';
  const videoId = youtubeVideoId(videoUrl);
  if (!videoId) { return null; }
  if (!keepParams) { return `https://www.youtube.com/embed/${videoId}`; }

  if (!isShort) { url.searchParams.delete('v'); }
  const embedParams = new URLSearchParams(isShort ? url.search : url.searchParams);
  const t = embedParams.get('t');
  if (t) { embedParams.delete('t'); embedParams.set('start', t); }
  const query = embedParams.toString() ? `?${embedParams}` : '';
  return `https://www.youtube.com/embed/${videoId}${query}`;
}

talks.sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));

export const featuredTalks = talks
  .filter(t => t.type === 'talk' && t.videoUrl)
  .map(t => ({ ...t, embedUrl: youtubeEmbedUrl(t.videoUrl, { keepParams: true }) }));

export { youtubeEmbedUrl, youtubeVideoId };
