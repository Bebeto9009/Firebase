import 'styles.scss';
import Login from './login.js';

window.addEventListener('load', () => {
    const loginBtn = new Login(document.getElementById('login__btn--login'));

    loginBtn.init();
}, false);
