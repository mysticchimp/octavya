"use client";

import React from "react";
import { DollarSign, PieChart, TrendingUp, BarChart2, LineChart, Activity } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

// Dummy data for market indicators - this replaces and expands the original marketData
export const marketIndicatorsData = {
  apple: [
    { label: "Net Income", value: "$96.9B", change: "+15% YoY", icon: <DollarSign className="w-5 h-5 text-green-500" />, tooltip: "Strong net income growth indicates excellent profitability and financial health. Above industry average - very positive sign." },
    { label: "Operating Margin", value: "30.3%", change: "+2.1% QoQ", icon: <PieChart className="w-5 h-5 text-blue-500" />, tooltip: "High operating margin shows efficient cost management. Above 25% is considered excellent in tech sector." },
    { label: "Revenue Growth", value: "7.8%", change: "+2.3% YoY", icon: <TrendingUp className="w-5 h-5 text-purple-500" />, tooltip: "Steady revenue growth despite market challenges. Positive but slower than historical average." },
    { label: "Current Ratio", value: "1.88", change: "+0.12", icon: <BarChart2 className="w-5 h-5 text-orange-500" />, tooltip: "Good liquidity position. Ratio above 1.5 indicates strong ability to cover short-term obligations." },
    { label: "Cash Flow", value: "$110.5B", change: "+5% QoQ", icon: <LineChart className="w-5 h-5 text-indigo-500" />, tooltip: "Strong operating cash flow shows excellent ability to generate cash from operations. Very positive indicator." },
    { label: "CapEx", value: "$11.8B", change: "+8% YoY", icon: <Activity className="w-5 h-5 text-red-500" />, tooltip: "Significant investment in future growth. Healthy balance between investment and cash generation." },
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
    { label: "Revenue Growth", value: "18.1%", change: "+3.5% YoY", icon: <TrendingUp className="w-5 h-5 text-purple-500" />, tooltip: "Very strong revenue growth across all segments. Excellent performance." },
    { label: "Current Ratio", value: "2.22", change: "+0.08", icon: <BarChart2 className="w-5 h-5 text-orange-500" />, tooltip: "Excellent liquidity position. Well above the ideal ratio of 2.0." },
    { label: "Cash Flow", value: "$96.2B", change: "+11% QoQ", icon: <LineChart className="w-5 h-5 text-indigo-500" />, tooltip: "Outstanding cash flow generation. Among the best in the industry." },
    { label: "CapEx", value: "$31.2B", change: "+18% YoY", icon: <Activity className="w-5 h-5 text-red-500" />, tooltip: "Heavy investment in AI and data centers. Strategic positioning for future growth." },
  ],
};

export interface MarketIndicatorsProps {
  companyId: string;
}

export function MarketIndicators({ companyId }: MarketIndicatorsProps) {
  const indicators = marketIndicatorsData[companyId] || [];

  if (!indicators.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Market Indicators</CardTitle>
          <CardDescription>No market indicators available</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Indicators</CardTitle>
        <CardDescription>Financial performance metrics</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {indicators.map((indicator, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg bg-card">
              <div className="mt-0.5">{indicator.icon}</div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium">{indicator.label}</p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">{indicator.tooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <p className="text-lg font-bold">{indicator.value}</p>
                <p className="text-xs text-muted-foreground">{indicator.change}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}