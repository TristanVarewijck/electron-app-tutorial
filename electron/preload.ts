import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  getCompanyData: () => ipcRenderer.invoke("get-company-data"),
});
