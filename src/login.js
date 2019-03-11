class Login {
    constructor(btnLogin) {
        this.loginBtn = btnLogin;
    }

    login(userEmail, userPass) {
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
            .then(function(success) {
                window.location = '/home.html';
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;

                window.alert('Error : ' + errorMessage);
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
