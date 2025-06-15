'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui';
import React from 'react';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Dec', in: 2000000, out: 1000000 },
  { name: 'Jan', in: 4000000, out: 2000000 },
  { name: 'Feb', in: 3000000, out: 2500000 },
  { name: 'Mar', in: 5000000, out: 3000000 },
  { name: 'Apr', in: 6000000, out: 4000000 },
  { name: 'May', in: 2000000, out: 1000000 }
];

export const TotalCashInOutCard: React.FC = () => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-base font-medium">Total Cash In and Out</CardTitle>
    </CardHeader>
    <CardContent className="flex h-48 items-end">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis hide />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="in" stroke="#38bdf8" strokeWidth={2} dot={{ r: 4 }} name="In" />
          <Line type="monotone" dataKey="out" stroke="#f472b6" strokeWidth={2} dot={{ r: 4 }} name="Out" />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);
