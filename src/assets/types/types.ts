export type Review = {
  key: string;
  client: string;
  date: string;
  description: string;
  img: string;
  place: string;
};

export type Blog = {
  key: string;
};

export type Tour = {
  key: string;
  addons?: string;
  attractions?: string[];
  cost: string;
  description: string;
  duration: string;
  fullWidth?: boolean;
  mainText: string;
  prices?: { cost: string; title: string; notification?: string }[];
  pdescription?: string;
  title: string;
  ptitle: string;
};
