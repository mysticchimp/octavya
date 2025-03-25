import { useState } from "react";
import { CompanyHeader } from "@/components/CompanyHeader";
import { MetricsGrid } from "@/components/MetricsGrid";
import { CompanyEvents } from "@/components/CompanyEvents";
import { CompanySelector } from "@/components/CompanySelector";
import { JobPostings } from "@/components/JobPostings";
import { StockChart } from "@/components/StockChart";
import { NewsSection } from "@/components/NewsSection";
import { GlassdoorReviews } from "@/components/GlassdoorReviews";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Apple, Monitor, Chrome, Database } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { MarketIndicators } from "@/components/MarketIndicators";


const Index = () => {
  const companies = [
    {
      id: "apple",
      name: "Apple Inc.",
      logo: "lovable-uploads/7e938a19-56e6-4020-aaea-aa91a0b25f50.png",
      employeeCount: 164000,
      workPolicy: "Hybrid",
      location: "Cupertino, CA",
      website: "https://apple.com",
      mission: "To bring the best personal computing products and support to students, educators, designers, scientists, engineers, businesspersons and consumers in over 140 countries around the world.",
      vision: "To make the best products on earth, and to leave the world better than we found it.",
      overview: "Apple Inc. is a technology company that designs, develops, and sells consumer electronics, computer software, and online services.",
      leadership: [
        {
          name: "Tim Cook",
          title: "Chief Executive Officer",
          tenure: "11 years",
          linkedin: "https://linkedin.com/in/timcook",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
        },
        {
          name: "Jeff Williams",
          title: "Chief Operating Officer",
          tenure: "8 years",
          linkedin: "https://linkedin.com/in/jeffwilliams",
          image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857"
        }
      ],
      teamStats: {
        genderSplit: [
          { name: 'Male', value: 62 },
          { name: 'Female', value: 35 },
          { name: 'Non-binary', value: 3 }
        ],
        functionSplit: [
          { name: 'Engineering', value: 48 },
          { name: 'Design', value: 18 },
          { name: 'Sales', value: 15 },
          { name: 'Marketing', value: 12 },
          { name: 'Operations', value: 7 }
        ],
        officeLocations: [
          { name: 'Cupertino', coordinates: [-122.0322, 37.3318], employees: 25000 },
          { name: 'Austin', coordinates: [-97.7431, 30.2672], employees: 15000 },
          { name: 'London', coordinates: [-0.1276, 51.5074], employees: 8000 }
        ]
      },
      icon: <Apple className="w-4 h-4" />
    },
    {
      id: "microsoft",
      name: "Microsoft Corporation",
      logo: "lovable-uploads/5cb59849-56e0-48a6-a443-8dc8e5696254.png",
      employeeCount: 221000,
      workPolicy: "Hybrid",
      location: "Redmond, WA",
      website: "https://microsoft.com",
      mission: "To empower every person and every organization on the planet to achieve more.",
      vision: "To become the leading provider of technology and cloud computing solutions.",
      overview: "Microsoft Corporation is a multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
      leadership: [
        {
          name: "Satya Nadella",
          title: "Chief Executive Officer",
          tenure: "10 years",
          linkedin: "https://linkedin.com/in/satyanadella",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
        },
        {
          name: "Amy Hood",
          title: "Chief Financial Officer",
          tenure: "11 years",
          linkedin: "https://linkedin.com/in/amyhood",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
        },
        {
          name: "Judson Althoff",
          title: "Chief Commercial Officer",
          tenure: "5 years",
          linkedin: "https://linkedin.com/in/judsonalthoff",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
        },
        {
          name: "Chris Capossela",
          title: "Chief Marketing Officer",
          tenure: "9 years",
          linkedin: "https://linkedin.com/in/chriscapossela",
          image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef"
        }
      ],
      teamStats: {
        genderSplit: [
          { name: 'Male', value: 70 },
          { name: 'Female', value: 28 },
          { name: 'Non-binary', value: 2 }
        ],
        functionSplit: [
          { name: 'Engineering', value: 50 },
          { name: 'Sales', value: 15 },
          { name: 'Product', value: 15 },
          { name: 'Marketing', value: 10 },
          { name: 'Operations', value: 10 }
        ],
        officeLocations: [
          { name: 'Redmond', coordinates: [-122.1215, 47.6740], employees: 50000 },
          { name: 'San Francisco', coordinates: [-122.4194, 37.7749], employees: 10000 },
          { name: 'Dublin', coordinates: [-6.2603, 53.3498], employees: 5000 }
        ]
      },
      icon: <Monitor className="w-4 h-4" />
    },
    {
      id: "meta",
      name: "Meta Platforms Inc.",
      logo: "lovable-uploads/4145578c-40f6-4200-a7f3-21f4789d147e.png",
      employeeCount: 87314,
      workPolicy: "Remote",
      location: "Menlo Park, CA",
      website: "https://meta.com",
      mission: "To give people the power to build community and bring the world closer together.",
      vision: "To help bring the metaverse to life and focus on creating social experiences.",
      overview: "Meta Platforms, Inc. develops products that enable people to connect and share with friends and family through mobile devices, personal computers, virtual reality headsets, and in-home devices.",
      leadership: [
        {
          name: "Mark Zuckerberg",
          title: "Chief Executive Officer",
          tenure: "20 years",
          linkedin: "https://linkedin.com/in/markzuckerberg",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
        },
        {
          name: "Susan Li",
          title: "Chief Financial Officer",
          tenure: "2 years",
          linkedin: "https://linkedin.com/in/susanli",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
        },
        {
          name: "Chris Cox",
          title: "Chief Product Officer",
          tenure: "14 years",
          linkedin: "https://linkedin.com/in/chriscox",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
        },
        {
          name: "Javier Olivan",
          title: "Chief Operating Officer",
          tenure: "3 years",
          linkedin: "https://linkedin.com/in/javiolivan",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
        }
      ],
      teamStats: {
        genderSplit: [
          { name: 'Male', value: 58 },
          { name: 'Female', value: 39 },
          { name: 'Non-binary', value: 3 }
        ],
        functionSplit: [
          { name: 'Engineering', value: 42 },
          { name: 'Product', value: 25 },
          { name: 'Sales', value: 15 },
          { name: 'Marketing', value: 12 },
          { name: 'Operations', value: 6 }
        ],
        officeLocations: [
          { name: 'Menlo Park', coordinates: [-122.1817, 37.4529], employees: 35000 },
          { name: 'New York', coordinates: [-74.0060, 40.7128], employees: 15000 },
          { name: 'Singapore', coordinates: [103.8198, 1.3521], employees: 10000 }
        ]
      },
      icon: <Database className="w-4 h-4" />
    },
    {
      id: "google",
      name: "Google LLC",
      logo: "lovable-uploads/2c1c1100-32eb-4083-85f3-ee8e89d93f4c.png",
      employeeCount: 156500,
      workPolicy: "Hybrid",
      location: "Mountain View, CA",
      website: "https://google.com",
      mission: "To organize the world's information and make it universally accessible and useful.",
      vision: "To provide access to the world's information in one click.",
      overview: "Google LLC is a technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",
      leadership: [
        {
          name: "Sundar Pichai",
          title: "Chief Executive Officer",
          tenure: "9 years",
          linkedin: "https://linkedin.com/in/sundarpichai",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
        },
        {
          name: "Ruth Porat",
          title: "Chief Financial Officer",
          tenure: "9 years",
          linkedin: "https://linkedin.com/in/ruthporat",
          image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
        },
        {
          name: "Philipp Schindler",
          title: "Chief Business Officer",
          tenure: "8 years",
          linkedin: "https://linkedin.com/in/philippschindler",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
        },
        {
          name: "Kent Walker",
          title: "President, Global Affairs & Chief Legal Officer",
          tenure: "7 years",
          linkedin: "https://linkedin.com/in/kentwalker",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
        }
      ],
      teamStats: {
        genderSplit: [
          { name: 'Male', value: 68 },
          { name: 'Female', value: 30 },
          { name: 'Non-binary', value: 2 }
        ],
        functionSplit: [
          { name: 'Engineering', value: 60 },
          { name: 'Product', value: 15 },
          { name: 'Sales', value: 10 },
          { name: 'Marketing', value: 8 },
          { name: 'Operations', value: 7 }
        ],
        officeLocations: [
          { name: 'Mountain View', coordinates: [-122.0838, 37.3861], employees: 45000 },
          { name: 'New York', coordinates: [-74.0060, 40.7128], employees: 20000 },
          { name: 'London', coordinates: [-0.1276, 51.5074], employees: 15000 }
        ]
      },
      icon: <Chrome className="w-4 h-4" />
    }
  ];

  const [selectedCompanyId, setSelectedCompanyId] = useState(companies[0].id);
  const [selectedTab, setSelectedTab] = useState("overview");

  const selectedCompany = companies.find(
    (company) => company.id === selectedCompanyId
  ) || companies[0];

  const COLORS = ['#7E69AB', '#9F8CC1', '#BFB0D7', '#DFD2ED'];

  const handleCompanyChange = (companyId: string) => {
    setSelectedCompanyId(companyId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background">
      <div className="sticky top-0 z-50 bg-gradient-to-br from-secondary to-background pt-8 pb-4 px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-background" />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex justify-between items-start">
            <CompanySelector
              selectedCompany={selectedCompanyId}
              companies={companies}
              onCompanyChange={handleCompanyChange}
            />
            <Navigation />
          </div>
          <div className="mt-8">
            <CompanyHeader 
              {...selectedCompany} 
              selectedTab={selectedTab}
              onTabChange={setSelectedTab}
            />
          </div>
        </div>
      </div>

      <div className="px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={selectedTab} className="w-full">
            <TabsContent value="overview">
              <div className="space-y-8">
                <Card className="p-6 space-y-4 bg-white/50 backdrop-blur-sm text-left">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Overview</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedCompany.overview}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Mission</h3>
                      <p className="text-gray-700 leading-relaxed">{selectedCompany.mission}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Vision</h3>
                      <p className="text-gray-700 leading-relaxed">{selectedCompany.vision}</p>
                    </div>
                  </div>
                </Card>
                <MetricsGrid companyId={selectedCompanyId} />
              </div>
            </TabsContent>

            <TabsContent value="market">
              <MarketIndicators companyId={selectedCompanyId} />
              <div className="mt-6">
                <StockChart companyId={selectedCompanyId} />
              </div>
            </TabsContent>

            <TabsContent value="jobs">
              <JobPostings companyId={selectedCompanyId} />
            </TabsContent>

            <TabsContent value="news">
              <div className="space-y-8">
                <NewsSection companyId={selectedCompanyId} />
                <CompanyEvents />
              </div>
            </TabsContent>

            <TabsContent value="reviews">
              <GlassdoorReviews companyId={selectedCompanyId} />
            </TabsContent>

            <TabsContent value="team" className="mt-6 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Gender Distribution</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={selectedCompany.teamStats.genderSplit}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {selectedCompany.teamStats.genderSplit.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Job Functions</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={selectedCompany.teamStats.functionSplit}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          fill="#8884d8"
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {selectedCompany.teamStats.functionSplit.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Global Office Locations</h3>
                <div className="w-full h-[400px] rounded-lg overflow-hidden bg-gray-100 relative flex items-center justify-center">
                  <span className="text-gray-500 text-lg">(Map)</span>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Executive Leadership Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {selectedCompany.leadership?.map((executive) => (
                    <div key={executive.name} className="flex flex-col items-center text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm">
                      <img 
                        src={executive.image} 
                        alt={executive.name}
                        className="w-24 h-24 rounded-full object-cover mb-4"
                      />
                      <h3 className="font-semibold text-lg">{executive.name}</h3>
                      <p className="text-gray-600 mb-2">{executive.title}</p>
                      <p className="text-sm text-gray-500 mb-3">Tenure: {executive.tenure}</p>
                      <a
                        href={executive.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn Profile</span>
                      </a>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Index;