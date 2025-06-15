'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui';
import React from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Dec', purchase: 30000000, depreciation: 5000000, book: 25000000 },
  { name: 'Jan', purchase: 30000000, depreciation: 6000000, book: 24000000 },
  { name: 'Feb', purchase: 30000000, depreciation: 7000000, book: 23000000 },
  { name: 'Mar', purchase: 30000000, depreciation: 8000000, book: 22000000 },
  { name: 'Apr', purchase: 30000000, depreciation: 9000000, book: 21000000 },
  { name: 'May', purchase: 30000000, depreciation: 10000000, book: 20000000 }
];

export const FixedAssetCard: React.FC = () => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-base font-medium">Fixed Asset</CardTitle>
    </CardHeader>
    <CardContent className="flex h-48 items-end">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis hide />
          <Tooltip />
          <Legend />
          <Bar dataKey="purchase" fill="#f472b6" name="Purchase Price" />
          <Bar dataKey="depreciation" fill="#facc15" name="Depreciation" />
          <Bar dataKey="book" fill="#38bdf8" name="Book Value" />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);
