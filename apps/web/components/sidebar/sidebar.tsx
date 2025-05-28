'use client';

import { useSidebar } from '@/components/providers/sidebar-provider';
import { cn } from '@repo/ui/lib/utils';
import {
  BarChart,
  ChevronDown,
  ChevronRight,
  CreditCard,
  Home,
  Package,
  Settings,
  ShoppingBasket,
  Users
} from 'lucide-react';
import Image from 'next/image';
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
    name: 'Home',
    icon: <Home className="h-4 w-4" />,
    href: '/'
  },
  {
    name: 'Sales',
    icon: <ShoppingBasket className="h-4 w-4" />,
    submenu: [
      { name: 'Sales Overview', icon: <ChevronRight className="h-3 w-3" />, href: '/sales/overview' },
      { name: 'Sales Quotes', icon: <ChevronRight className="h-3 w-3" />, href: '/sales/quotes' },
      { name: 'Sales Orders', icon: <ChevronRight className="h-3 w-3" />, href: '/sales/orders' },
      { name: 'Sales Deliveries', icon: <ChevronRight className="h-3 w-3" />, href: '/sales/deliveries' },
      { name: 'Sales Invoices', icon: <ChevronRight className="h-3 w-3" />, href: '/sales/invoices' }
    ]
  },
  {
    name: 'Purchases',
    icon: <ShoppingBasket className="h-4 w-4" />,
    submenu: [
      { name: 'Purchase Overview', icon: <ChevronRight className="h-3 w-3" />, href: '/purchases/overview' },
      { name: 'Purchase Quotes', icon: <ChevronRight className="h-3 w-3" />, href: '/purchases/quotes' },
      { name: 'Purchase Orders', icon: <ChevronRight className="h-3 w-3" />, href: '/purchases/orders' },
      { name: 'Purchase Deliveries', icon: <ChevronRight className="h-3 w-3" />, href: '/purchases/deliveries' },
      { name: 'Purchase Invoices', icon: <ChevronRight className="h-3 w-3" />, href: '/purchases/invoices' }
    ]
  },
  {
    name: 'Products',
    icon: <Package className="h-4 w-4" />,
    href: '/products'
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
        className="hover:bg-muted flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors duration-200"
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
        className="hover:bg-muted flex w-full cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm transition-colors duration-200"
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
              className="hover:bg-muted flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors duration-200"
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

export const Sidebar = () => {
  const { isOpen } = useSidebar();

  return (
    <aside
      className={cn(
        'absolute left-0 h-screen w-60 border-r border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div className="mb-6 flex justify-center pb-4">
        <div className="size-34 relative">
          <div className="dark:hidden">
            <Image src="/logo.webp" alt="Qubix Logo" fill className="rounded-sm object-contain" priority />
          </div>
          <div className="hidden dark:block">
            <Image src="/logo-dark.webp" alt="Qubix Logo" fill className="rounded-sm object-contain" priority />
          </div>
        </div>
      </div>
      <nav className="space-y-1">
        {menuItems.map((item, index) => (
          <AccordionMenuItem key={index} item={item} />
        ))}
      </nav>
    </aside>
  );
};
