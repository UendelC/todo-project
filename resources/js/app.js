import './bootstrap';
import routes from './router';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

const vueApp = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes,
});

vueApp.use(router);

vueApp.mount("#app");
