
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Plotly from 'plotly.js-dist';
import { useEffect, useState } from 'react';

interface CareerDataType {
  path: string;
  skills: string;
  education: string;
  interests: string;
  income: number;
}

const CareerPath = () => {
  const [skills, setSkills] = useState('');
  const [education, setEducation] = useState('');
  const [interests, setInterests] = useState('');
  const [desiredIncome, setDesiredIncome] = useState('');
  const [recommendations, setRecommendations] = useState<string[]>([]);

  const careerData: CareerDataType[] = [
    { path: "Software Engineer", skills: "Programming", education: "Bachelor's", interests: "Tech", income: 120000 },
    { path: "Data Scientist", skills: "Programming", education: "Master's", interests: "Tech", income: 130000 },
    { path: "Marketing Manager", skills: "Marketing", education: "Bachelor's", interests: "Business", income: 95000 },
    { path: "UX Designer", skills: "Design", education: "Bachelor's", interests: "Art", income: 85000 },
    { path: "Environmental Scientist", skills: "Science", education: "PhD", interests: "Environment", income: 75000 }
  ];

  const updateSankeyChart = (filtered: CareerDataType[]) => {
    const chartElement = document.getElementById('sankeyChart');
    if (!chartElement) return;

    const paths = filtered.slice(0, 5);
    const nodes = ["Your Profile", ...paths.map(c => c.path)];
    
    const data: Plotly.Data[] = [{
      type: "sankey",
      orientation: "h",
      node: {
        pad: 15,
        thickness: 20,
        line: { color: "black", width: 0.5 },
        label: nodes,
        color: ["#1e40af", ...Array(paths.length).fill("#3b82f6")]
      },
      link: {
        source: paths.map(() => 0),
        target: paths.map((_, i) => i + 1),
        value: paths.map(() => 1),
        color: paths.map(() => "rgba(147, 197, 253, 0.5)")
      }
    }];

    const layout: Partial<Plotly.Layout> = {
      title: "Career Path Recommendations",
      font: { size: 14 },
      height: 400,
      width: chartElement.offsetWidth,
      paper_bgcolor: 'transparent',
      plot_bgcolor: 'transparent',
      margin: { t: 40, b: 40, l: 50, r: 50 }
    };

    Plotly.newPlot(chartElement, data, layout, {
      displayModeBar: false,
      responsive: true
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const filtered = careerData.filter(career => {
      const skillsMatch = career.skills.toLowerCase().includes(skills.toLowerCase());
      const educationMatch = career.education.toLowerCase().includes(education.toLowerCase());
      const interestsMatch = career.interests.toLowerCase().includes(interests.toLowerCase());
      const incomeMatch = !desiredIncome || career.income >= parseInt(desiredIncome);

      return skillsMatch || educationMatch || interestsMatch || incomeMatch;
    });

    setRecommendations(filtered.map(career => career.path));
    updateSankeyChart(filtered);
  };

  const handleReset = () => {
    setSkills('');
    setEducation('');
    setInterests('');
    setDesiredIncome('');
    setRecommendations([]);
    const chartElement = document.getElementById('sankeyChart');
    if (chartElement) {
      Plotly.purge(chartElement);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const chartElement = document.getElementById('sankeyChart');
      if (chartElement && recommendations.length > 0) {
        Plotly.relayout(chartElement, {
          width: chartElement.offsetWidth
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      const chartElement = document.getElementById('sankeyChart');
      if (chartElement) {
        Plotly.purge(chartElement);
      }
    };
  }, [recommendations]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Career Path Finder</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="skills">Skills</Label>
          <Input
            id="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Enter your skills"
          />
        </div>
        <div>
          <Label htmlFor="education">Education</Label>
          <Input
            id="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            placeholder="Enter your education level"
          />
        </div>
        <div>
          <Label htmlFor="interests">Interests</Label>
          <Input
            id="interests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="Enter your interests"
          />
        </div>
        <div>
          <Label htmlFor="income">Desired Income</Label>
          <Input
            id="income"
            type="number"
            value={desiredIncome}
            onChange={(e) => setDesiredIncome(e.target.value)}
            placeholder="Enter desired income"
          />
        </div>
        <div className="flex gap-4">
          <Button type="submit">Find Career Paths</Button>
          <Button type="button" variant="outline" onClick={handleReset}>Reset</Button>
        </div>
      </form>

      {recommendations.length > 0 && (
        <div className="mt-8">
          <div id="sankeyChart" style={{ width: '100%', height: '400px' }} className="mb-8 bg-white/5 rounded-lg p-4"></div>
          <h2 className="text-xl font-semibold mb-4">Recommended Career Paths:</h2>
          <ul className="list-disc pl-5">
            {recommendations.map((path, index) => (
              <li key={index} className="mb-2">{path}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CareerPath;
