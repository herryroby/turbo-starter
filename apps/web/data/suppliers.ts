import { Supplier } from '@/types/suppliers';
import { faker } from '@faker-js/faker';

const createSupplier = (nums: number) => {
  const supplier: Supplier[] = [];

  for (let i = 0; i < nums; i++) {
    supplier.push({
      supplierId: `S000${i + 1}`,
      name: faker.company.name(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zip: faker.location.zipCode(),
      country: faker.location.country(),
      phone: faker.phone.number(),
      email: faker.internet.email()
    });
  }
  return supplier;
};

export const suppliers: Supplier[] = createSupplier(100);
