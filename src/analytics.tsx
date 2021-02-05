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
  // @ts-ignore
  // window.dataLayer.push({event: `${category} })
};
