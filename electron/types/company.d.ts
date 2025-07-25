export interface Company {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  cashback: {
    campaign_id: string;
    click_commission: string;
    fixed_commission: string;
    i_lead_commission: string;
    i_sale_commission_fixed: string;
    i_sale_commission_variable: string;
    impression_commission: string;
    lead_commission: string;
    sale_commission_fixed: string;
    sale_commission_variable: string;
    created_at: string;
    updated_at: string;
  };
}
