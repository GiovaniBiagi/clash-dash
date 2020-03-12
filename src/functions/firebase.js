import firebase from 'firebase/app';
import 'firebase/firestore'

var db = firebase.firestore();

export function signIn(payload){
    const action = firebase.auth().signInWithEmailAndPassword(payload.email, payload.password);

    return action;
}