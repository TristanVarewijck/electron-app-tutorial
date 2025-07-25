import { Button } from "@/components/ui/button";
import { PiggyBank } from "lucide-react";
import Heading from "../custom/heading";

interface StartSectionProps {
  isLoading: boolean;
  handleClick: () => void;
}

const StartSection = ({ isLoading, handleClick }: StartSectionProps) => {
  return (
    <div
      className={`content-container transition-all duration-500 ${
        isLoading ? "opacity-0 translate-y-4" : "opacity-100"
      }`}
    >
      <Heading
        title="cashback.io"
        description={
          <span>
            Click <i>Start now</i> to see all companies that offer{" "}
            <strong>cashback</strong> in <br /> <strong>The Netherlands</strong>
          </span>
        }
      />

      <Button
        size="lg"
        onClick={handleClick}
        className="flex gap-2 items-center mx-auto"
        disabled={isLoading}
      >
        <PiggyBank />
        <span>Start now</span>
      </Button>
    </div>
  );
};

export default StartSection;
