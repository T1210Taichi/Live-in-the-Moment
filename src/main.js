import Vue from 'vue'
import App from './App.vue'

import firebase from 'firebase'

Vue.config.productionTip = false


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB9izcreOsMKUyd4u_rhRxxXHRJO_Y1Nxw",
    authDomain: "live-in-the-moment-8d152.firebaseapp.com",
    databaseURL: "https://live-in-the-moment-8d152-default-rtdb.firebaseio.com",
    projectId: "live-in-the-moment-8d152",
    storageBucket: "live-in-the-moment-8d152.appspot.com",
    messagingSenderId: "403266207370",
    appId: "1:403266207370:web:58daf9bd5737d796553773",
    measurementId: "G-YDVB6JVVS8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  render: h => h(App),
}).$mount('#app')
