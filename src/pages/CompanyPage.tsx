
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Globe, 
  Users, 
  MapPin, 
  Building, 
  ChevronLeft, 
  ExternalLink,
  UserCircle,
  LineChart,
  Briefcase,
  PieChart,
  GraduationCap 
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlassdoorReviews } from "@/components/GlassdoorReviews";
import { MetricsGrid } from "@/components/MetricsGrid";
import { MarketIndicators } from "@/components/MarketIndicators";
import { companies } from "@/data/companyData";

export default function CompanyPage() {
  const { id } = useParams<{ id: string }>();
  const [company, setCompany] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundCompany = companies.find(c => c.id === id);
      if (foundCompany) {
        setCompany(foundCompany);
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!company) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Company not found</h1>
        <Link to="/">
          <Button>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6 max-w-7xl">
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Companies
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-background border flex items-center justify-center">
              <img src={`/${company.logo}`} alt={`${company.name} logo`} className="max-w-full max-h-full p-1" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{company.name}</h1>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="outline" className="flex items-center gap-1">
                  <Building className="h-3 w-3" />
                  {company.workPolicy}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {company.location}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  {company.employeeCount.toLocaleString()} employees
                </Badge>
              </div>
            </div>
          </div>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Company Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Mission</h3>
                <p className="text-sm text-muted-foreground">{company.mission}</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Vision</h3>
                <p className="text-sm text-muted-foreground">{company.vision}</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">About</h3>
                <p className="text-sm text-muted-foreground">{company.overview}</p>
              </div>
              <div className="pt-2">
                <a href={company.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm text-primary hover:underline">
                  <Globe className="mr-1 h-4 w-4" />
                  Visit Website
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Leadership</CardTitle>
              <CardDescription>Key executives</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {company.leadership.map((leader: any, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={leader.image} />
                      <AvatarFallback>{leader.name.split(' ').map((n: string) => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{leader.name}</div>
                      <div className="text-sm text-muted-foreground">{leader.title}</div>
                      <div className="text-xs text-muted-foreground">{leader.tenure} tenure</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Team Statistics</CardTitle>
              <CardDescription>Workforce composition</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Gender Distribution</h3>
                <div className="space-y-2">
                  {company.teamStats.genderSplit.map((item: any, index: number) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>{item.name}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-primary rounded-full h-2" 
                          style={{ width: `${item.value}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Function Distribution</h3>
                <div className="space-y-2">
                  {company.teamStats.functionSplit.map((item: any, index: number) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>{item.name}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-primary rounded-full h-2" 
                          style={{ width: `${item.value}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="metrics" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="metrics">
            <LineChart className="h-4 w-4 mr-2" />
            Metrics
          </TabsTrigger>
          <TabsTrigger value="reviews">
            <UserCircle className="h-4 w-4 mr-2" />
            Reviews
          </TabsTrigger>
          <TabsTrigger value="financial">
            <PieChart className="h-4 w-4 mr-2" />
            Financial
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="metrics" className="space-y-6">
          <MetricsGrid companyId={company.id} />
        </TabsContent>
        
        <TabsContent value="reviews" className="space-y-6">
          <GlassdoorReviews companyId={company.id} />
        </TabsContent>
        
        <TabsContent value="financial" className="space-y-6">
          <MarketIndicators companyId={company.id} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
