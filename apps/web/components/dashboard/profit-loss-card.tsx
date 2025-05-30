'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/card';
import React from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Dec', gross: 10000000, net: 5000000 },
  { name: 'Jan', gross: 20000000, net: 10000000 },
  { name: 'Feb', gross: 25000000, net: 12000000 },
  { name: 'Mar', gross: 40000000, net: 25000000 },
  { name: 'Apr', gross: 60000000, net: 37537478 },
  { name: 'May', gross: 0, net: 0 }
];

export const ProfitLossCard: React.FC = () => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-base font-medium">Profit and Loss</CardTitle>
      <div className="text-muted-foreground text-xs">
        Net profit for this year: <span className="font-semibold text-yellow-600">37,537,478</span>
      </div>
    </CardHeader>
    <CardContent className="flex h-48 items-end">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis hide />
          <Tooltip />
          <Legend />
          <Bar dataKey="gross" fill="#38bdf8" name="Gross profit" />
          <Bar dataKey="net" fill="#facc15" name="Net profit" />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);
