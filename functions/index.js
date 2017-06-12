const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.onbuild = functions.https.onRequest((req, res) => {
    const builds = admin.database().ref('build_count');
    const buildLog = admin.database().ref('builds');

    const buildLogRef = buildLog.push();
    buildLogRef.set({
        'date': new Date().toUTCString(),
    });

    builds.transaction(function(numBuilds) {
        return (numBuilds || 0) + 1;
    }, function(error, currentData) {
        res.status(200).send(currentData);
    });
});

exports.onfunctionaltestretry = functions.https.onRequest((req, res) => {
    const builds = admin.database().ref('functional_test_retry_count');
    const buildLog = admin.database().ref('functional_test_retries');

    const buildLogRef = buildLog.push();
    buildLogRef.set({
        'date': new Date().toUTCString(),
    });

    builds.transaction(function(numBuilds) {
        return (numBuilds || 0) + 1;
    }, function(error, currentData) {
        res.status(200).send(currentData);
    });
});

exports.onfunctionaltest = functions.https.onRequest((req, res) => {
    const builds = admin.database().ref('functional_test_count');
    const buildLog = admin.database().ref('functional_tests');

    const buildLogRef = buildLog.push();
    buildLogRef.set({
        'date': new Date().toUTCString(),
    });

    builds.transaction(function(numBuilds) {
        return (numBuilds || 0) + 1;
    }, function(error, currentData) {
        res.status(200).send(currentData);
    });
});

