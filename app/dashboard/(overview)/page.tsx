'use client';

import { lusitana } from '@/app/styles/fonts';
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {
  CubeIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

// Example daily sales data for the last 30 days
const dailySalesData = [
  { date: '2024-07-11', sales: 120 },
  { date: '2024-07-12', sales: 130 },
  { date: '2024-07-13', sales: 150 },
  // ... (28 more days)
  { date: '2024-08-09', sales: 110 },
  { date: '2024-08-10', sales: 140 },
];

// Example ingredient trend data
const ingredientTrendData = [
  { name: 'Arabica Coffee Beans', usage: 300 },
  { name: 'Robusta Coffee Beans', usage: 250 },
  { name: 'Condensed Milk', usage: 200 },
  { name: 'White Sugar', usage: 400 },
  { name: 'Green Tea', usage: 50 },
  { name: 'Cocoa Powder', usage: 100 },
  { name: 'Caramel Syrup', usage: 80 },
  { name: 'Whipping Cream', usage: 70 },
];

// Line Chart for Daily Sales
const DailySalesLineChart = () => {
  const data = {
    labels: dailySalesData.map((entry) => entry.date),
    datasets: [
      {
        label: 'Sales',
        data: dailySalesData.map((entry) => entry.sales),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const, // Explicitly use 'top'
      },
      title: {
        display: true,
        text: 'Daily Sales (Last 30 Days)',
      },
    },
  };

  return <Line data={data} options={options} />;
};

// Bar Chart for Ingredient Trends
const IngredientTrendBarChart = () => {
  const data = {
    labels: ingredientTrendData.map((entry) => entry.name),
    datasets: [
      {
        label: 'Usage',
        data: ingredientTrendData.map((entry) => entry.usage),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const, // Explicitly use 'top'
      },
      title: {
        display: true,
        text: 'Ingredient Usage Trends',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>

      <div className="bg-background flex min-h-screen flex-col">
        <main className="grid flex-1 gap-6 p-6 md:p-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="bg-card text-card-foreground rounded-lg border shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-row items-center justify-between space-y-1.5 p-6 pb-2">
                <h3 className="whitespace-nowrap text-sm font-medium tracking-tight">
                  Daily Sales
                </h3>
                <CurrencyDollarIcon width={24} />
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold">$3,245.89</div>
                <p className="text-muted-foreground text-xs">
                  +8.2% from last week
                </p>
              </div>
            </div>
            <div
              className="bg-card text-card-foreground rounded-lg border shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-row items-center justify-between space-y-1.5 p-6 pb-2">
                <h3 className="whitespace-nowrap text-sm font-medium tracking-tight">
                  Customer Count
                </h3>
                <UserGroupIcon width={24} />
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-muted-foreground text-xs">
                  +12.5% from last week
                </p>
              </div>
            </div>
            <div
              className="bg-card text-card-foreground rounded-lg border shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-row items-center justify-between space-y-1.5 p-6 pb-2">
                <h3 className="whitespace-nowrap text-sm font-medium tracking-tight">
                  Inventory Level
                </h3>
                <CubeIcon width={24} />
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold">87%</div>
                <p className="text-muted-foreground text-xs">
                  -3.2% from last week
                </p>
              </div>
            </div>
            <div
              className="bg-card text-card-foreground rounded-lg border shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-row items-center justify-between space-y-1.5 p-6 pb-2">
                <h3 className="whitespace-nowrap text-sm font-medium tracking-tight">
                  Avg. Order Value
                </h3>
                <CurrencyDollarIcon width={24} />
              </div>
              <div className="p-6">
                <div className="text-2xl font-bold">$12.75</div>
                <p className="text-muted-foreground text-xs">
                  +1.8% from last week
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-10">
            {/* <DailySalesLineChart /> */}

            <IngredientTrendBarChart />
          </div>
        </main>
      </div>
    </main>
  );
}
