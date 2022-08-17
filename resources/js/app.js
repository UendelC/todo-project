import './bootstrap';
import routes from './router';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import Cuida from '@sysvale/cuida';

import App from './App.vue';

const vueApp = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes,
});

vueApp.use(Cuida);
vueApp.use(router);

vueApp.mount("#app");
