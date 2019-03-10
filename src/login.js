class Login {
    constructor(btnLogin) {
        this.loginBtn = btnLogin;
    }

    auth() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                window.location = 'home.html';
            } else {
                // No user is signed in.
                console.log('user niezalogowany');
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

    init() {
        this.loginBtn.addEventListener('click', ()=>{
            this.getData(); // odpalamy metodę która pobierze wartości z logina i hasła
        });
        this.auth();
    }
}

export default Login;