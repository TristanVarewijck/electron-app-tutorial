import axios from "axios";
import dotenv from "dotenv";
import { APIEndpoint } from "../enums/api-endpoints.js";
dotenv.config({ quiet: true });
import { Company } from "../types/company.js";

const API_URL = process.env.API_URL;

export async function fetchCompanyData() {
  try {
    if (!API_URL) {
      throw new Error("API_URL is not configured");
    }
    const response = await axios.get(`${API_URL}/${APIEndpoint.COMPANIES}`);

    const data: Company[] = [];

    for (const company of response.data.campaigns) {
      data.push({
        id: company.id,
        name: company.name,
        slug: company.slug,
        image: company.imageUrl,
        description: company.shop_description,
        cashback: company.commission,
      });
    }

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// TODO: Fetch data of 1 company
// export async function fetchCompanyDataById(id: string) {
//   const response = await axios.get(`https://example.com/api/company/${id}`);
//   return response.data;
// }
