import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey:REACT_APP_API_KEY,
  authDomain:REACT_APP_AUTH_DOMAIN,
  projectId:REACT_APP_PROJECT_ID,
  storageBucket:REACT_APP_STORAGE_BUCKETS,
  messagingSenderId:REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID,
  measurementId:REACT_APP_MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
export default auth;