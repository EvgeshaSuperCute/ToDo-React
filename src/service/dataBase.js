// Import the functions you need from the SDKs you need
import firebase from "firebase/compat";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBymTRdskgl2z2aY6uYYop_xz6ZECLXziI",
    authDomain: "todo-list-ce08c.firebaseapp.com",
    projectId: "todo-list-ce08c",
    storageBucket: "todo-list-ce08c.appspot.com",
    messagingSenderId: "170993779976",
    appId: "1:170993779976:web:6c15b8ef70e49c3f6e18bd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class Firebase{
    constructor() {
        this.fire = firebase;
        this.database = this.fire.database();

    }

    getListSocket = (cb) =>{
        this.database.ref('todo/').on('value', (snapshot) => {
            cb(snapshot.val());
        })
    }

    offListSocket = () =>{
        this.database.ref('todo/').off()
    }

    getListOnce = async () =>{
        return await this.database.ref('todo/').once('value').then(snapshot => snapshot.val()).catch((error)=>console.log('error:',error.code));
    }

    postList = (Key, list) =>{
        this.database.ref('todo/'+ Key).update(list);
    }


    addList = (newList) =>{
        const newKey = this.database.ref().child('todo-list').push().key;
        this.database.ref('todo/' + newKey).set(newList);
        //return newKey;
    }

    addRecord = (newRecord, key) =>{
        const newKey =  this.database.ref().child(`todo/${key}/records`).push().key;
        this.database.ref(`todo/${key}/records/`+ newKey).set(newRecord);
        //return newKey;
    }
    removeRecord = (listKey, recordKey) =>{

        this.database.ref(`todo/${listKey}/records/${recordKey}`).remove();
        //return newKey;
    }
    removeList = (key) =>{

        this.database.ref(`todo/${key}`).remove();
        //return newKey;
    }
}
const FirebaseClass = new Firebase();

export default FirebaseClass;
