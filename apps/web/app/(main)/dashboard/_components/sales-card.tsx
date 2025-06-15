'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui';
import React from 'react';
import { Area, AreaChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Dec', sales: 10000000 },
  { name: 'Jan', sales: 20000000 },
  { name: 'Feb', sales: 25000000 },
  { name: 'Mar', sales: 40000000 },
  { name: 'Apr', sales: 70000000 },
  { name: 'May', sales: 0 }
];

export const SalesCard: React.FC = () => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-base font-medium">Sales</CardTitle>
    </CardHeader>
    <CardContent className="flex h-48 items-end">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="name" />
          <YAxis hide />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="sales" stroke="#38bdf8" fill="#bae6fd" name="Sales" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);
