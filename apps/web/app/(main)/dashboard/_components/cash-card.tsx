'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui';
import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Dec', value: 20000000 },
  { name: 'Jan', value: 21000000 },
  { name: 'Feb', value: 21000000 },
  { name: 'Mar', value: 18000000 },
  { name: 'Apr', value: 21000000 },
  { name: 'May', value: 21000000 }
];

export const CashCard: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-base font-medium">Cash</CardTitle>
        <div className="text-muted-foreground text-xs">
          Balance in Qonsula: 21,834,420
          <br />
          Statement Balance: 1,752,500
        </div>
      </CardHeader>
      <CardContent className="flex h-48 items-end">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" hide />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="value" fill="#f472b6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
