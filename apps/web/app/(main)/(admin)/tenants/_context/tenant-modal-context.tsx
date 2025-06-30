'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { Tenant } from '../types';

interface TenantModalContextType {
  isOpen: boolean;
  tenant?: Tenant;
  openModal: (tenant?: Tenant) => void;
  closeModal: () => void;
}

const TenantModalContext = createContext<TenantModalContextType | undefined>(
  undefined
);

export const TenantModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tenant, setTenant] = useState<Tenant | undefined>(undefined);

  const openModal = (tenantData?: Tenant) => {
    setTenant(tenantData);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setTenant(undefined);
  };

  return (
    <TenantModalContext.Provider value={{ isOpen, tenant, openModal, closeModal }}>
      {children}
    </TenantModalContext.Provider>
  );
};

export const useTenantModal = () => {
  const context = useContext(TenantModalContext);
  if (context === undefined) {
    throw new Error('useTenantModal must be used within a TenantModalProvider');
  }
  return context;
};
