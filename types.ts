export interface Product {
  _id?: string;   // MongoDB id
  id?: string;    // fallback if needed

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
