'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui';
import React from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: '<1 month', awaiting: 25000000, overdue: 5000000 },
  { name: '2 months', awaiting: 10000000, overdue: 3000000 },
  { name: '3 months', awaiting: 0, overdue: 0 },
  { name: 'Other', awaiting: 0, overdue: 0 }
];

export const InvoicesOwedCard: React.FC = () => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-base font-medium">Invoices Owed to You</CardTitle>
      <div className="text-muted-foreground text-xs">
        26 Awaiting payment: <span className="font-semibold text-yellow-600">45,822,160</span>
        <br />
        24 Overdue: <span className="font-semibold text-sky-600">45,822,160</span>
      </div>
    </CardHeader>
    <CardContent className="flex h-48 items-end">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis hide />
          <Tooltip />
          <Legend />
          <Bar dataKey="awaiting" fill="#facc15" name="Awaiting" />
          <Bar dataKey="overdue" fill="#38bdf8" name="Overdue" />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);
