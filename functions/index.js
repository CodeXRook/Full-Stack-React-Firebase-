const functions = require('firebase-functions');
const admin = require

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello world!");
});

exports.getScreams = functions.https.onRequest((req, res) => {

})