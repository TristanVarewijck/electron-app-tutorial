import { ipcMain } from "electron";
import { fetchCompanyData } from "../api/companyData.js";

export function registerCompanyHandlers() {
  ipcMain.handle("get-company-data", async () => {
    return await fetchCompanyData();
  });
}
