
export type Register = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  address: Address;
};

export type Address = {
  zip_code: string;
  street: string;
  number: string;
  district: string;
  city: string;
  county: string;
  reference: string;
  complement: string;
};
