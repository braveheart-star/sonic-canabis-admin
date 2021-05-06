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
export enum NotifyStatus {
  success,
  error,
}
