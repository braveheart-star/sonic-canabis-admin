export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessRole: string;
  businessName: string;
  businessType: string;
  address: Address;
  website: string;
  licenseNumber: string;
  licenseExpiration: string;
  licenseType: string;
}

interface Address {
  country: string;
  state: string;
  city: string;
  postal: string;
}

export interface ProductPayload {
  title: string;

  description: string;

  price: string;

  weight: string;

  unit: string;

  // quantity: string;

  category: string;

  subCategory: string;

  // image: string;
}

export interface ShopDataPayload {
  firstName: string;

  lastName: string;

  introduction: string;

  about: string;

  announcement: string;

  customers: string;

  amenity: string[];
}
export enum NotifyStatus {
  success,
  error,
}
