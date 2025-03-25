
import { DollarSign, PieChart, TrendingUp, BarChart2, LineChart, Activity } from "lucide-react";
import { ReactNode } from "react";

export interface MarketIndicator {
  label: string;
  value: string;
  change: string;
  icon: ReactNode;
  tooltip: string;
}

export const marketIndicatorsData: Record<string, MarketIndicator[]> = {
  apple: [
    { label: "Net Income", value: "$99.8B", change: "+22% YoY", icon: <DollarSign className="w-5 h-5 text-green-500" />, tooltip: "Exceptional net income growth across all segments. Historic high." },
    { label: "Operating Margin", value: "30.3%", change: "+2.1% QoQ", icon: <PieChart className="w-5 h-5 text-blue-500" />, tooltip: "Industry-leading operating margin. Continuous improvement trend." },
    { label: "Revenue Growth", value: "18.1%", change: "+3.5% YoY", icon: <TrendingUp className="w-5 h-5 text-purple-500" />, tooltip: "Very strong revenue growth across all segments. Excellent performance." },
    { label: "Current Ratio", value: "2.22", change: "+0.08", icon: <BarChart2 className="w-5 h-5 text-orange-500" />, tooltip: "Excellent liquidity position. Well above the ideal ratio of 2.0." },
    { label: "Cash Flow", value: "$96.2B", change: "+11% QoQ", icon: <LineChart className="w-5 h-5 text-indigo-500" />, tooltip: "Outstanding cash flow generation. Among the best in the industry." },
    { label: "CapEx", value: "$31.2B", change: "+18% YoY", icon: <Activity className="w-5 h-5 text-red-500" />, tooltip: "Heavy investment in AI and data centers. Strategic positioning for future growth." },
  ],
  microsoft: [
    { label: "Net Income", value: "$72.4B", change: "+18% YoY", icon: <DollarSign className="w-5 h-5 text-green-500" />, tooltip: "Exceptional net income growth driven by cloud services. Very positive trend." },
    { label: "Operating Margin", value: "42.1%", change: "+3.2% QoQ", icon: <PieChart className="w-5 h-5 text-blue-500" />, tooltip: "Industry-leading operating margin shows excellent operational efficiency. Strong positive indicator." },
    { label: "Revenue Growth", value: "16.4%", change: "+3.8% YoY", icon: <TrendingUp className="w-5 h-5 text-purple-500" />, tooltip: "Strong revenue growth across all segments. Well above industry average." },
    { label: "Current Ratio", value: "2.05", change: "+0.15", icon: <BarChart2 className="w-5 h-5 text-orange-500" />, tooltip: "Very strong liquidity position. Well above the ideal ratio of 2.0." },
    { label: "Cash Flow", value: "$87.7B", change: "+12% QoQ", icon: <LineChart className="w-5 h-5 text-indigo-500" />, tooltip: "Excellent cash flow generation showing strong business fundamentals." },
    { label: "CapEx", value: "$24.8B", change: "+15% YoY", icon: <Activity className="w-5 h-5 text-red-500" />, tooltip: "Heavy investment in infrastructure and R&D. Shows commitment to future growth." },
  ],
  meta: [
    { label: "Net Income", value: "$39.1B", change: "+25% YoY", icon: <DollarSign className="w-5 h-5 text-green-500" />, tooltip: "Strong recovery in profitability. Significant improvement from previous year." },
    { label: "Operating Margin", value: "25.8%", change: "+4.3% QoQ", icon: <PieChart className="w-5 h-5 text-blue-500" />, tooltip: "Improving margins after cost-cutting measures. Positive trend but room for improvement." },
    { label: "Revenue Growth", value: "14.2%", change: "+1.9% YoY", icon: <TrendingUp className="w-5 h-5 text-purple-500" />, tooltip: "Solid revenue growth despite ad market challenges. Shows resilience." },
    { label: "Current Ratio", value: "1.72", change: "-0.08", icon: <BarChart2 className="w-5 h-5 text-orange-500" />, tooltip: "Adequate liquidity but showing slight decline. Worth monitoring." },
    { label: "Cash Flow", value: "$45.6B", change: "+7% QoQ", icon: <LineChart className="w-5 h-5 text-indigo-500" />, tooltip: "Good cash flow generation but lower than peers. Room for improvement." },
    { label: "CapEx", value: "$32.5B", change: "+28% YoY", icon: <Activity className="w-5 h-5 text-red-500" />, tooltip: "Heavy investment in metaverse and AI. High risk, high reward strategy." },
  ],
  google: [
    { label: "Net Income", value: "$84.3B", change: "+21% YoY", icon: <DollarSign className="w-5 h-5 text-green-500" />, tooltip: "Outstanding profit growth driven by AI and cloud. Very positive indicator." },
    { label: "Operating Margin", value: "32.4%", change: "+2.8% QoQ", icon: <PieChart className="w-5 h-5 text-blue-500" />, tooltip: "Excellent operating efficiency. Well above industry average." },
    { label: "Revenue Growth", value: "24.3%", change: "+5.1% YoY", icon: <TrendingUp className="w-5 h-5 text-purple-500" />, tooltip: "Exceptional revenue growth. Leading the tech sector." },
    { label: "Current Ratio", value: "2.34", change: "+0.11", icon: <BarChart2 className="w-5 h-5 text-orange-500" />, tooltip: "Very strong liquidity position. Among the best in the industry." },
    { label: "Cash Flow", value: "$91.5B", change: "+14% QoQ", icon: <LineChart className="w-5 h-5 text-indigo-500" />, tooltip: "Outstanding cash flow generation with consistent growth." },
    { label: "CapEx", value: "$29.8B", change: "+22% YoY", icon: <Activity className="w-5 h-5 text-red-500" />, tooltip: "Significant investment in AI infrastructure. Well-positioned for future growth." },
  ],
  amazon: [
    { label: "Net Income", value: "$30.4B", change: "+19% YoY", icon: <DollarSign className="w-5 h-5 text-green-500" />, tooltip: "Strong profit growth driven by AWS and improved retail margins." },
    { label: "Operating Margin", value: "8.2%", change: "+1.8% QoQ", icon: <PieChart className="w-5 h-5 text-blue-500" />, tooltip: "Improving operating margins. Good progress but lower than tech peers." },
    { label: "Revenue Growth", value: "13.2%", change: "+2.1% YoY", icon: <TrendingUp className="w-5 h-5 text-purple-500" />, tooltip: "Solid revenue growth across all segments. Better than retail average." },
    { label: "Current Ratio", value: "1.05", change: "+0.03", icon: <BarChart2 className="w-5 h-5 text-orange-500" />, tooltip: "Adequate liquidity but relatively tight. Typical for retail business model." },
    { label: "Cash Flow", value: "$54.2B", change: "+9% QoQ", icon: <LineChart className="w-5 h-5 text-indigo-500" />, tooltip: "Strong cash flow generation with consistent growth." },
    { label: "CapEx", value: "$47.3B", change: "+15% YoY", icon: <Activity className="w-5 h-5 text-red-500" />, tooltip: "Heavy investment in fulfillment and cloud infrastructure. Necessary for growth." },
  ],
  nvidia: [
    { label: "Net Income", value: "$34.2B", change: "+143% YoY", icon: <DollarSign className="w-5 h-5 text-green-500" />, tooltip: "Extraordinary profit growth driven by AI chip demand. Historic performance." },
    { label: "Operating Margin", value: "47.3%", change: "+12.6% QoQ", icon: <PieChart className="w-5 h-5 text-blue-500" />, tooltip: "Industry-leading margins. Exceptional operational leverage." },
    { label: "Revenue Growth", value: "125.8%", change: "+23.6% YoY", icon: <TrendingUp className="w-5 h-5 text-purple-500" />, tooltip: "Unprecedented revenue growth led by data center GPUs. Record-breaking." },
    { label: "Current Ratio", value: "3.43", change: "+0.81", icon: <BarChart2 className="w-5 h-5 text-orange-500" />, tooltip: "Extremely strong liquidity position. Exceptional financial health." },
    { label: "Cash Flow", value: "$26.7B", change: "+118% QoQ", icon: <LineChart className="w-5 h-5 text-indigo-500" />, tooltip: "Extraordinary cash flow generation driven by high-margin products." },
    { label: "CapEx", value: "$10.8B", change: "+87% YoY", icon: <Activity className="w-5 h-5 text-red-500" />, tooltip: "Strategic investments in R&D and manufacturing capacity. Well-positioned for growth." },
  ],
  netflix: [
    { label: "Net Income", value: "$7.7B", change: "+22% YoY", icon: <DollarSign className="w-5 h-5 text-green-500" />, tooltip: "Strong profit growth after subscriber rebound. Positive trend." },
    { label: "Operating Margin", value: "24.5%", change: "+3.7% QoQ", icon: <PieChart className="w-5 h-5 text-blue-500" />, tooltip: "Improving margins with scale. Well-managed content investments." },
    { label: "Revenue Growth", value: "15.1%", change: "+4.5% YoY", icon: <TrendingUp className="w-5 h-5 text-purple-500" />, tooltip: "Solid revenue growth from new advertising tier and subscriber growth." },
    { label: "Current Ratio", value: "1.12", change: "+0.06", icon: <BarChart2 className="w-5 h-5 text-orange-500" />, tooltip: "Adequate liquidity. Typical for subscription business model." },
    { label: "Cash Flow", value: "$8.3B", change: "+25% QoQ", icon: <LineChart className="w-5 h-5 text-indigo-500" />, tooltip: "Improving cash flow with reduced content spending. Positive trend." },
    { label: "Content Spend", value: "$17.1B", change: "-8% YoY", icon: <Activity className="w-5 h-5 text-red-500" />, tooltip: "More disciplined content investments with focus on quality over quantity." },
  ],
  salesforce: [
    { label: "Net Income", value: "$8.4B", change: "+15% YoY", icon: <DollarSign className="w-5 h-5 text-green-500" />, tooltip: "Good profit growth showing operational discipline. Positive trend." },
    { label: "Operating Margin", value: "18.2%", change: "+4.1% QoQ", icon: <PieChart className="w-5 h-5 text-blue-500" />, tooltip: "Improving margins after cost-cutting measures. Positive direction." },
    { label: "Revenue Growth", value: "11.8%", change: "+1.2% YoY", icon: <TrendingUp className="w-5 h-5 text-purple-500" />, tooltip: "Moderate growth in challenging enterprise spending environment." },
    { label: "Current Ratio", value: "1.35", change: "+0.09", icon: <BarChart2 className="w-5 h-5 text-orange-500" />, tooltip: "Adequate liquidity position. Improved from previous year." },
    { label: "Cash Flow", value: "$9.6B", change: "+18% QoQ", icon: <LineChart className="w-5 h-5 text-indigo-500" />, tooltip: "Strong cash flow generation from subscription revenue model." },
    { label: "ARR", value: "$35.4B", change: "+13% YoY", icon: <Activity className="w-5 h-5 text-red-500" />, tooltip: "Solid growth in annual recurring revenue. Good indicator of future revenue." },
  ],
  tesla: [
    { label: "Net Income", value: "$14.8B", change: "-8% YoY", icon: <DollarSign className="w-5 h-5 text-red-500" />, tooltip: "Declining profits due to price cuts and increased competition." },
    { label: "Operating Margin", value: "9.2%", change: "-6.3% QoQ", icon: <PieChart className="w-5 h-5 text-red-500" />, tooltip: "Significant margin compression from price reductions. Concerning trend." },
    { label: "Revenue Growth", value: "3.5%", change: "-8.2% YoY", icon: <TrendingUp className="w-5 h-5 text-red-500" />, tooltip: "Slowing growth as EV competition intensifies. Challenging environment." },
    { label: "Current Ratio", value: "2.15", change: "-0.38", icon: <BarChart2 className="w-5 h-5 text-orange-500" />, tooltip: "Still strong liquidity position despite decline. Adequate for future investments." },
    { label: "Cash Flow", value: "$11.2B", change: "-15% QoQ", icon: <LineChart className="w-5 h-5 text-red-500" />, tooltip: "Declining cash flow generation. Reflects competitive pressures." },
    { label: "CapEx", value: "$19.5B", change: "+28% YoY", icon: <Activity className="w-5 h-5 text-blue-500" />, tooltip: "Heavy investment in new models and manufacturing. Preparing for next growth phase." },
  ],
  ibm: [
    { label: "Net Income", value: "$8.9B", change: "+11% YoY", icon: <DollarSign className="w-5 h-5 text-green-500" />, tooltip: "Improving profit growth after strategic repositioning. Positive direction." },
    { label: "Operating Margin", value: "16.3%", change: "+2.2% QoQ", icon: <PieChart className="w-5 h-5 text-blue-500" />, tooltip: "Margin improvement from focus on higher-value offerings. Good progress." },
    { label: "Revenue Growth", value: "6.2%", change: "+1.8% YoY", icon: <TrendingUp className="w-5 h-5 text-blue-500" />, tooltip: "Moderate but improving growth led by consulting and software." },
    { label: "Current Ratio", value: "1.25", change: "+0.05", icon: <BarChart2 className="w-5 h-5 text-orange-500" />, tooltip: "Adequate liquidity position. Modest improvement." },
    { label: "Cash Flow", value: "$12.6B", change: "+8% QoQ", icon: <LineChart className="w-5 h-5 text-blue-500" />, tooltip: "Solid cash flow generation with improving trend." },
    { label: "Dividend Yield", value: "4.6%", change: "+0.2% YoY", icon: <Activity className="w-5 h-5 text-green-500" />, tooltip: "Attractive dividend yield with long history of increases. Income opportunity." },
  ],
  oracle: [
    { label: "Net Income", value: "$13.2B", change: "+15% YoY", icon: <DollarSign className="w-5 h-5 text-green-500" />, tooltip: "Strong profit growth driven by cloud transition. Positive trend." },
    { label: "Operating Margin", value: "41.2%", change: "+3.8% QoQ", icon: <PieChart className="w-5 h-5 text-blue-500" />, tooltip: "Excellent margins reflecting high-value enterprise products. Industry-leading." },
    { label: "Revenue Growth", value: "10.8%", change: "+2.5% YoY", icon: <TrendingUp className="w-5 h-5 text-blue-500" />, tooltip: "Solid growth led by cloud services. Successful business transition." },
    { label: "Current Ratio", value: "0.85", change: "-0.03", icon: <BarChart2 className="w-5 h-5 text-red-500" />, tooltip: "Below ideal liquidity position. Typical for Oracle's capital structure." },
    { label: "Cash Flow", value: "$15.3B", change: "+12% QoQ", icon: <LineChart className="w-5 h-5 text-green-500" />, tooltip: "Strong cash flow generation from high-margin products and subscriptions." },
    { label: "Cloud ARR", value: "$18.2B", change: "+28% YoY", icon: <Activity className="w-5 h-5 text-green-500" />, tooltip: "Excellent growth in cloud annual recurring revenue. Strategic success." },
  ],
  amd: [
    { label: "Net Income", value: "$7.5B", change: "+42% YoY", icon: <DollarSign className="w-5 h-5 text-green-500" />, tooltip: "Extraordinary profit growth driven by data center and AI chips. Excellent execution." },
    { label: "Operating Margin", value: "24.5%", change: "+5.2% QoQ", icon: <PieChart className="w-5 h-5 text-green-500" />, tooltip: "Expanding margins reflecting improved product mix and scale. Positive trend." },
    { label: "Revenue Growth", value: "31.2%", change: "+8.7% YoY", icon: <TrendingUp className="w-5 h-5 text-green-500" />, tooltip: "Strong revenue growth across all segments. Market share gains continuing." },
    { label: "Current Ratio", value: "2.05", change: "+0.23", icon: <BarChart2 className="w-5 h-5 text-green-500" />, tooltip: "Strong liquidity position. Well-positioned for future investments." },
    { label: "Cash Flow", value: "$5.8B", change: "+38% QoQ", icon: <LineChart className="w-5 h-5 text-green-500" />, tooltip: "Excellent cash flow generation with consistent growth. Financial strength improving." },
    { label: "R&D Spend", value: "$6.2B", change: "+45% YoY", icon: <Activity className="w-5 h-5 text-blue-500" />, tooltip: "Aggressive investment in future products. Necessary for maintaining competitive edge." },
  ],
  intel: [
    { label: "Net Income", value: "$5.2B", change: "-24% YoY", icon: <DollarSign className="w-5 h-5 text-red-500" />, tooltip: "Declining profits amid competitive pressures and manufacturing challenges." },
    { label: "Operating Margin", value: "12.3%", change: "-8.5% QoQ", icon: <PieChart className="w-5 h-5 text-red-500" />, tooltip: "Significant margin compression. Manufacturing inefficiencies and price pressure." },
    { label: "Revenue Growth", value: "-7.8%", change: "-2.3% YoY", icon: <TrendingUp className="w-5 h-5 text-red-500" />, tooltip: "Revenue decline amid market share losses in key segments. Challenging period." },
    { label: "Current Ratio", value: "1.45", change: "-0.18", icon: <BarChart2 className="w-5 h-5 text-orange-500" />, tooltip: "Adequate but declining liquidity position. Still sufficient for operations." },
    { label: "Cash Flow", value: "$12.8B", change: "-18% QoQ", icon: <LineChart className="w-5 h-5 text-red-500" />, tooltip: "Declining cash flow generation. Reflects operational challenges." },
    { label: "CapEx", value: "$28.5B", change: "+62% YoY", icon: <Activity className="w-5 h-5 text-blue-500" />, tooltip: "Massive investment in manufacturing capacity. Essential for long-term competitiveness." },
  ]
  // Add more companies as needed
};
