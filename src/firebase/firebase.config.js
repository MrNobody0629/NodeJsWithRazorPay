const admin = require("firebase-admin");
const KEYS = require('../config/firebaseConfig.json').cred;
console.log(KEYS);
const serviceAccount = {
    "type": KEYS.GOOGLE_TYPE,
    "project_id": KEYS.GOOGLE_PROJECT_ID,
    "private_key_id": KEYS.GOOGLE_PRIVATE_KEY_ID,
    "private_key": KEYS.GOOGLE_PRIVATE_KEY,
    "client_email": KEYS.GOOGLE_CLIENT_EMAIL,
    "client_id": KEYS.GOOGLE_CLIENT_ID,
    "auth_uri": KEYS.GOOGLE_AUTH_URI,
    "token_uri": KEYS.GOOGLE_TOKEN_URI,
    "auth_provider_x509_cert_url": KEYS.GOOGLE_AUTH_PROVIDER,
    "client_x509_cert_url": KEYS.GOOGLE_CLIENT_X509
}
// console.log('serviceAccount :>> ', serviceAccount);

admin.initializeApp({
    // credential: admin.credential.cert(serviceAccount),
});
module.exports = { admin };