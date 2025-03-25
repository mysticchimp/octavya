
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, ExternalLink } from "lucide-react";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  source: string;
  url: string;
  summary?: string;
}

interface NewsSectionProps {
  companyId: string;
}

export const NewsSection = ({ companyId }: NewsSectionProps) => {
  const newsItems: Record<string, NewsItem[]> = {
    apple: [
      {
        id: "1",
        title: "Apple Vision Pro Sales Exceed Expectations in First Month",
        date: "2024-03-15",
        source: "Tech Daily",
        url: "https://example.com/news/1",
        summary: "Apple's latest product launch shows promising results in the AR/VR market"
      },
      {
        id: "2",
        title: "Apple Announces New MacBook Pro with M3 Ultra Chip",
        date: "2024-03-10",
        source: "Business Insider",
        url: "https://example.com/news/2",
        summary: "Revolutionary chip promises 40% performance boost"
      },
      {
        id: "3",
        title: "Apple's AI Strategy: Focus on Privacy and User Experience",
        date: "2024-03-05",
        source: "Reuters",
        url: "https://example.com/news/3",
        summary: "Company takes unique approach to AI implementation"
      }
    ],
    microsoft: [
      {
        id: "1",
        title: "Microsoft's AI Copilot Reaches 100 Million Active Users",
        date: "2024-03-14",
        source: "Tech Review",
        url: "https://example.com/news/4",
        summary: "AI assistant proves popular across Microsoft 365 suite"
      },
      {
        id: "2",
        title: "Azure Cloud Revenue Grows 50% Year-over-Year",
        date: "2024-03-08",
        source: "Cloud Weekly",
        url: "https://example.com/news/5",
        summary: "Strong performance in cloud computing segment"
      },
      {
        id: "3",
        title: "Microsoft Acquires Gaming Studio for $3.6 Billion",
        date: "2024-03-02",
        source: "Gaming News",
        url: "https://example.com/news/6",
        summary: "Strategic expansion of Xbox game portfolio"
      }
    ],
    meta: [
      {
        id: "1",
        title: "Meta's Quest 3 Becomes Best-Selling VR Headset",
        date: "2024-03-13",
        source: "VR World",
        url: "https://example.com/news/7",
        summary: "Company dominates consumer VR market"
      },
      {
        id: "2",
        title: "Instagram Introduces New AI-Powered Features",
        date: "2024-03-07",
        source: "Social Media Today",
        url: "https://example.com/news/8",
        summary: "New tools enhance content creation and discovery"
      },
      {
        id: "3",
        title: "Meta's Ad Revenue Rebounds in Q1 2024",
        date: "2024-03-01",
        source: "Ad Week",
        url: "https://example.com/news/9",
        summary: "Digital advertising shows strong growth"
      }
    ],
    google: [
      {
        id: "1",
        title: "Google Launches Next-Gen AI Model",
        date: "2024-03-12",
        source: "AI Weekly",
        url: "https://example.com/news/10",
        summary: "Gemini Ultra sets new benchmarks in AI performance"
      },
      {
        id: "2",
        title: "Chrome Browser Gets Major Privacy Update",
        date: "2024-03-06",
        source: "Tech News",
        url: "https://example.com/news/11",
        summary: "New features enhance user privacy and security"
      },
      {
        id: "3",
        title: "Google Cloud Partners with Major Healthcare Providers",
        date: "2024-03-01",
        source: "Healthcare Tech",
        url: "https://example.com/news/12",
        summary: "Strategic expansion into healthcare sector"
      }
    ]
  };

  const companyNews = newsItems[companyId] || newsItems.apple;

  return (
    <Card className="bg-white/50 backdrop-blur-sm hover:ring-2 hover:ring-accent transition-all">
      <CardHeader>
        <CardTitle>Latest News</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {companyNews.map((news) => (
          <a
            key={news.id}
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-lg hover:bg-white/50 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="font-medium hover:text-accent transition-colors">
                  {news.title}
                </h3>
                {news.summary && (
                  <p className="text-sm text-gray-600">{news.summary}</p>
                )}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="w-4 h-4" />
                  <span>{new Date(news.date).toLocaleDateString()}</span>
                  <span>•</span>
                  <span>{news.source}</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 flex-shrink-0 text-muted-foreground" />
            </div>
          </a>
        ))}
      </CardContent>
    </Card>
  );
};
