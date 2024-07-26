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

 export type Employee = {
    name: string;
    role: string;
    avatar: string;
    status: boolean;
    created_at: string;
    monthlySalary: string;
    bonus: string;
  };