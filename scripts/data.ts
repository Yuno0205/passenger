import { Employee } from "@/types";

export const categoriesData = [
  {
    id : "1",
    name: "Coffee",
    image: "https://t3.ftcdn.net/jpg/06/36/95/08/360_F_636950845_zopskBq0Ke7prMHWNlNwdGliVHDlyIVa.jpg",
    description : "Các loại cà phê hạt, bột và hòa tan",
    items: []
  },
  {
    id: "2",
    name : "Tea",
    image: "https://us.123rf.com/450wm/jumpingxiii/jumpingxiii2207/jumpingxiii220700279/188841794-tea-leaves-character-tea-leaves-on-green-background-wallpaper-matcha-character-design.jpg?ver=6",
    description : "Các loại trà xanh, trà đen và trà thảo mộc",
    items: []
  },
  {
    id: "3",
    name : "Syrup",
    image: "https://as2.ftcdn.net/v2/jpg/02/73/14/31/1000_F_273143179_WZF4GZ41Ffu96fK8zGoZBWC1WxeuuarG.jpg",
    description : "Các loại syrup như vani, caramel và hạt dẻ",
    items: []
  },
  {
    id: "4",
    name : "Dairy",
    image: "https://static.vecteezy.com/system/resources/previews/016/069/884/non_2x/dairy-product-outline-set-illustration-vector.jpg",
    description : "Sữa tươi, sữa đặc và các sản phẩm từ sữa",
    items: []
  },
  {
    id: "5",
    name : "Topping",
    
    description : "Các loại topping như trân châu, thạch và kem topping",
    items: []
  },
  
]

export const unitData = [
  {
   id: "1",
    unitName: "kg",
    description: "Kilogram"
  },
  {
   id: "2",
    unitName: "g",
    description: "Gram"
  },
  {
   id: "3",
    unitName: "l",
    description: "Liter"
  },
  {
   id: "4",
    unitName: "ml",
    description: "Milliliter"
  },
  {
   id: "5",
    unitName: "Bag",
    description: "Bag"
  },
  {
   id: "6",
    unitName: "Bottle",
    description: "Bottle"
  },
  {
   id: "7",
    unitName: "Can",
    description: "Can"
  },
  {
   id: "8",
    unitName: "Pack",
    description: "Pack"
  }
]

export const unitConversion = [
  { id: '1', item : "Coffee beans" , from: 'Kg', to: 'g', type: 'weight', ratio: 1000 },
  { id: '2', item : "Coffee beans" , from: 'g', to: 'Kg', type: 'weight', ratio: 0.001 },
  { id: '3', item : "Coffee beans" , from: 'l', to: 'ml', type: 'volume', ratio: 1000 },
  { id: '4', item : "Coffee beans" , from: 'ml', to: 'l', type: 'volume', ratio: 0.001 },
  { id: '5', item : "Coffee beans" , from: 'Kg', to: 'Bag', type: 'quantity', ratio: 1 }, 
];

export const ingredientData = [
  {
     id: 1,
      name: "Arabica Coffee Beans",
      image : "https://food-images.files.bbci.co.uk/food/recipes/the_perfect_mocha_coffee_29100_16x9.jpg",
      stock: 100,
      lowstock : 50,
      unit: "kg",
      category: "Coffee Beans",
      description: "High-quality Arabica coffee beans, medium roast.",
      last_modified: "2024-06-14",
      status: "In Stock",
      tags : ["arabica", "coffee", "beans"]
  },
  {
     id: 2,
      name: "Robusta Coffee Beans",
      image : "https://food-images.files.bbci.co.uk/food/recipes/the_perfect_mocha_coffee_29100_16x9.jpg",
      stock: 80,

lowstock : 50,
      unit: "kg",
      category: "Coffee Beans",
      description: "Strong-flavored Robusta coffee beans.",
      last_modified: "2024-06-14",
      status: "In Stock"
  },
  {
     id: 3,
      name: "Condensed Milk",
      image : "https://food-images.files.bbci.co.uk/food/recipes/the_perfect_mocha_coffee_29100_16x9.jpg",
      stock: 50,

lowstock : 50,
      unit: "cans",
      category: "Dairy",
      description: "Sweetened condensed milk, used for making coffee with milk.",
      last_modified: "2024-06-14",
      status: "In Stock"
  },
  {
     id: 4,
      name: "White Sugar",
      image : "https://food-images.files.bbci.co.uk/food/recipes/the_perfect_mocha_coffee_29100_16x9.jpg",
      stock: 200,
      lowstock : 50,

      unit: "kg",
      category: "Sweeteners",
      description: "Refined white sugar, used for sweetening beverages.",
      last_modified: "2024-06-14",
      status: "In Stock"
  },
  {
     id: 5,
      name: "Green Tea",
      image : "https://food-images.files.bbci.co.uk/food/recipes/the_perfect_mocha_coffee_29100_16x9.jpg",
      stock: 0,
 
 lowstock : 50,
      unit: "kg",
      category: "Tea",
      description: "High-quality green tea leaves, used for brewing tea.",
      last_modified: "2024-06-14",
      status: "Out of stock"
  },
  {
     id: 6,
      name: "Cocoa Powder",
      image : "https://food-images.files.bbci.co.uk/food/recipes/the_perfect_mocha_coffee_29100_16x9.jpg",
      stock: 40,

lowstock : 50,
      unit: "kg",
      category: "Powder",
      description: "Pure cocoa powder, used for making drinks.",
      last_modified: "2024-06-14",
      status: "In Stock"
  },
  {
     id: 7,
      name: "Caramel Syrup",
      image : "https://food-images.files.bbci.co.uk/food/recipes/the_perfect_mocha_coffee_29100_16x9.jpg",
      stock: 2,
 
 lowstock : 50,
      unit: "bottles",
      category: "Syrup",
      description: "Sweet caramel syrup, used for flavoring drinks.",
      last_modified: "2024-06-14",
      status: "Low stock"
  },
  {
     id: 8,
      name: "Whipping Cream",
      image : "https://food-images.files.bbci.co.uk/food/recipes/the_perfect_mocha_coffee_29100_16x9.jpg",
      stock: 0,
 
 lowstock : 50,
      unit: "liters",
      category: "Dairy",
      description: "Rich whipping cream, used for garnishing and drinks.",
      last_modified: "2024-06-14",
      status: "Out of stock"
  }
]

export const employees: Employee[] = [
  {
    id: '1',
    name: 'Nguyen Van A',
    email: 'nguyenvana@example.com',
    role: 'admin',
    avatar: 'https://example.com/avatars/1.jpg',
    status: true,
    created_at: '2023-01-01',
    startDate: '2023-01-10',
    monthlySalary: 10000000,
    bonus: 2000000,
    ratePerHour: 50000,
    workHours: 160,
  },
  {
    id: '2',
    name: 'Tran Thi B',
    email: 'tranthib@example.com',
    role: 'staff',
    avatar: 'https://example.com/avatars/2.jpg',
    status: true,
    created_at: '2023-02-01',
    startDate: '2023-02-15',
    monthlySalary: 8000000,
    bonus: 1500000,
    ratePerHour: 45000,
    workHours: 160,
  },
  {
    id: '3',
    name: 'Le Van C',
    email: 'levanc@example.com',
    role: 'staff',
    avatar: 'https://example.com/avatars/3.jpg',
    status: false,
    created_at: '2023-03-01',
    startDate: '2023-03-20',
    monthlySalary: 7500000,
    bonus: 1000000,
    ratePerHour: 42000,
    workHours: 160,
  },
  {
    id: '4',
    name: 'Pham Thi D',
    email: 'phamthid@example.com',
    role: 'admin',
    avatar: 'https://example.com/avatars/4.jpg',
    status: true,
    created_at: '2023-04-01',
    startDate: '2023-04-10',
    monthlySalary: 12000000,
    bonus: 2500000,
    ratePerHour: 60000,
    workHours: 160,
  },
  {
    id: '5',
    name: 'Hoang Van E',
    email: 'hoangvane@example.com',
    role: 'staff',
    avatar: 'https://example.com/avatars/5.jpg',
    status: true,
    created_at: '2023-05-01',
    startDate: '2023-05-15',
    monthlySalary: 8500000,
    bonus: 1800000,
    ratePerHour: 47000,
    workHours: 160,
  }
];

  

