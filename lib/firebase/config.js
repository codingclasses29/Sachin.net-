import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB11-p4UrbHncUk-TM59qfkiXex8cJHFKw",
  authDomain: "com-example-sachinnet-a7973.firebaseapp.com",
  projectId: "com-example-sachinnet-a7973",
  storageBucket: "com-example-sachinnet-a7973.firebasestorage.app",
  messagingSenderId: "747671065404",
  appId: "1:747671065404:web:5a98f1363e959e834a8439",
};

export function getFirebaseConfig() {
  return {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || firebaseConfig.apiKey,
    authDomain:
      process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || firebaseConfig.authDomain,
    projectId:
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || firebaseConfig.projectId,
    storageBucket:
      process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
      firebaseConfig.storageBucket,
    messagingSenderId:
      process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ||
      firebaseConfig.messagingSenderId,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || firebaseConfig.appId,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };
}

export function getFirebaseApp() {
  const config = getFirebaseConfig();
  if (!config.apiKey || !config.projectId || !config.appId) return null;

  return getApps().length ? getApp() : initializeApp(config);
}

export { firebaseConfig };
