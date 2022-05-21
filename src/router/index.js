import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import AboutUsPage from "@/views/AboutUsPage";
import MediaPage from "@/views/MediaPage";
import NewsPage from "@/views/NewsPage";
import CommunityPage from "@/views/CommunityPage";
import AboutGamePage from "@/views/AboutGamePage";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUsPage
  },
  {
    path: '/media',
    name: 'media',
    component: MediaPage
  },
  {
    path: '/news',
    name: 'news',
    component: NewsPage
  },
  {
    path: '/community',
    name: 'community',
    component: CommunityPage
  },
  {
    path: '/game',
    name: 'game',
    component: AboutGamePage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
