// components/analytics/SalesDashboard.tsx
'use client';

import { useState } from 'react';

const salesData = [
  { name: 'Jan', revenue: 450000, orders: 240 },
  { name: 'Feb', revenue: 300000, orders: 139 },
  { name: 'Mar', revenue: 545000, orders: 380 },
  { name: 'Apr', revenue: 270080, orders: 200 },
  { name: 'May', revenue: 589000, orders: 480 },
  { name: 'Jun', revenue: 439000, orders: 320 },
];

const topProducts = [
  { name: 'Shoes', sales: 420, color: 'bg-purple-500' },
  { name: 'Smart Watch', sales: 380, color: 'bg-blue-500' },
  { name: 'Cloth', sales: 210, color: 'bg-green-500' },
  { name: 'Cap', sales: 190, color: 'bg-yellow-500' },
];

export default function SalesDashboard() {
  const [timeRange, setTimeRange] = useState('monthly');
  const maxRevenue = Math.max(...salesData.map(item => item.revenue));
  const maxSales = Math.max(...topProducts.map(item => item.sales));

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">📈 Sales Dashboard</h2>
        <select 
          value={timeRange}
          onChange={(e) => setTimeRange(e.target.value)}
          className="p-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="weekly">Weekly View</option>
          <option value="monthly">Monthly View</option>
          <option value="yearly">Yearly View</option>
        </select>
      </div>

      {/* Revenue Chart */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
          <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
          Monthly Revenue
        </h3>
        <div className="space-y-4">
          {salesData.map((month) => (
            <div key={month.name} className="flex items-center">
              <span className="w-16 font-medium text-gray-700">{month.name}</span>
              <div className="flex-1 ml-4">
                <div className="flex items-center">
                  <div
                    className="h-8 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 shadow-md"
                    style={{
                      width: `${(month.revenue / maxRevenue) * 100}%`,
                    }}
                  ></div>
                  <span className="ml-3 font-medium text-gray-800">
                    #{month.revenue.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Products Chart */}
      <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
          <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
          Bestselling Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {topProducts.map((product) => (
            <div key={product.name} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium text-gray-800">{product.name}</h4>
                <span className="font-bold">{product.sales} sold</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className={`${product.color} h-4 rounded-full`}
                  style={{
                    width: `${(product.sales / maxSales) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-5 rounded-xl shadow-sm">
          <div className="flex items-center mb-2">
            <div className="p-2 bg-purple-500 rounded-lg mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-purple-800">Total Revenue</h3>
          </div>
          <p className="text-3xl font-bold text-gray-800 mb-1">#2,406,560</p>
          <p className="text-sm font-medium text-green-600 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9v1h2a1 1 0 110 2H9v1h2a1 1 0 110 2H9v1a1 1 0 11-2 0v-1H5a1 1 0 110-2h2v-1H5a1 1 0 110-2h2V8H5a1 1 0 010-2h2V5a1 1 0 112 0v1h2a1 1 0 011 1z" clipRule="evenodd" />
            </svg>
            12% increase
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-5 rounded-xl shadow-sm">
          <div className="flex items-center mb-2">
            <div className="p-2 bg-blue-500 rounded-lg mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-blue-800">Total Orders</h3>
          </div>
          <p className="text-3xl font-bold text-gray-800 mb-1">1,759</p>
          <p className="text-sm font-medium text-green-600 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9v1h2a1 1 0 110 2H9v1h2a1 1 0 110 2H9v1a1 1 0 11-2 0v-1H5a1 1 0 110-2h2v-1H5a1 1 0 110-2h2V8H5a1 1 0 010-2h2V5a1 1 0 112 0v1h2a1 1 0 011 1z" clipRule="evenodd" />
            </svg>
            8% increase
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-100 to-green-200 p-5 rounded-xl shadow-sm">
          <div className="flex items-center mb-2">
            <div className="p-2 bg-green-500 rounded-lg mr-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-sm font-medium text-green-800">Avg. Order Value</h3>
          </div>
          <p className="text-3xl font-bold text-gray-800 mb-1">#45955.67</p>
          <p className="text-sm font-medium text-green-600 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9v1h2a1 1 0 110 2H9v1h2a1 1 0 110 2H9v1a1 1 0 11-2 0v-1H5a1 1 0 110-2h2v-1H5a1 1 0 110-2h2V8H5a1 1 0 010-2h2V5a1 1 0 112 0v1h2a1 1 0 011 1z" clipRule="evenodd" />
            </svg>
            3% increase
          </p>
        </div>
      </div>
    </div>
  );
}