"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getFirebaseApp } from "@/lib/firebase/config";
import { getFirebaseAnalytics, logFirebaseEvent } from "@/lib/firebase/analytics";

export default function FirebaseInit() {
  const pathname = usePathname();

  useEffect(() => {
    const app = getFirebaseApp();
    if (app) {
      getFirebaseAnalytics().then((analytics) => {
        if (analytics) {
          logFirebaseEvent("app_initialized", { project: "photofolio-41cbf" });
        }
      });
    }
  }, []);

  useEffect(() => {
    logFirebaseEvent("page_view", { page_path: pathname || "/" });
  }, [pathname]);

  return null;
}
