
import { Star, TrendingUp, Users, Award, Calendar, Briefcase } from "lucide-react";
import { ReactNode } from "react";

export interface MetricData {
  label: string;
  value: string;
  icon: ReactNode;
  change: string;
}

export const metricsData: Record<string, MetricData[]> = {
  apple: [
    { label: "Culture Score", value: "4.2/5" , icon: <Star className="w-5 h-5 text-yellow-500" />, change: "+0.2 this year"},
    { label: "Work-Life Balance", value: "3.8/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "+0.1 this year" },
    { label: "Career Growth", value: "4.3/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+5% this year" },
    { label: "Compensation", value: "4.6/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+10% this year" },
    { label: "Benefits", value: "4.5/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "Improved benefits" },
    { label: "Interview Success Rate", value: "12%", icon: <Users className="w-5 h-5 text-blue-500" />, change: "-2% this quarter" },
  ],
  microsoft: [
    { label: "Culture Score", value: "4.4/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "+0.1 this year" },
    { label: "Work-Life Balance", value: "4.2/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "+0.2 this year" },
    { label: "Career Growth", value: "4.4/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+8% this year" },
    { label: "Compensation", value: "4.3/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+7% this year" },
    { label: "Benefits", value: "4.4/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "New benefits added" },
    { label: "Interview Success Rate", value: "14%", icon: <Users className="w-5 h-5 text-blue-500" />, change: "+1% this quarter" },
  ],
  meta: [
    { label: "Culture Score", value: "4.0/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "-0.2 this year" },
    { label: "Work-Life Balance", value: "3.7/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "-0.3 this year" },
    { label: "Career Growth", value: "4.5/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+6% this year" },
    { label: "Compensation", value: "4.7/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+12% this year" },
    { label: "Benefits", value: "4.3/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "Added healthcare benefits" },
    { label: "Interview Success Rate", value: "8%", icon: <Users className="w-5 h-5 text-blue-500" />, change: "-1% this quarter" },
  ],
  google: [
    { label: "Culture Score", value: "4.4/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "+0.1 this year" },
    { label: "Work-Life Balance", value: "4.1/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "+0.2 this year" },
    { label: "Career Growth", value: "4.2/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+4% this year" },
    { label: "Compensation", value: "4.6/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+9% this year" },
    { label: "Benefits", value: "4.7/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "Best in industry" },
    { label: "Interview Success Rate", value: "7%", icon: <Users className="w-5 h-5 text-blue-500" />, change: "No change" },
  ],
  amazon: [
    { label: "Culture Score", value: "3.5/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "-0.1 this year" },
    { label: "Work-Life Balance", value: "2.8/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "-0.2 this year" },
    { label: "Career Growth", value: "4.5/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+7% this year" },
    { label: "Compensation", value: "4.2/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+8% this year" },
    { label: "Benefits", value: "3.8/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "Improved parental leave" },
    { label: "Interview Success Rate", value: "5%", icon: <Users className="w-5 h-5 text-blue-500" />, change: "-1% this quarter" },
  ],
  nvidia: [
    { label: "Culture Score", value: "4.3/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "+0.3 this year" },
    { label: "Work-Life Balance", value: "3.7/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "-0.1 this year" },
    { label: "Career Growth", value: "4.6/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+10% this year" },
    { label: "Compensation", value: "4.8/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+18% this year" },
    { label: "Benefits", value: "4.4/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "Added wellness programs" },
    { label: "Interview Success Rate", value: "6%", icon: <Users className="w-5 h-5 text-blue-500" />, change: "-2% this quarter" },
  ],
  netflix: [
    { label: "Culture Score", value: "4.1/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "No change" },
    { label: "Work-Life Balance", value: "3.3/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "-0.2 this year" },
    { label: "Career Growth", value: "4.2/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+3% this year" },
    { label: "Compensation", value: "4.9/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+15% this year" },
    { label: "Benefits", value: "4.2/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "Unlimited PTO" },
    { label: "Interview Success Rate", value: "10%", icon: <Users className="w-5 h-5 text-blue-500" />, change: "+1% this quarter" },
  ],
  salesforce: [
    { label: "Culture Score", value: "4.7/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "+0.2 this year" },
    { label: "Work-Life Balance", value: "4.5/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "+0.3 this year" },
    { label: "Career Growth", value: "4.0/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+2% this year" },
    { label: "Compensation", value: "4.1/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+5% this year" },
    { label: "Benefits", value: "4.6/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "Volunteer programs" },
    { label: "Interview Success Rate", value: "15%", icon: <Users className="w-5 h-5 text-blue-500" />, change: "+2% this quarter" },
  ],
  tesla: [
    { label: "Culture Score", value: "3.6/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "-0.2 this year" },
    { label: "Work-Life Balance", value: "2.5/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "-0.3 this year" },
    { label: "Career Growth", value: "4.2/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+5% this year" },
    { label: "Compensation", value: "4.0/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+3% this year" },
    { label: "Benefits", value: "3.7/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "Stock options" },
    { label: "Interview Success Rate", value: "9%", icon: <Users className="w-5 h-5 text-blue-500" />, change: "-3% this quarter" },
  ],
  ibm: [
    { label: "Culture Score", value: "3.8/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "+0.1 this year" },
    { label: "Work-Life Balance", value: "4.3/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "+0.2 this year" },
    { label: "Career Growth", value: "3.5/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+1% this year" },
    { label: "Compensation", value: "3.7/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+3% this year" },
    { label: "Benefits", value: "4.1/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "Improved healthcare" },
    { label: "Interview Success Rate", value: "18%", icon: <Users className="w-5 h-5 text-blue-500" />, change: "+2% this quarter" },
  ],
  oracle: [
    { label: "Culture Score", value: "3.3/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "No change" },
    { label: "Work-Life Balance", value: "3.4/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "-0.1 this year" },
    { label: "Career Growth", value: "3.6/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+2% this year" },
    { label: "Compensation", value: "4.2/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+6% this year" },
    { label: "Benefits", value: "3.8/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "Standard package" },
    { label: "Interview Success Rate", value: "16%", icon: <Users className="w-5 h-5 text-blue-500" />, change: "No change" },
  ],
  amd: [
    { label: "Culture Score", value: "4.5/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "+0.4 this year" },
    { label: "Work-Life Balance", value: "3.9/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "+0.2 this year" },
    { label: "Career Growth", value: "4.4/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+8% this year" },
    { label: "Compensation", value: "4.3/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+12% this year" },
    { label: "Benefits", value: "4.0/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "Improved stock options" },
    { label: "Interview Success Rate", value: "11%", icon: <Users className="w-5 h-5 text-blue-500" />, change: "-1% this quarter" },
  ],
  intel: [
    { label: "Culture Score", value: "3.4/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "-0.2 this year" },
    { label: "Work-Life Balance", value: "4.1/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "+0.1 this year" },
    { label: "Career Growth", value: "3.5/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "-2% this year" },
    { label: "Compensation", value: "3.9/5", icon: <TrendingUp className="w-5 h-5 text-green-500" />, change: "+2% this year" },
    { label: "Benefits", value: "4.2/5", icon: <Star className="w-5 h-5 text-yellow-500" />, change: "Comprehensive package" },
    { label: "Interview Success Rate", value: "17%", icon: <Users className="w-5 h-5 text-blue-500" />, change: "+2% this quarter" },
  ]
  // Add more companies as needed
};
