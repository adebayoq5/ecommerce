/* eslint-disable @next/next/no-img-element */
"use client";
import { PhoneIcon, StarIcon } from '@heroicons/react/24/outline';

type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  orders: number;
  totalSpent: number;
  lastOrder: string;
  avatar: string;
  status: 'active' | 'inactive' | 'new';
};

export default function CustomersComponent() {
  // Sample customer data with COMPLETE objects
  const customers: Customer[] = [
    {
      id: 'CUST-001',
      name: 'Alex Johnson',
      email: 'alex.johnson@gmail.com',
      phone: '(234) 8000-111-222',
      orders: 12,
      totalSpent: 284598.50,
      lastOrder: '2023-06-15',
      avatar: 'images/download.jpg',
      status: 'active' // Added missing value
    },
    {
      id: 'CUST-002',
      name: 'Sarah Williams',
      email: 'sarah.w@gmail.com',
      phone: '(234) 8123-456-789',
      orders: 5,
      totalSpent: 1240000.75,
      lastOrder: '2023-06-10',
      avatar: 'images/images.jpg',
      status: 'active' // Added missing value
    },
    {
      id: 'CUST-003',
      name: 'Michael Chen',
      email: 'michael.chen@yahoomail.com',
      phone: '(234) 8091-656-129',
      orders: 2,
      totalSpent: 450545.00,
      lastOrder: '2023-05-28',
      avatar: 'images/Michael Chen.jpg',
      status: 'new' // Added missing value
    },
    {
      id: 'CUST-004',
      name: 'Emily Rodriguez',
      email: 'emily.r@hotmail.com',
      phone: '(234) 8163-727-127',
      orders: 8,
      totalSpent: 187509.25,
      lastOrder: '2023-04-15',
      avatar: 'images/Emily Rodriguez.jpg',
      status: 'inactive' // Added missing value
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'new': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">Recent Customers</h2>
        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
          View All Customers
        </button>
      </div>
      
      <div className="divide-y divide-gray-200">
        {customers.map((customer) => (
          <div key={customer.id} className="p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img 
                  className="h-12 w-12 rounded-full object-cover"
                  src={customer.avatar}
                  alt={customer.name}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/avatars/default.jpg';
                  }}
                />
                {customer.status === 'active' && (
                  <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 truncate">{customer.name}</h3>
                    <p className="text-sm text-gray-500 truncate">{customer.email}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(customer.status)}`}>
                    {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                  </span>
                </div>
                
                <div className="mt-2 flex items-center space-x-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <PhoneIcon className="flex-shrink-0 mr-1 h-4 w-4 text-gray-400" />
                    <span>{customer.phone}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <StarIcon className="flex-shrink-0 mr-1 h-4 w-4 text-yellow-400" />
                    <span>{customer.orders} orders</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-end space-y-2">
                <span className="text-sm font-medium text-gray-900">
                  #{customer.totalSpent.toLocaleString()}
                </span>
                <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="px-6 py-4 border-t border-gray-200 text-center">
        <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
          Load More Customers
        </button>
      </div>
    </div>
  );
}