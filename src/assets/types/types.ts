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
  // cost: string;
  description: string;
  length: string;
  fullWidth?: boolean;
  mainText: string;
  pdescription?: string;
  prices?: { cost: string; title: string; notification?: string }[];
  ptitle: string;
  shortDescription: string;
  subtitle: string;
  title: string;
};
