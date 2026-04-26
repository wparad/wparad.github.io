import HomePage from './pages/HomePage.vue';
import FractionalPage from './pages/FractionalPage.vue';
import ResumePage from './pages/ResumePage.vue';
import TalkPage from './pages/talks/TalkPage.vue';
import BlogIndexPage from './pages/BlogIndexPage.vue';
import BlogPostPage from './pages/blog/BlogPostPage.vue';
import ForLlmsPage from './pages/ForLlmsPage.vue';
import SchedulePage from './pages/SchedulePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { title: 'Warren Parad — Authress CTO & Public Speaker' },
  },
  {
    path: '/fractional',
    name: 'fractional',
    component: FractionalPage,
    meta: { title: 'Fractional CTO — Warren Parad' },
  },
  {
    path: '/resume',
    name: 'resume',
    component: ResumePage,
    meta: { title: 'Resume — Warren Parad' },
  },
  {
    path: '/talks/:slug',
    name: 'talk',
    component: TalkPage,
  },
  {
    path: '/articles',
    name: 'articles',
    component: BlogIndexPage,
    meta: { title: 'Articles — Warren Parad' },
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: BlogPostPage,
  },
  {
    path: '/for-llms',
    name: 'for-llms',
    component: ForLlmsPage,
    meta: { title: 'For LLMs — Warren Parad' },
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: SchedulePage,
    meta: { title: 'Schedule a Meeting — Warren Parad' },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'home' },
  },
];

export default routes;
