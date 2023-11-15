import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCiQ4PF5qsRongYvflzQ43SGra2L4K219M",
    authDomain: "crunchyrollclone-9f6c6.firebaseapp.com",
    databaseURL: "https://crunchyrollclone-9f6c6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "crunchyrollclone-9f6c6",
    storageBucket: "crunchyrollclone-9f6c6.appspot.com",
    messagingSenderId: "504807003680",
    appId: "1:504807003680:web:def9626effac2dc04f0e45",
    measurementId: "G-55MWLDTSWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const dbRef = ref(getDatabase());


class Authentication {

    signup(email, password) {

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                alert("Account created successfully")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }
    login(email, password) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert("Logged In");
                location.replace("index.html");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }
}
class database {
    getdata(name) {

        return new Promise((resolve, reject) => {
            get(child(dbRef, `/available_shows/`+ name +`/name`))
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        resolve(snapshot.val());
                    } else {
                        reject("No data available");
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });


    }
}
export { Authentication, database }