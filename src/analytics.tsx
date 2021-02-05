const globalGa =
  process.env.NODE_ENV === "development" ? console.log : window.gtag;

type TrackEventProps = {
  eventName: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
};

export const TrackEvent = ({
  eventName,
  category,
  action,
  label,
  value,
}: TrackEventProps) => {
  globalGa("event", eventName, { category, action, label, value });
};
