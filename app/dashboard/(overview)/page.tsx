'use client';

import { lusitana } from '@/app/styles/fonts';

import PayrollChart from '@/components/Chart/PayrollChart';
import IngredientPieChart from '@/components/Chart/PieChart';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      <div className="flex w-full">
        {/* <div className="w-1/2">
          <PayrollChart />
        </div> */}

        <div className="w-1/2">
          <IngredientPieChart />
        </div>
      </div>
    </main>
  );
}
