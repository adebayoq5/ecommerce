// 'use client'

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from 'recharts'

// interface DataPoint {
//   name: string
//   sales: number
// }

// interface SalesChartProps {
//   data: DataPoint[]
// }

// export function SalesChart({ data }: SalesChartProps) {
//   return (
//     <div className="w-full h-[300px]">
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart
//           data={data}
//           margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis 
//             dataKey="name"
//             tick={{ fill: '#666' }}
//           />
//           <YAxis 
//             tick={{ fill: '#666' }}
//           />
//           <Tooltip />
//           <Legend />
//           <Line 
//             type="monotone"
//             dataKey="sales"
//             stroke="#8884d8"
//             strokeWidth={2}
//             activeDot={{ r: 8 }}
//             dot={{ r: 4 }}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   )
// }