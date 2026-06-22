"use client";

import { useEffect } from "react";
import { getFirebaseApp } from "@/lib/firebase/config";

export default function FirebaseInit() {
  useEffect(() => {
    getFirebaseApp();
  }, []);

  return null;
}
