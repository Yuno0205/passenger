'use client';

import { Suspense, useEffect, useState } from 'react';
import InventoryList from '@/components/Inventory/InventoryList/index';
import { ingredientData } from '@/scripts/data';
import { lusitana } from '@/app/styles/fonts';
import { Ingredient } from '@/types';
import Breadcrumb from '@/components/BreadCrumb';

const InventoryPage: React.FC = () => {
  const [inventory, setInventory] = useState<Ingredient[]>([]);

  useEffect(() => {
    // Load hardcoded inventory data
    setInventory(ingredientData);
  }, []);

  // const handleAddIngredient = (ingredient: Ingredient) => {
  //   setInventory([...inventory, ingredient]);
  // };

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <Breadcrumb />
      </div>

      <Suspense fallback={<div>Loading ...</div>}>
        <InventoryList inventory={inventory} />
      </Suspense>
    </div>
  );
};

export default InventoryPage;
