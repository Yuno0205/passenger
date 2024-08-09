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


  type Schedule = {
    startTime: string;
    endTime: string;
  }

 export type Employee = {
    id: string;
    name: string;
    email: string;
    role: string;
    avatar: string;
    status: boolean;
    created_at: string;
    startDate: string;
    monthlySalary: number;
    bonus: number;
    ratePerHour: number;
    workHours: number;
    schedule?: Schedule[];
  };