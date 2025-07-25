import { Company } from "../types/company";

export async function fetchCompanies(): Promise<Company[]> {
  try {
    const data = await window.api?.getCompanyData();
    return (data as Company[]) || [];
  } catch (error) {
    console.error("Error fetching companies:", error);
    return [];
  }
}

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
