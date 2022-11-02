const { admin } = require('../firebase/firebase.config');
const sendNotification = async (deviceId, msg, senderId, receiverId, senderProfilePhoto, senderChatId, senderNam, receiverChatId, postId) => {
    let isChat = true
    if (senderChatId == "") {
        isChat = false
    }
    const payload = {
        notification: {
            title: "Notification",
            body: msg,
            sound: "default"
        },
        data: {
            click_action: "FLUTTER_NOTIFICATION_CLICK",
            isChat: `${isChat}`,
            senderId: `${senderId}`,
            senderChatId: `${senderChatId}`,
            senderName: `${senderNam}`,
            senderProfilePhoto: `${senderProfilePhoto}`,
            receiverId: `${receiverId}`,
            receiverChatId: `${receiverChatId}`,
            postId: `${postId}`
        },
    };
    const options = {
        priority: 'high'
    }
    console.log(payload)
    await admin.messaging().sendToDevice(deviceId, payload, options)
        .then(response => {
            console.log('Notification sent successfully', response);
        })
        .catch(error => {
            console.log(error)
        });
}
module.exports = {sendNotification};