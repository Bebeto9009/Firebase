import 'styles.scss';
import Login from './login.js';
import Logout from './logout.js';

var config = {
    apiKey: "AIzaSyAOvUWmlaXlz6lnU-TgmFMBz9_SGsRL_3o",
    authDomain: "fir-applogin-8a6f0.firebaseapp.com",
    databaseURL: "https://fir-applogin-8a6f0.firebaseio.com",
    projectId: "fir-applogin-8a6f0",
    storageBucket: "fir-applogin-8a6f0.appspot.com",
    messagingSenderId: "963013239195"
};
firebase.initializeApp(config);

window.addEventListener('load', () => {

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            user.getIdToken().then((idToken) => {
                window.localStorage.setItem('user', idToken);
            }, (error) => {
                console.log(error);
            });
        } else {
            if(window.location.href == "http://0.0.0.0:3000/home.html") {
                window.location = '/';
            }
        }
    });

    const loginBtn = new Login(document.getElementById('login__btn--login'));
    loginBtn.init();

    const logoutBtn = new Logout(document.getElementById('logout__btn'));
    logoutBtn.init();

}, false);


