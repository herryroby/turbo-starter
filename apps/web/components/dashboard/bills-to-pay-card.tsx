'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/card';
import React from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: '<1 month', current: 10000000, overdue: 3000000, other: 0 },
  { name: '2 months', current: 5000000, overdue: 0, other: 2000000 },
  { name: '3 months', current: 0, overdue: 0, other: 0 },
  { name: 'Other', current: 0, overdue: 0, other: 0 }
];

export const BillsToPayCard: React.FC = () => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-base font-medium">Bills You Need to Pay</CardTitle>
      <div className="text-muted-foreground text-xs">
        10 Awaiting payment: <span className="font-semibold text-yellow-600">13,835,470</span>
        <br />
        50 Overdue: <span className="font-semibold text-sky-600">10,835,470</span>
      </div>
    </CardHeader>
    <CardContent className="flex h-48 items-end">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis hide />
          <Tooltip />
          <Legend />
          <Bar dataKey="current" stackId="a" fill="#facc15" name="Current" />
          <Bar dataKey="overdue" stackId="a" fill="#f472b6" name="Overdue" />
          <Bar dataKey="other" stackId="a" fill="#38bdf8" name="Other" />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);
