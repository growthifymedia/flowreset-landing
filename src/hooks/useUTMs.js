import { useEffect } from "react";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content"
];

export default function useUTMs() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    let hasUTM = false;

    UTM_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value) {
        localStorage.setItem(key, value);
        hasUTM = true;
      }
    });

    // optional timestamp
    if (hasUTM) {
      localStorage.setItem("utm_captured_at", new Date().toISOString());
    }
  }, []);
}
