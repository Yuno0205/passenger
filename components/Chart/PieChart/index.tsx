// components/PieChart.tsx
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { ingredientData } from '@/scripts/data';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

// Tính toán dữ liệu cho biểu đồ
const prepareChartData = () => {
  const categoryCounts = ingredientData.reduce(
    (acc: any, item: any) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  return {
    labels: Object.keys(categoryCounts),
    datasets: [
      {
        label: 'Quantity of raw materials by category',
        data: Object.values(categoryCounts),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF5733',
          '#33FF57',
          '#33A1FF',
          '#FF33A5',
          '#A533FF',
        ],
        borderColor: '#fff',
        borderWidth: 1,
      },
    ],
  };
};

export default function PieChart() {
  const data = prepareChartData();

  return (
    <div>
      {/* <h2 className="mb-4 text-xl font-bold">
        Biểu Đồ Tròn: Số lượng nguyên liệu theo danh mục
      </h2> */}
      <Pie data={data} />
    </div>
  );
}
