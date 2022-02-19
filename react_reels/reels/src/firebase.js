import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import "firebase/storage";

let object = require('./secrets');
firebase.initializeApp(object);
let auth = firebase.auth();

export default auth;
export const firestore=firebase.firestore();
export const database ={
    users: firestore.collection("users"),
    getUserTimeStamp: firebase.firestore.FieldValue.serverTimeStamp
}
export const storage = firebase.storage();