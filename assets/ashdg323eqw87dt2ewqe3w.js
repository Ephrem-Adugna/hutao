var config = {
    apiKey: "AIzaSyA6z359z5BIHXzrveeWzVOGSpKRJnlejpw",
    authDomain: "genshindiscord-4a61b.firebaseapp.com",
    projectId: "genshindiscord-4a61b",
    storageBucket: "genshindiscord-4a61b.appspot.com",
    messagingSenderId: "1040993867808",
    appId: "1:1040993867808:web:e1a866992c9250bf020445",
    measurementId: "G-2C9018X1WW"
};
firebase.initializeApp(config);
firebase.database().ref('users').once('value').then(async (snapshot) => {

    console.log(snapshot.val());
});