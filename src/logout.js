class Logout {
    constructor(btnLogout) {
        this.logoutBtn = btnLogout;
    }

    logout() {
        firebase.auth().signOut().then(function() {
            localStorage.removeItem('user');
            localStorage.removeItem('loggedIn');
            window.location = '/';
            // sign-out succ.
        }).catch(function(error) {
            console.log(error);
            // an error
        });
    }
    events() {
        this.logoutBtn.addEventListener('click', ()=>{
            this.logout(); // wyloguj
        });
    }

    init() {
        if (this.logoutBtn) {
            try {
                this.events();
            } catch (e) {
                console.warn(e);
            }
        }
    }
}

export default Logout;
