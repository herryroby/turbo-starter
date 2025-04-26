'use client';

import { cn } from '@repo/ui/lib/utils';
import {
  BarChart,
  ChevronDown,
  ChevronRight,
  CreditCard,
  Home,
  LayoutDashboard,
  Package,
  Settings,
  Users
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

type MenuItem = {
  name: string;
  icon: React.ReactNode;
  href?: string;
  submenu?: MenuItem[];
};

const menuItems: MenuItem[] = [
  {
    name: 'Dashboard',
    icon: <LayoutDashboard className="h-4 w-4" />,
    href: '/'
  },
  {
    name: 'Finance',
    icon: <CreditCard className="h-4 w-4" />,
    submenu: [
      { name: 'Transactions', icon: <ChevronRight className="h-3 w-3" />, href: '/finances/transactions' },
      { name: 'Income', icon: <ChevronRight className="h-3 w-3" />, href: '/finances/income' },
      { name: 'Expenses', icon: <ChevronRight className="h-3 w-3" />, href: '/finances/expenses' }
    ]
  },
  {
    name: 'Users',
    icon: <Users className="h-4 w-4" />,
    submenu: [
      { name: 'Overview', icon: <ChevronRight className="h-3 w-3" />, href: '/users' },
      { name: 'Add User', icon: <ChevronRight className="h-3 w-3" />, href: '/users/add' }
    ]
  },
  {
    name: 'Settings',
    icon: <Settings className="h-4 w-4" />,
    href: '/settings'
  },
  {
    name: 'Products',
    icon: <Package className="h-4 w-4" />,
    href: '/products'
  },
  {
    name: 'Statistics',
    icon: <BarChart className="h-4 w-4" />,
    href: '/statistics'
  }
];

const AccordionMenuItem = ({ item }: { item: MenuItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.submenu) {
    return (
      <Link
        href={item.href || '#'}
        className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
      >
        {item.icon}
        <span>{item.name}</span>
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
      >
        <div className="flex items-center gap-2">
          {item.icon}
          <span>{item.name}</span>
        </div>
        <ChevronDown className={cn('h-4 w-4 transition-transform', isOpen ? 'rotate-180' : '')} />
      </button>
      {isOpen && (
        <div className="ml-6 mt-1 space-y-1">
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              href={subItem.href || '#'}
              className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              {subItem.icon}
              <span>{subItem.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export function Sidebar() {
  return (
    <div className="h-screen w-60 border-r border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mb-6 flex items-center gap-2 pb-4">
        <Home className="h-6 w-6 text-blue-600" />
        <span className="text-xl font-semibold">Voxy</span>
      </div>
      <nav className="space-y-1">
        {menuItems.map((item, index) => (
          <AccordionMenuItem key={index} item={item} />
        ))}
      </nav>
    </div>
  );
}
