
import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  postedDate: string;
  salary: string;
}

interface JobPostingsProps {
  companyId: string;
}

export const JobPostings = ({ companyId }: JobPostingsProps) => {
  const jobsByCompany: Record<string, JobPosting[]> = {
    apple: [
      {
        id: "1",
        title: "Senior iOS Engineer",
        department: "Engineering",
        location: "Cupertino, CA",
        type: "Full-time",
        postedDate: "2 days ago",
        salary: "$160,000 - $220,000",
      },
      {
        id: "2",
        title: "Product Designer",
        department: "Design",
        location: "Cupertino, CA",
        type: "Full-time",
        postedDate: "1 week ago",
        salary: "$140,000 - $180,000",
      },
      {
        id: "3",
        title: "Machine Learning Engineer",
        department: "AI/ML",
        location: "Austin, TX",
        type: "Full-time",
        postedDate: "3 days ago",
        salary: "$170,000 - $230,000",
      },
    ],
    microsoft: [
      {
        id: "1",
        title: "Cloud Solutions Architect",
        department: "Azure",
        location: "Redmond, WA",
        type: "Full-time",
        postedDate: "5 days ago",
        salary: "$150,000 - $200,000",
      },
      {
        id: "2",
        title: "Program Manager",
        department: "Office 365",
        location: "Remote",
        type: "Full-time",
        postedDate: "1 week ago",
        salary: "$130,000 - $170,000",
      },
      {
        id: "3",
        title: ".NET Developer",
        department: "Developer Tools",
        location: "New York, NY",
        type: "Full-time",
        postedDate: "3 days ago",
        salary: "$140,000 - $190,000",
      },
    ],
    meta: [
      {
        id: "1",
        title: "AR/VR Software Engineer",
        department: "Reality Labs",
        location: "Menlo Park, CA",
        type: "Full-time",
        postedDate: "1 day ago",
        salary: "$180,000 - $250,000",
      },
      {
        id: "2",
        title: "Data Scientist",
        department: "Analytics",
        location: "Remote",
        type: "Full-time",
        postedDate: "4 days ago",
        salary: "$160,000 - $220,000",
      },
      {
        id: "3",
        title: "Product Manager, Instagram",
        department: "Product",
        location: "New York, NY",
        type: "Full-time",
        postedDate: "1 week ago",
        salary: "$170,000 - $230,000",
      },
    ],
    google: [
      {
        id: "1",
        title: "Senior Software Engineer",
        department: "Search",
        location: "Mountain View, CA",
        type: "Full-time",
        postedDate: "3 days ago",
        salary: "$180,000 - $260,000",
      },
      {
        id: "2",
        title: "UX Researcher",
        department: "Design",
        location: "San Francisco, CA",
        type: "Full-time",
        postedDate: "1 week ago",
        salary: "$150,000 - $200,000",
      },
      {
        id: "3",
        title: "Site Reliability Engineer",
        department: "Cloud",
        location: "Seattle, WA",
        type: "Full-time",
        postedDate: "5 days ago",
        salary: "$170,000 - $240,000",
      },
    ],
  };

  const jobs = jobsByCompany[companyId] || jobsByCompany.apple;

  return (
    <div className="mb-8 animate-fade-up">
      <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
      <div className="space-y-4">
        {jobs.map((job) => (
          <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow backdrop-blur-sm bg-card hover:ring-2 hover:ring-accent">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-sm text-gray-600">{job.department}</p>
                <div className="flex gap-4 mt-2 text-sm text-gray-600">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                  <span>•</span>
                  <span>{job.postedDate}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{job.salary}</p>
                <button className="mt-2 inline-flex items-center gap-2 text-sm text-primary hover:text-accent">
                  <Briefcase className="w-4 h-4" />
                  Apply Now
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
