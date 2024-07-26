// components/PayrollChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const PayrollChart: React.FC = () => {
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Gross Salary',
        data: [
          80000, 85000, 78000, 95000, 90000, 97000, 100000, 105000, 110000,
          115000, 120000, 125000,
        ],
        borderColor: '#60A5FA',
        backgroundColor: '#BFDBFE',
        yAxisID: 'y1',
      },
      {
        label: 'Net Salary',
        data: [
          70000, 75000, 68000, 85000, 80000, 87000, 90000, 95000, 100000,
          105000, 110000, 115000,
        ],
        borderColor: '#4F46E5',
        backgroundColor: '#C7D2FE',
        yAxisID: 'y1',
      },
      {
        label: 'Tax Deduction',
        data: [
          10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000,
          10000, 10000,
        ],
        borderColor: '#FCA5A5',
        backgroundColor: '#FECACA',
        yAxisID: 'y2',
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    stacked: false,
    scales: {
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
      },
      y2: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default PayrollChart;
