class Login {
    constructor(btnLogin) {
        this.loginBtn = btnLogin;
    }

    auth() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                user.getIdToken().then((idToken) => {
                    window.localStorage.setItem('user', idToken);
                    window.location = 'home.html';
                }, (error) => {
                    resolve(null);
                });
            } else {
                resolve(null);
            }
        });
    }

    login(userEmail, userPass) {
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert('Error : ' + errorMessage);
            // ...
        });
    }

    logout() {
        console.log('logout firebase')
            firebase.auth().signOut().then(function() {
                localStorage.removeItem('user', idToken);
                // sign-out succ.
            }).catch(function(error) {
                // an error
            });
    }

    getData() {
        let userEmail = document.getElementById('email__field').value; // pobranie wartości pola login
        let userPass = document.getElementById('password__field').value; // pobranie wartości pola hasła
        this.login(userEmail, userPass);
    }

    events() {
        this.loginBtn.addEventListener('click', ()=>{
            this.getData(); // odpalamy metodę która pobierze wartości z logina i hasła
        });
        this.auth();
    }

    init() {
        if (this.loginBtn) {
            try {
                this.events();
            } catch (e) {
                console.warn(e);
            }
        }
    }
}

export default Login;