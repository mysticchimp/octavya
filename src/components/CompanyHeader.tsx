
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Users, MapPin } from "lucide-react";
import { Building2, Briefcase, LineChart, NewspaperIcon, Star, FileText, Users2 } from "lucide-react";

interface CompanyHeaderProps {
  name: string;
  logo: string;
  employeeCount: number;
  workPolicy: string;
  location: string;
  website?: string;
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

export const CompanyHeader = ({
  name,
  logo,
  employeeCount,
  workPolicy,
  location,
  website = "https://example.com",
  selectedTab,
  onTabChange,
}: CompanyHeaderProps) => {
  return (
    <div className="w-full animate-fade-up space-y-6">
      <div className="flex items-center gap-6">
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-20 h-20 rounded-lg object-contain bg-white p-2 shadow-lg"
        />
        <div className="flex flex-col items-start">
          <a 
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl font-semibold hover:text-primary transition-colors text-left"
          >
            {name}
          </a>
          <div className="flex gap-4 mt-2 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {employeeCount.toLocaleString()} employees
            </span>
            <span className="flex items-center gap-1">
              <Building className="w-4 h-4" />
              {workPolicy}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {location}
            </span>
          </div>
        </div>
      </div>

      <Tabs value={selectedTab} onValueChange={onTabChange} className="w-full">
        <TabsList className="w-full h-12 bg-white/80 backdrop-blur-sm rounded-lg">
          <div className="grid grid-cols-6 w-full">
            <TabsTrigger value="overview" className="flex items-center gap-2 h-12">
              <FileText className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="market" className="flex items-center gap-2 h-12">
              <LineChart className="w-4 h-4" />
              Market Data
            </TabsTrigger>
            <TabsTrigger value="jobs" className="flex items-center gap-2 h-12">
              <Briefcase className="w-4 h-4" />
              Jobs
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center gap-2 h-12">
              <NewspaperIcon className="w-4 h-4" />
              News & Events
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex items-center gap-2 h-12">
              <Star className="w-4 h-4" />
              Reviews
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2 h-12">
              <Users2 className="w-4 h-4" />
              Team
            </TabsTrigger>
          </div>
        </TabsList>
      </Tabs>
    </div>
  );
};
