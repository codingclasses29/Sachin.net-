import { getApp, getApps, initializeApp } from "firebase/app";

/** Sachin.net — Firebase project: photofolio-41cbf */
export const firebaseConfig = {
  apiKey: "AIzaSyA1zvsiIXOmhYjhcFV1lL31yHWPmex6tP4",
  authDomain: "photofolio-41cbf.firebaseapp.com",
  projectId: "photofolio-41cbf",
  storageBucket: "photofolio-41cbf.appspot.com",
  messagingSenderId: "409649771008",
  appId: "1:409649771008:web:e75a7725879cad8fca5ee5",
  measurementId: "G-C5K1Q8K417",
};

export function getFirebaseConfig() {
  const config = {
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
  };

  const measurementId =
    process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ||
    firebaseConfig.measurementId;
  if (measurementId) config.measurementId = measurementId;

  return config;
}

export function getFirebaseApp() {
  const config = getFirebaseConfig();
  if (!config.apiKey || !config.projectId || !config.appId) return null;

  return getApps().length ? getApp() : initializeApp(config);
}
