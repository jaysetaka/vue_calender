import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
import VueTextareaAutosize from "vue-textarea-autosize";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyCDMRp3619KE7-RTAIomf3AwnTvc41eSp8",
  authDomain: "vue-calender-app.firebaseapp.com",
  databaseURL: "https://vue-calender-app.firebaseio.com",
  projectId: "vue-calender-app",
  storageBucket: "vue-calender-app.appspot.com",
  messagingSenderId: "548473249721",
  appId: "1:548473249721:web:d3a612899b488056c0e068",
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
