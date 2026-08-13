export interface ServiceCard {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics: string;
  features: string[];
  iconName: string;
}

export interface Metric {
  label: string;
  value: string;
  subtext: string;
}
