class Login {
    constructor(btnLogin) {
        this.loginBtn = btnLogin;
    }

    login(userEmail, userPass) {
        firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert('Error : ' + errorMessage);
            // ...
        });
    }

    getData() {
        let userEmail = document.getElementById('email__field').value; // pobranie wartości pola login
        let userPass = document.getElementById('password__field').value; // pobranie wartości pola hasła
        this.login(userEmail, userPass);
    }

    init() {
        this.loginBtn.addEventListener('click', ()=>{
            // alert('hey')
            // this.login();
            this.getData(); // odpalamy metodę która pobierze wartości z logina i hasła
        })
    }
}

export default Login;