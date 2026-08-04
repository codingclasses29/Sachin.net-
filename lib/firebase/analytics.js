"use client";

import { getAnalytics, isSupported, logEvent } from "firebase/analytics";
import { getFirebaseApp, getFirebaseConfig } from "./config";

let analyticsInstance = null;
let initPromise = null;

export async function getFirebaseAnalytics() {
  if (typeof window === "undefined") return null;
  if (analyticsInstance) return analyticsInstance;
  if (initPromise) return initPromise;

  initPromise = (async () => {
    const config = getFirebaseConfig();
    if (!config.measurementId) return null;

    const supported = await isSupported();
    if (!supported) return null;

    const app = getFirebaseApp();
    if (!app) return null;

    analyticsInstance = getAnalytics(app);
    return analyticsInstance;
  })();

  return initPromise;
}

export async function logFirebaseEvent(name, params = {}) {
  try {
    const analytics = await getFirebaseAnalytics();
    if (!analytics) return;
    logEvent(analytics, name, { ...params, site: "Sachin.net" });
  } catch {
    // non-blocking
  }
}
