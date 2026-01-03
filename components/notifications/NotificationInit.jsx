"use client";

import { useEffect } from "react";
import { requestNotificationPermission, onForegroundMessage } from "@/lib/firebase";

export default function NotificationInit() {
  useEffect(() => {
    const initializeNotifications = async () => {
      await requestNotificationPermission();
    };

    initializeNotifications();

    // Handle foreground messages
    const unsubscribe = onForegroundMessage((payload) => {
      console.log("Received foreground message: ", payload);
      if (payload.notification) {
        console.log("Notification:", payload.notification.title, payload.notification.body);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return null;
}
