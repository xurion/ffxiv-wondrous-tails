import ReactGA from "react-ga";

ReactGA.initialize("G-RQH1TGKGLD", { debug: true });

export const TrackPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

type TrackEventProps = {
  category: string;
  action: string;
  label?: string;
  value?: number;
};

export const TrackEvent = ({
  category,
  action,
  label,
  value,
}: TrackEventProps) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};
