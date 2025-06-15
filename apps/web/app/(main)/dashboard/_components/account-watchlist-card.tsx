'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui';
import React from 'react';

const data = [
  { name: 'Cash', thisMonth: 12000, ytd: 50000, lastMonth: 10000 },
  { name: 'Bank Account', thisMonth: 30000, ytd: 120000, lastMonth: 25000 },
  { name: 'Giro', thisMonth: 15000, ytd: 60000, lastMonth: 14000 },
  { name: 'Account Receivable', thisMonth: 40000, ytd: 200000, lastMonth: 35000 }
];

export const AccountWatchlistCard: React.FC = () => (
  <Card className="h-full">
    <CardHeader>
      <CardTitle className="text-base font-medium">Account Watchlist</CardTitle>
    </CardHeader>
    <CardContent className="overflow-x-auto p-0">
      <table className="min-w-full text-left text-xs">
        <thead>
          <tr className="border-b">
            <th className="p-2 font-semibold">Account</th>
            <th className="p-2 font-semibold">This Month</th>
            <th className="p-2 font-semibold">YTD</th>
            <th className="p-2 font-semibold">Last Month</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.name} className="border-b last:border-0">
              <td className="p-2">{row.name}</td>
              <td className="p-2">{row.thisMonth.toLocaleString()}</td>
              <td className="p-2">{row.ytd.toLocaleString()}</td>
              <td className="p-2">{row.lastMonth.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </CardContent>
  </Card>
);
