'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/card';
import React from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Commission & Fees', value: 6000000 },
  { name: 'Fuel, Toll, Parking', value: 4500000 },
  { name: 'Traveling', value: 4000000 },
  { name: 'Communication', value: 1200000 },
  { name: 'Advertising', value: 1071500 }
];
const COLORS = ['#facc15', '#38bdf8', '#f472b6', '#a3e635', '#fbbf24'];

export const ExpensesDonutCard: React.FC = () => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-base font-medium">Expenses Last Month</CardTitle>
    </CardHeader>
    <CardContent className="flex h-48 items-center justify-center">
      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={70}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);
