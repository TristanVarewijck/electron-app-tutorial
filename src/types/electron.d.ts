export interface IElectronAPI {
  getCompanyData: () => Promise<unknown>;
}

declare global {
  interface Window {
    api: IElectronAPI;
  }
}
