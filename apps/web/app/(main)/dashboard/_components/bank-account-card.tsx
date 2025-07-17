'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui';
import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Dec', value: 12000000 },
  { name: 'Jan', value: 18000000 },
  { name: 'Feb', value: 22000000 },
  { name: 'Mar', value: 30000000 },
  { name: 'Apr', value: 30000000 },
  { name: 'May', value: 30099830 }
];

export const BankAccountCard: React.FC = () => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-base font-medium">Bank Account</CardTitle>
      <div className="text-muted-foreground text-xs">
        Balance in Qonsula: 30,099,830
        <br />
        Statement Balance: 2,988,950
      </div>
    </CardHeader>
    <CardContent className="flex h-48 items-end">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" hide />
          <YAxis hide />
          <Tooltip />
          <Bar dataKey="value" fill="#facc15" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);
