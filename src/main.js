import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);


Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyCgNQxJl6q6jFMqoaiQVbznWHLN1k_JYAg",
    authDomain: "animated-bay-285502.firebaseapp.com",
    databaseURL: "https://animated-bay-285502.firebaseio.com",
    projectId: "animated-bay-285502",
    storageBucket: "animated-bay-285502.appspot.com",
    messagingSenderId: "397938969815",
    appId: "1:397938969815:web:a41fd3138843d04dd33492",
    measurementId: "G-22BZ10V2P8"
});
export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
