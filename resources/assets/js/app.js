
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('chat', require('./components/Chat.vue'));
Vue.component('init', require('./components/Init.vue'));
Vue.component('business', require('./components/Business.vue'));
Vue.component('preloader', require('./components/Preloader.vue'));
Vue.component('chat-history', require('./components/ChatHistory.vue'));
Vue.component('chat-compose', require('./components/ChatCompose.vue'));
Vue.component('explore', require('./components/ExploreBusinesses.vue'));
Vue.component('explore-button', require('./components/ExploreButton.vue'));
Vue.component('navigate-back', require('./components/NavigateBack.vue'));

import { store } from './store/store'

const app = new Vue({
    el: '#app',
    store,
    computed: {
    	showMainLoader() {
    		return this.$store.getters.main_loader;
    	}
    }
});
