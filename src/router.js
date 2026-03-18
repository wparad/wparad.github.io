import HomePage from './pages/HomePage.vue';
import FractionalPage from './pages/FractionalPage.vue';
import ResumePage from './pages/ResumePage.vue';
import TalkPage from './pages/talks/TalkPage.vue';
import BlogIndexPage from './pages/BlogIndexPage.vue';
import BlogPostPage from './pages/blog/BlogPostPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: { title: 'Warren Parad — Authress CTO & Public Speaker' },
  },
  {
    path: '/fractional',
    component: FractionalPage,
    meta: { title: 'Fractional CTO — Warren Parad' },
  },
  {
    path: '/resume',
    component: ResumePage,
    meta: { title: 'Resume — Warren Parad' },
  },
  {
    path: '/talks/:slug',
    component: TalkPage,
  },
  {
    path: '/blog',
    component: BlogIndexPage,
    meta: { title: 'Blog — Warren Parad' },
  },
  {
    path: '/blog/:slug',
    component: BlogPostPage,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

export default routes;
