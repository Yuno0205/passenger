'use client';

import { Suspense, useEffect, useState } from 'react';
// import AddIngredientForm from '@/components/AddIngredientForm';
import InventoryList from '@/components/Inventory/InventoryList/index';
import data from '@/scripts/dataFake/inventory.json';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Ingredient } from '@/scripts/data';

const InventoryPage: React.FC = () => {
  const [inventory, setInventory] = useState<Ingredient[]>([]);

  useEffect(() => {
    // Load hardcoded inventory data
    setInventory(data);
  }, []);

  // const handleAddIngredient = (ingredient: Ingredient) => {
  //   setInventory([...inventory, ingredient]);
  // };

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Inventory</h1>
      </div>

      <Suspense fallback={<InvoicesTableSkeleton />}>
        <InventoryList inventory={inventory} />
      </Suspense>
    </div>
  );
};

export default InventoryPage;
