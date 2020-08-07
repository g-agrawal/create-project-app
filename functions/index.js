const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello, Team Memmber!");
});

const createNotification = (notification) => {
    return admin.firestore().collection('Notifications').add(notification).then(doc=> {
            console.log('Notification added', notification);
    });
}

exports.projectCreated = functions.firestore.document('/projects/{projectId}').onCreate(doc => {
    const project = doc.data();
    const notification = {
        content: 'Added a new project',
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp() 
    }
    return createNotification(notification);
});

exports.userJoined = functions.auth.user().onCreate(newUser => {
    return admin.firestore().collection('users').doc(newUser.uid).get().then(doc => {
        const user = doc.data();
        const notification = {
            content: 'Joined the team',
            user: `${user.firstName} ${user.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp() 
        }
        return createNotification(notification);
    });
})
