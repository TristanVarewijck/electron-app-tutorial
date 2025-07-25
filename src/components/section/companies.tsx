import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Company } from "@/types/company";
import Heading from "../custom/heading";
import CompanyCard from "../custom/company-card";

interface CompaniesSectionProps {
  companies: Company[];
  setCompanies: (companies: Company[]) => void;
}

const CompaniesSection = ({
  companies,
  setCompanies,
}: CompaniesSectionProps) => {
  return (
    <div className="content-container">
      <div className="flex flex-col gap-2 mb-4">
        <Button
          size="lg"
          variant="ghost"
          onClick={() => setCompanies([])}
          className="flex gap-2 items-center mx-auto"
        >
          <ArrowLeft />
          <span>Back</span>
        </Button>

        <Heading
          title="Companies"
          description={
            <span>
              Click on a company to see <i>more information</i> about the{" "}
              <strong>cashback offer</strong>
            </span>
          }
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
};

export default CompaniesSection;
