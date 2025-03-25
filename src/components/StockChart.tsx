import { Area, AreaChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card } from "@/components/ui/card";

interface StockDataPoint {
  date: string;
  price: number;
  isCurrent?: boolean;
}

interface ReturnDataPoint {
  date: string;
  companyReturn: number;
  spyReturn: number;
}

interface StockChartProps {
  companyId: string;
}

export const StockChart = ({ companyId }: StockChartProps) => {
  // Current month is June for this demo
  const currentMonth = "Jun";

  const stockData: Record<string, StockDataPoint[]> = {
    apple: [
      { date: "Jan", price: 175.84 },
      { date: "Feb", price: 182.01 },
      { date: "Mar", price: 178.55 },
      { date: "Apr", price: 169.79 },
      { date: "May", price: 173.75 },
      { date: "Jun", price: 186.68, isCurrent: true },
    ],
    microsoft: [
      { date: "Jan", price: 332.15 },
      { date: "Feb", price: 345.28 },
      { date: "Mar", price: 338.19 },
      { date: "Apr", price: 352.64 },
      { date: "May", price: 347.92 },
      { date: "Jun", price: 359.73, isCurrent: true },
    ],
    meta: [
      { date: "Jan", price: 292.75 },
      { date: "Feb", price: 308.12 },
      { date: "Mar", price: 315.89 },
      { date: "Apr", price: 298.45 },
      { date: "May", price: 322.56 },
      { date: "Jun", price: 334.21, isCurrent: true },
    ],
    google: [
      { date: "Jan", price: 2892.15 },
      { date: "Feb", price: 2945.82 },
      { date: "Mar", price: 2978.34 },
      { date: "Apr", price: 2912.67 },
      { date: "May", price: 3024.93 },
      { date: "Jun", price: 3156.28, isCurrent: true },
    ],
  };

  // Returns data YoY compared to SPY
  const returnsData: Record<string, ReturnDataPoint[]> = {
    apple: [
      { date: "Jan", companyReturn: 5.2, spyReturn: 3.1 },
      { date: "Feb", companyReturn: 7.8, spyReturn: 4.2 },
      { date: "Mar", companyReturn: 6.5, spyReturn: 3.8 },
      { date: "Apr", companyReturn: 4.2, spyReturn: 2.9 },
      { date: "May", companyReturn: 8.1, spyReturn: 5.3 },
      { date: "Jun", companyReturn: 10.3, spyReturn: 6.1 },
    ],
    microsoft: [
      { date: "Jan", companyReturn: 8.7, spyReturn: 3.1 },
      { date: "Feb", companyReturn: 11.2, spyReturn: 4.2 },
      { date: "Mar", companyReturn: 9.8, spyReturn: 3.8 },
      { date: "Apr", companyReturn: 12.5, spyReturn: 2.9 },
      { date: "May", companyReturn: 14.2, spyReturn: 5.3 },
      { date: "Jun", companyReturn: 15.8, spyReturn: 6.1 },
    ],
    meta: [
      { date: "Jan", companyReturn: 6.8, spyReturn: 3.1 },
      { date: "Feb", companyReturn: 8.3, spyReturn: 4.2 },
      { date: "Mar", companyReturn: 10.5, spyReturn: 3.8 },
      { date: "Apr", companyReturn: 7.9, spyReturn: 2.9 },
      { date: "May", companyReturn: 11.2, spyReturn: 5.3 },
      { date: "Jun", companyReturn: 13.7, spyReturn: 6.1 },
    ],
    google: [
      { date: "Jan", companyReturn: 9.2, spyReturn: 3.1 },
      { date: "Feb", companyReturn: 10.8, spyReturn: 4.2 },
      { date: "Mar", companyReturn: 12.3, spyReturn: 3.8 },
      { date: "Apr", companyReturn: 8.7, spyReturn: 2.9 },
      { date: "May", companyReturn: 13.5, spyReturn: 5.3 },
      { date: "Jun", companyReturn: 16.2, spyReturn: 6.1 },
    ],
  };

  const data = stockData[companyId] || stockData.apple;
  const returns = returnsData[companyId] || returnsData.apple;

  return (
    <div className="space-y-6">
      <Card className="p-6 backdrop-blur-sm bg-card">
        <h2 className="text-2xl font-semibold mb-4">Stock Performance</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF6B00" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FF6B00" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tick={{ fill: '#666' }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: '#666' }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: '1px solid #eee',
                }}
                formatter={(value: number) => [`$${value}`, 'Stock Price']}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#FF6B00"
                fillOpacity={1}
                fill="url(#colorPrice)"
              />
              {/* Add labels for current month */}
              {data.map((entry, index) => (
                entry.isCurrent && (
                  <g key={`label-${index}`}>
                    <text
                      x="90%"
                      y="15%"
                      textAnchor="end"
                      fill="#333"
                      fontSize="12"
                      fontWeight="bold"
                    >
                      Current: ${entry.price}
                    </text>
                  </g>
                )
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6 backdrop-blur-sm bg-card">
        <h2 className="text-2xl font-semibold mb-4">Returns Vs. Market</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={returnsData[companyId as keyof typeof returnsData] || returnsData.apple}>
              <defs>
                <linearGradient id="colorCompany" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF6B00" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FF6B00" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSPY" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563EB" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tick={{ fill: '#666' }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: '#666' }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: '1px solid #eee',
                }}
                formatter={(value: number) => [`${value}%`, '']}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: '1px solid #eee',
                }}
                formatter={(value: number) => [`${value}%`, '']}
              />
              <Area
                type="monotone"
                dataKey="companyReturn"
                name="Company Return"
                stroke="#FF6B00"
                fillOpacity={1}
                fill="url(#colorCompany)"
              />
              <Area
                type="monotone"
                dataKey="spyReturn"
                name="S&P 500 Return"
                stroke="#2563EB"
                fillOpacity={1}
                fill="url(#colorSPY)"
              />
              <Legend 
                verticalAlign="top"
                height={36}
                wrapperStyle={{paddingTop: '10px'}}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};