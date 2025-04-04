'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface OverviewProps {
  data: {
    name: string
    total: number
  }[]
}

export function Overview({ data }: OverviewProps) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
  }

  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: 'Revenue',
        data: data.map(item => item.total),
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
      },
    ],
  }

  return <Bar options={options} data={chartData} />
}