// data.ts

export interface Ingredient {
  id: number;
  name : string;
  image : string;
  stock: number;
  unit: string;
  description?: string;
  category?: string;
  last_modified?: string;
  status?: string;
}


