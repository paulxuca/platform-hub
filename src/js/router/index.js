import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/Index';
import SearchResults from '../views/SearchResults';
import Service from '../views/Service';
import Tags from '../views/Tags';
import Faq from '../views/Faq';
import PageNotFound from '../views/PageNotFound';
import App from '../views/App';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hub',
      component: Index,
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchResults,
      props(route) {
        return { search: route.query.q };
      },
    },
    {
      path: '/service/:alias',
      name: 'Service',
      component: Service,
      meta: {
        hasSearch: true,
      },
      props(route) {
        return { alias: route.params.alias };
      },
    },
    {
      path: '/tags/:topic',
      name: 'Tags',
      component: Tags,
      meta: {
        hasSearch: true,
      },
      props(route) {
        return { topic: route.params.topic };
      },
    },
    {
      path: '/r/:owner/:repo',
      component: Service,
      meta: {
        hasSearch: true,
      },
      props(route) {
        return {
          owner: route.params.owner,
          repo: route.params.repo,
        };
      },
    },
    {
      path: '/app/:owner/:repo',
      component: App,
      props({ params }) {
        return {
          owner: params.owner,
          repo: params.repo,
        };
      },
    },
    {
      path: '/app/:alias',
      component: App,
      props({ params }) {
        return {
          alias: params.alias,
        };
      },
    },
    {
      path: '/faq',
      component: Faq,
      meta: {
        hasSearch: true,
      },
    },
    {
      path: '*',
      component: PageNotFound,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
