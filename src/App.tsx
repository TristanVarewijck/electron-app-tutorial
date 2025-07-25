import { useState } from "react";
import "./App.css";
import { Company } from "./types/company";
import StartSection from "./components/section/start";
import LoadingSection from "./components/section/loading";
import CompaniesSection from "./components/section/companies";
import { delay, fetchCompanies } from "./lib/api";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);

  const handleClick = async () => {
    setIsLoading(true);
    const companies = await fetchCompanies();
    setCompanies(companies);
    await delay(2000);
    setIsLoading(false);
  };

  return (
    <>
      {/* default view */}
      {companies.length === 0 && (
        <StartSection isLoading={isLoading} handleClick={handleClick} />
      )}

      {/* loading view */}
      <LoadingSection isLoading={isLoading} />

      {/* companies view */}
      {companies.length > 0 && (
        <CompaniesSection companies={companies} setCompanies={setCompanies} />
      )}
    </>
  );
}

export default App;
