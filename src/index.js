import 'styles.scss';
import Login from './login.js';

window.addEventListener('load', () => {
    const loginBtn = new Login(document.getElementById('login__btn--login'));
    // const emailInput = new Login(document.getElementById('email__field'));
    // const passInput = new Login(document.getElementById('password__field'));

    loginBtn.init();
}, false);
