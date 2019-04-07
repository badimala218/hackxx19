import firebase from 'firebase';

class Fire {
    constructor() {
        this.init(); // call init
        this.observeAuth();
    }

    init = () =>
        firebase.initializeApp({
            apiKey: "AIzaSyBa20Icr6zF1wzDKpyma8ubB7B-5v0la_I",
            authDomain: "hackxx-7bc87.firebaseapp.com",
            databaseURL: "https://hackxx-7bc87.firebaseio.com",
            projectId: "hackxx-7bc87",
            storageBucket: "hackxx-7bc87.appspot.com",
            messagingSenderId: "526064790953"
        })

    observeAuth = () => {
        firebase.auth().onAuthStateChanged( this.onAuthStateChanged )
    }

    onAuthStateChanged = user => {
        if ( !user ) {
            try {
                firebase.auth().signInAnonymously();
            } catch ({ message }) {
                alert( message );
            }

        }
    }

    get uid() {
        return ( firebase.auth().currentUser() || {} ).uid;
    }

    get tmestamp() {
        return firease.database.ServerValue.TIMESTAMP;
    }

    get ref() {
        return firebase.database().ref('notifs');
    }

    on = callback => this.ref
                        .limitToLast(1)
                        .on('child_added', snapshot =>
                    callback( this.parse(snapshot)));

    parse = snapshot => {
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { keys: _id } = snapshot;
        const timestamp = new Date( numberStamp );
        const message = {
            _id, timestamp, text, user,
        }
        return message;
    }

    off() {
        this.ref.off();
    }


}
