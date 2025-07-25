import { Loader2 } from "lucide-react";

interface LoadingSectionProps {
  isLoading: boolean;
}

const LoadingSection = ({ isLoading }: LoadingSectionProps) => {
  return (
    <div
      className={`loading-container fixed inset-0 flex items-center justify-center transition-all duration-500 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Loader2 className="w-8 h-8 animate-spin" />
    </div>
  );
};

export default LoadingSection;
