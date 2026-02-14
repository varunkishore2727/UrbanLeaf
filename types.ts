export interface Product {
  _id?: string;   // from Mongo
  id?: string;    // from constants (optional)
  name: string;
  slug: string;
  description: string;
  price: number;
  weight: string;
  image: string;
  nutritionalBenefits: string[];
  availability: string;
  growingTime: string;
  details: {
    healthBenefits: string;
    shelfLife: string;
    usage: string;
  };
}


export interface ContactForm {
  name: string;
  email: string;
  message: string;
}