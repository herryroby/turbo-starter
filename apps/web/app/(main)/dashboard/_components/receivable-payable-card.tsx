'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui';
import React from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Dec', receivable: 20000000, payable: 10000000 },
  { name: 'Jan', receivable: 30000000, payable: 15000000 },
  { name: 'Feb', receivable: 25000000, payable: 20000000 },
  { name: 'Mar', receivable: 40000000, payable: 35000000 },
  { name: 'Apr', receivable: 45000000, payable: 40000000 },
  { name: 'May', receivable: 0, payable: 0 }
];

export const ReceivablePayableCard: React.FC = () => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-base font-medium">Receivable & Payable</CardTitle>
      <div className="text-muted-foreground text-xs">
        52 Payable: <span className="font-semibold text-pink-600">40,830,170</span>
        <br />
        29 Receivable: <span className="font-semibold text-sky-600">45,822,160</span>
      </div>
    </CardHeader>
    <CardContent className="flex h-48 items-end">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis hide />
          <Tooltip />
          <Legend />
          <Bar dataKey="receivable" fill="#38bdf8" name="Receivable" />
          <Bar dataKey="payable" fill="#f472b6" name="Payable" />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);
