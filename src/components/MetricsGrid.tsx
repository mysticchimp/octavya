
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";
import { metricsData } from "@/data/metricsData";

interface MetricsGridProps {
  companyId: string;
}

export function MetricsGrid({ companyId }: MetricsGridProps) {
  const metrics = metricsData[companyId] || [];

  if (!metrics.length) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Company Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <p>No metrics available for this company.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Company Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg bg-card">
              <div className="mt-0.5">{metric.icon}</div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <p className="text-sm font-medium">{metric.label}</p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-3.5 w-3.5 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">Metric collected from employee reports and company data.</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <p className="text-lg font-bold">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.change}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
