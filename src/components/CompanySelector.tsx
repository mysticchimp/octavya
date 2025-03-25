
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ReactNode } from "react";

interface Company {
  id: string;
  name: string;
  logo: string;
  employeeCount: number;
  workPolicy: string;
  location: string;
  icon: ReactNode;
}

interface CompanySelectorProps {
  selectedCompany: string;
  companies: Company[];
  onCompanyChange: (value: string) => void;
}

export const CompanySelector = ({
  selectedCompany,
  companies,
  onCompanyChange,
}: CompanySelectorProps) => {
  return (
    <div className="w-full max-w-xs mb-6">
      <Select value={selectedCompany} onValueChange={onCompanyChange}>
        <SelectTrigger className="w-full bg-white/80 backdrop-blur-sm">
          <SelectValue placeholder="Select a company" />
        </SelectTrigger>
        <SelectContent className="bg-white border-none shadow-lg">
          {companies.map((company) => (
            <SelectItem key={company.id} value={company.id} className="hover:bg-secondary">
              <div className="flex items-center gap-2">
                {company.icon}
                <span>{company.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
