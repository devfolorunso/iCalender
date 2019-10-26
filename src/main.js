import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from "firebase";
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)
Vue.use(require('moment'));

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBGK78qwZ3RoPi-VoeVxznvJooyJXBEZnY",
  authDomain: "vue-calender-1f96b.firebaseapp.com",
  databaseURL: "https://vue-calender-1f96b.firebaseio.com",
  projectId: "vue-calender-1f96b",
  storageBucket: "vue-calender-1f96b.appspot.com",
  messagingSenderId: "408660009120",
  appId: "1:408660009120:web:c9287098bbe404ef9b69c5",
  measurementId: "G-TG0GX9ELWY"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')