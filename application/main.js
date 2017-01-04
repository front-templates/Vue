import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from 'routes';
import Layout from 'views/commons/layout';
import initializer from 'initializer';

Vue.use(VueRouter);

let router = new VueRouter({ routes });

initializer();

new Vue({
	router,
	render(h) {
		return h(Layout);
	}
}).$mount('#application-container');