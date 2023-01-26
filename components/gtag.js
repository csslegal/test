export const NEXT_PUBLIC_GOOGLE_ANALYTICS =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export const pageview = (url) => {
  if (window && window.gtag) {
    window.gtag("config", NEXT_PUBLIC_GOOGLE_ANALYTICS, {
      page_path: url,
    });
  }
};

export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
