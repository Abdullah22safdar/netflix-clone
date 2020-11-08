import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
/*import { seedDatabase} from "../seed";*/


const config = {
    apiKey: "AIzaSyDhq1fwHJcWtXZWebkrV8_cw7hLwlXbwlQ",
    authDomain: "netflix-github.firebaseapp.com",
    databaseURL: "https://netflix-github.firebaseio.com",
    projectId: "netflix-github",
    storageBucket: "netflix-github.appspot.com",
    messagingSenderId: "482235519669",
    appId: "1:482235519669:web:940e9dcdd96c4319c364fc",
    measurementId: "G-2CT0FVFJBJ"
};

const firebase = Firebase.initializeApp(config);


/*seedDatabase(firebase);*/

export {firebase};