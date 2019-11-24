/**
 * FirebaseModel - key Loader
 */
const firebase = require('firebase');
const firebaseConfig = require('../config/firebasePrivateKey');
const firebaseApp = firebase.initializeApp(firebaseConfig);

class FirebaseModel {
    constructor() { this.db = firebaseApp.firestore(); }
}

module.exports = FirebaseModel