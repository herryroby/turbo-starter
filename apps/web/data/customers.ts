import type { Customer } from '@/types/customers';
import { faker } from '@faker-js/faker';

const createCustomer = (nums: number) => {
  const customer: Customer[] = [];

  for (let i = 0; i < nums; i++) {
    customer.push({
      customerId: `C000${i + 1}`,
      name: faker.company.name(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zip: faker.location.zipCode(),
      country: faker.location.country(),
      phone: faker.phone.number(),
      email: faker.internet.email(),
      isActive: faker.datatype.boolean(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent()
    });
  }
  return customer;
};

export const customers: Customer[] = createCustomer(100);
