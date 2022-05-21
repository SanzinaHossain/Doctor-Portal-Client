import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
 const firebaseConfig = {
   apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
   projectId: process.env.REACT_APP_PROJECT_ID,
   storageBucket: process.env.REACT_APP_STORAGE_BUCKETS,
   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
 };
// const firebaseConfig = {

//   apiKey: "AIzaSyDQFmN1n8MHXeX9pqvC8NxlGt0dMDtlYb4",

//   authDomain: "doctors-portal-f3fc8.firebaseapp.com",

//   projectId: "doctors-portal-f3fc8",

//   storageBucket: "doctors-portal-f3fc8.appspot.com",

//   messagingSenderId: "185132261786",

//   appId: "1:185132261786:web:89caec79466080b3745a23",

//   measurementId: "G-01X5Y842N8"

// };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;