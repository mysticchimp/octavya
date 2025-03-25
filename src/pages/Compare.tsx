import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/Navigation";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Apple, Chrome } from "lucide-react";
import { FileText, LineChart } from "lucide-react";
import { CompanySelector } from "@/components/CompanySelector";
import { MetricsGrid } from "@/components/MetricsGrid";
import { StockChart } from "@/components/StockChart";


interface Offer {
  baseSalary: number;
  equity: number;
  bonus: number;
  workLifeBalance: number;
  careerGrowth: number;
}

const Compare = () => {
  const [offer1, setOffer1] = useState<Offer>({
    baseSalary: 0,
    equity: 0,
    bonus: 0,
    workLifeBalance: 5,
    careerGrowth: 5,
  });

  const [offer2, setOffer2] = useState<Offer>({
    baseSalary: 0,
    equity: 0,
    bonus: 0,
    workLifeBalance: 5,
    careerGrowth: 5,
  });

  const [result, setResult] = useState<string>("");

  const compareOffers = () => {
    const score1 = calculateScore(offer1);
    const score2 = calculateScore(offer2);

    if (score1 > score2) {
      setResult("Offer 1 is better");
    } else if (score2 > score1) {
      setResult("Offer 2 is better");
    } else {
      setResult("Both offers are equal");
    }
  };

  const calculateScore = (offer: Offer) => {
    const totalCompensation = offer.baseSalary + offer.equity + offer.bonus;
    const qualityScore = (offer.workLifeBalance + offer.careerGrowth) * 10000;
    return totalCompensation + qualityScore;
  };

  const companies = [
    {
      id: "apple",
      name: "Apple",
      logo: "apple-logo.png",
      employeeCount: 154000,
      workPolicy: "Hybrid",
      location: "Cupertino, CA",
      icon: <Apple className="w-4 h-4" />,
    },
    {
      id: "google",
      name: "Google",
      logo: "google-logo.png",
      employeeCount: 156500,
      workPolicy: "Hybrid",
      location: "Mountain View, CA",
      icon: <Chrome className="w-4 h-4" />,
    },
  ];

  const [selectedCompany1, setSelectedCompany1] = useState<string | null>(null);
  const [selectedCompany2, setSelectedCompany2] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-background p-8">
      <Navigation />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Compare</h1>
        <Tabs defaultValue="offers" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="offers">Compare Offers</TabsTrigger>
            <TabsTrigger value="companies">Compare Companies</TabsTrigger>
          </TabsList>
          <TabsContent value="offers">
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Compare Offers</h2>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Parameters Explained:</h3>
                <div className="bg-white/80 p-4 rounded-lg space-y-2">
                  <p><strong>Base Salary:</strong> Annual base compensation before taxes</p>
                  <p><strong>Equity:</strong> Total value of stock options/RSUs offered</p>
                  <p><strong>Bonus:</strong> Expected annual bonus amount</p>
                  <p><strong>Work-Life Balance:</strong> Rate from 1-10 (1: Poor, 10: Excellent)</p>
                  <p><strong>Career Growth:</strong> Rate from 1-10 (1: Limited, 10: Exceptional)</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Offer 1</h3>
                  <div className="space-y-4">
                    <input
                      type="number"
                      placeholder="Base Salary ($)"
                      className="w-full p-2 border rounded"
                      value={offer1.baseSalary}
                      onChange={(e) => setOffer1({ ...offer1, baseSalary: parseFloat(e.target.value) || 0 })}
                    />
                    <input
                      type="number"
                      placeholder="Equity ($)"
                      className="w-full p-2 border rounded"
                      value={offer1.equity}
                      onChange={(e) => setOffer1({ ...offer1, equity: parseFloat(e.target.value) || 0 })}
                    />
                    <input
                      type="number"
                      placeholder="Bonus ($)"
                      className="w-full p-2 border rounded"
                      value={offer1.bonus}
                      onChange={(e) => setOffer1({ ...offer1, bonus: parseFloat(e.target.value) || 0 })}
                    />
                    <input
                      type="number"
                      placeholder="Work-Life Balance (1-10)"
                      className="w-full p-2 border rounded"
                      min="1"
                      max="10"
                      value={offer1.workLifeBalance}
                      onChange={(e) => setOffer1({ ...offer1, workLifeBalance: parseFloat(e.target.value) || 5 })}
                    />
                    <input
                      type="number"
                      placeholder="Career Growth (1-10)"
                      className="w-full p-2 border rounded"
                      min="1"
                      max="10"
                      value={offer1.careerGrowth}
                      onChange={(e) => setOffer1({ ...offer1, careerGrowth: parseFloat(e.target.value) || 5 })}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Offer 2</h3>
                  <div className="space-y-4">
                    <input
                      type="number"
                      placeholder="Base Salary ($)"
                      className="w-full p-2 border rounded"
                      value={offer2.baseSalary}
                      onChange={(e) => setOffer2({ ...offer2, baseSalary: parseFloat(e.target.value) || 0 })}
                    />
                    <input
                      type="number"
                      placeholder="Equity ($)"
                      className="w-full p-2 border rounded"
                      value={offer2.equity}
                      onChange={(e) => setOffer2({ ...offer2, equity: parseFloat(e.target.value) || 0 })}
                    />
                    <input
                      type="number"
                      placeholder="Bonus ($)"
                      className="w-full p-2 border rounded"
                      value={offer2.bonus}
                      onChange={(e) => setOffer2({ ...offer2, bonus: parseFloat(e.target.value) || 0 })}
                    />
                    <input
                      type="number"
                      placeholder="Work-Life Balance (1-10)"
                      className="w-full p-2 border rounded"
                      min="1"
                      max="10"
                      value={offer2.workLifeBalance}
                      onChange={(e) => setOffer2({ ...offer2, workLifeBalance: parseFloat(e.target.value) || 5 })}
                    />
                    <input
                      type="number"
                      placeholder="Career Growth (1-10)"
                      className="w-full p-2 border rounded"
                      min="1"
                      max="10"
                      value={offer2.careerGrowth}
                      onChange={(e) => setOffer2({ ...offer2, careerGrowth: parseFloat(e.target.value) || 5 })}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button onClick={compareOffers} className="bg-primary text-white px-8 py-2 rounded-lg">
                  Compare Offers
                </Button>
                {result && (
                  <div className="mt-4 text-xl font-semibold">
                    {result}
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="companies">
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Compare Companies</h2>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <CompanySelector
                    companies={companies}
                    onCompanyChange={setSelectedCompany1}
                  />
                  {selectedCompany1 && (
                    <>
                      <MetricsGrid companyId={selectedCompany1} />
                      <div className="mt-4">
                        <StockChart companyId={selectedCompany1} />
                      </div>
                    </>
                  )}
                </div>
                <div>
                  <CompanySelector
                    companies={companies}
                    onCompanyChange={setSelectedCompany2}
                  />
                  {selectedCompany2 && (
                    <>
                      <MetricsGrid companyId={selectedCompany2} />
                      <div className="mt-4">
                        <StockChart companyId={selectedCompany2} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Compare;