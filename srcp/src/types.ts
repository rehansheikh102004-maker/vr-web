export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  monthlyPrice: number | string; // e.g. 0, "9,99", "19,99"
  yearlyPrice: number | string;  // discounted e.g. "7,99", "15,99"
  currencySymbol: string;
  priceSuffix: string;
  features: PlanFeature[];
  buttonText: string;
  isPopular?: boolean;
  accentGlow?: string;
  productImage?: string;
}

export type BillingInterval = 'monthly' | 'yearly';
export type DecimalFormat = 'comma' | 'dot';
