export function getUTMs() {
  return {
    utm_source: localStorage.getItem("utm_source"),
    utm_medium: localStorage.getItem("utm_medium"),
    utm_campaign: localStorage.getItem("utm_campaign"),
    utm_term: localStorage.getItem("utm_term"),
    utm_content: localStorage.getItem("utm_content"),
    utm_captured_at: localStorage.getItem("utm_captured_at")
  };
}
