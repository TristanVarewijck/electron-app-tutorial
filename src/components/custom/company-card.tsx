import { ArrowRight } from "lucide-react";
import { Company } from "@/types/company";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { stripHtmlTags } from "@/lib/utils";

interface CompanyCardProps {
  company: Company;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  // TODO: Make this dynamic based on the language
  const url = `https://pinebucks.com/nl_NL/campaigns/${company.slug}`;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <CardHeader className="p-0 max-h-[150px] my-auto py-0 flex items-center justify-center pt-4">
          <img
            src={company.image}
            alt={company.name}
            className="object-contain w-full h-full max-h-[100px] object-center"
          />
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold">{company.name}</h3>

          {company.description ? (
            <p className="mt-2 text-sm line-clamp-2 text-muted-foreground">
              {stripHtmlTags(company.description)}
            </p>
          ) : (
            <p className="mt-2 text-sm line-clamp-2 text-muted-foreground">
              No description available
            </p>
          )}
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="flex items-center ml-auto text-sm">
            Go to store
            <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </CardFooter>
      </a>
    </Card>
  );
};

export default CompanyCard;
