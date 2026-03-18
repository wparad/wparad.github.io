export const talks = [
  // 2026
  {
    slug: 'voxxed-days-zurich-2026',
    title: 'Meeting Impossible SLAs: How we made our uptime 99.999%',
    conference: 'Voxxed Days',
    location: 'Zurich',
    year: 2026,
    eventUrl: 'https://vdz26.voxxeddays.ch/talk/?id=8065',
    articleUrl: null,
    videoUrl: null,
    videoTitle: null,
  },

  // 2025
  {
    slug: 'techtalkthursday-zurich-2025',
    title: 'What the @#!? is Auth',
    conference: 'TechTalkThursday',
    location: 'Zurich',
    year: 2025,
    eventUrl: 'https://youtu.be/8_-QiLzNM7w?t=3627',
    articleUrl: null,
    videoUrl: null,
    videoTitle: null,
  },
  {
    slug: 'tech-internals-berlin-2025',
    title: 'What the @#!? is Auth',
    conference: 'Tech Internals',
    location: 'Berlin',
    year: 2025,
    eventUrl: null,
    articleUrl: 'https://authress.io/knowledge-base/articles/2025/05/26/what-the-heck-is-auth',
    videoUrl: null,
    videoTitle: null,
  },
  {
    slug: 'l8conf-warsaw-2025',
    title: 'Meeting Impossible SLAs: How we made our uptime 99.999%',
    conference: 'L8Conf',
    location: 'Warsaw',
    year: 2025,
    eventUrl: null,
    articleUrl: 'https://authress.io/knowledge-base/articles/2025/03/18/meeting-impossible-slas',
    videoUrl: null,
    videoTitle: null,
  },

  // 2024
  {
    slug: 'aws-global-summit-zurich-2024',
    title: 'Meeting SLAs: What it takes to be 99.999% reliable',
    conference: 'AWS Global Summit',
    location: 'Zurich',
    year: 2024,
    eventUrl: null,
    articleUrl: 'https://authress.io/knowledge-base/articles/2024/09/04/aws-ensuring-reliability-of-authress',
    videoUrl: null,
    videoTitle: null,
  },
  {
    slug: 'dwx24-nuremberg-2024',
    title: 'Why you Should Check Your Secrets Into Git',
    conference: 'DWX24',
    location: 'Nuremberg',
    year: 2024,
    eventUrl: null,
    articleUrl: 'https://authress.io/knowledge-base/articles/2024/07/02/devweek-why-you-should-check-your-secrets-into-git',
    videoUrl: null,
    videoTitle: null,
  },
  {
    slug: 'techspot-warsaw-2024',
    title: 'Build a Security-First API',
    conference: 'TechSpot',
    location: 'Warsaw',
    year: 2024,
    eventUrl: null,
    articleUrl: 'https://authress.io/knowledge-base/articles/2024/05/10/techspot-building-security-first-apis',
    videoUrl: null,
    videoTitle: null,
  },
  {
    slug: 'codemotion-madrid-2024',
    title: 'Build a Security-First API',
    conference: 'Codemotion',
    location: 'Madrid',
    year: 2024,
    eventUrl: 'https://conferences.codemotion.com/madrid2024/en/speakers/',
    articleUrl: null,
    videoUrl: null,
    videoTitle: null,
  },
  {
    slug: 'decompiled-dresden-2024',
    title: 'Adding security to your architecture and mindset',
    conference: 'Decompiled',
    location: 'Dresden',
    year: 2024,
    eventUrl: null,
    articleUrl: 'https://authress.io/knowledge-base/articles/2024/03/08/decompiled-adding-security-to-your-architecture',
    videoUrl: null,
    videoTitle: null,
  },
  {
    slug: 'fosdem-brussels-2024',
    title: 'Stopping all the attacks',
    conference: 'FOSDEM',
    location: 'Brussels',
    year: 2024,
    eventUrl: null,
    articleUrl: 'https://authress.io/knowledge-base/articles/2024/02/04/fosdem-building-security-first-apis',
    videoUrl: 'https://www.youtube.com/watch?v=xLjxbX0hbPo',
    videoTitle: 'Building Security First APIS',
  },

  // 2023
  {
    slug: 'codemotion-madrid-2023',
    title: 'Why you should check your secrets into Git',
    conference: 'Codemotion',
    location: 'Madrid',
    year: 2023,
    eventUrl: null,
    articleUrl: 'https://authress.io/knowledge-base/articles/2023/07/11/codemotion-why-you-should-check-your-secrets-into-git',
    videoUrl: null,
    videoTitle: null,
  },
  {
    slug: 'codemotion-milan-2023',
    title: 'Why you should check your secrets into Git',
    conference: 'Codemotion',
    location: 'Milan',
    year: 2023,
    eventUrl: null,
    articleUrl: null,
    videoUrl: 'https://www.youtube.com/watch?v=bwpoo2bJWaQ',
    videoTitle: 'Why you should check your secrets into Git',
  },

  // 2022
  {
    slug: 'agile-meets-architecture-berlin-2022',
    title: 'Adding security to your architecture one step at a time',
    conference: 'Agile Meets Architecture',
    location: 'Berlin',
    year: 2022,
    eventUrl: null,
    articleUrl: 'https://authress.io/knowledge-base/articles/2024/03/08/decompiled-adding-security-to-your-architecture',
    videoUrl: 'https://www.youtube.com/watch?v=hccFB6uqTIE',
    videoTitle: 'Adding Security to your Architecture',
  },

  // Other recordings
  {
    slug: 'challenges-of-open-source',
    title: 'The Challenges of Open Source',
    conference: '',
    location: '',
    year: null,
    eventUrl: null,
    articleUrl: null,
    videoUrl: 'https://www.youtube.com/watch?v=exSYwiVKK88',
    videoTitle: 'The Challenges of Open Source',
  },
];

function youtubeEmbedUrl(videoUrl) {
  if (!videoUrl) { return null; }
  const match = videoUrl.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

export const featuredTalks = talks
  .filter(t => t.videoUrl)
  .map(t => ({ ...t, embedUrl: youtubeEmbedUrl(t.videoUrl) }));

export { youtubeEmbedUrl };
