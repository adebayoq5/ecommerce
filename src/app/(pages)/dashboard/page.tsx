/* eslint-disable @next/next/no-img-element */
export default function Dashboard() {
  // Sample product data with image paths
  const products = [
    {
      id: 1,
      name: "Female Shoe",
      category: "Footware",
      price: 9999.99,
      sales: 124,
      image: "/images/240_F_14494201_ZYX9KvAhOp5aeY2p0efpBGBQEZUYnO8D.jpg"
    },
    {
      id: 2,
      name: "Running Shoes",
      category: "Footwear",
      price: 12900.99,
      sales: 89,
      image: "/images/240_F_143457749_3x7KtQlCL9sDzbRShBAPXLzHrNoZwF7q.jpg"
    },
    {
      id: 3,
      name: "Sneakers",
      category: "Footware",
      price: 19900.99,
      sales: 56,
      image: "/images/240_F_177154622_NRqn9T1hWrA5fkeDM5yDnin2UWcWAa5N.jpg"
    },
    {
      id: 4,
      name: "Wrist Watch",
      category: "Male watch",
      price: 79000.99,
      sales: 42,
      image: "/images/240_F_186857190_s4dfc0wfT6jcEcr7e3vzrFuUdysg6Gpp.jpg"
    },
    {
      id: 5,
      name: "Female shoe",
      category: "Footware",
      price: 12000.99,
      sales: 71,
      image: "/images/240_F_208046610_yuBnyFsOgXBiTFCP27sLpGvvUIyMBo1z.jpg"
    },
    {
      id: 6,
      name: "Cap",
      category: "Wares",
      price: 19999.99,
      sales: 71,
      image: "images/240_F_345914533_gVGEiKCKzOfFefmHht8G2ExaEb7nWNE2.jpg"
    },
    {
      id: 7,
      name: "Sweatshirt",
      category: "Cloth",
      price: 52000.99,
      sales: 32,
      image: "images/240_F_928969718_Cpu9HTGj36c7QXjYyojN7sxN5Qc1AEdK.jpg"
    },
    {
      id: 7,
      name: "Female wears",
      category: "Cloth",
      price: 29999.99,
      sales: 32,
      image: "images/240_F_1032713040_bHKiJsExJcxAwS59SYtWadcv5P2ZXngT.jpg"
    },
    {
      id: 8,
      name: "Female wears",
      category: "Cloth",
      price: 15999.99,
      sales: 52,
      image: "images/240_F_1053048908_q7pGAQkBC3ttTyNh9efoOWxcG0QJkrFO.jpg"
    },
    {
      id:9 ,
      name: "Shirt",
      category: "Cloth",
      price: 39999.99,
      sales: 59,
      image: "images/240_F_1053072757_QV0iKY0BKL6i2ITF7QCL6c53vigvM52M.jpg"
    },
    {
    id:10,
    name: "Head Warmer",
    category: "Cap",
    price: 2999.99,
    sales: 29,
    image: "images/240_F_1017430655_6eriDQMC3h5Svj9OdM5nYZK46iqdfQkI.jpg"
  },
  {
    id:11,
    name: "Hoodie",
    category: "Cloth",
    price: 49999.99,
    sales: 89,
    image: "images/240_F_1006897693_dGzIfj7vyYDAe5AEDLpsZ065vvU966WO.jpg"
  }
    
  ];

  return (
    <div className="p-4 md:p-6 bg-gray-50 min-h-screen">
      {/* Dashboard Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-500">Today&apos;s summary</p>
      </div>

      {/* Colorful Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Sales */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-xl shadow-md">
          <p className="text-sm opacity-90">Total Sales</p>
          <p className="text-2xl font-bold mt-2">#42,755,999</p>
          <p className="text-xs mt-2 opacity-80 flex items-center">
            <span className="inline-block bg-blue-400 rounded-full p-1 mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            +12.5% from last month
          </p>
        </div>

        {/* Orders */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-xl shadow-md">
          <p className="text-sm opacity-90">Orders</p>
          <p className="text-2xl font-bold mt-2">156,795</p>
          <p className="text-xs mt-2 opacity-80 flex items-center">
            <span className="inline-block bg-purple-400 rounded-full p-1 mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            +8.2% from last month
          </p>
        </div>

        {/* Customers */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-xl shadow-md">
          <p className="text-sm opacity-90">Customers</p>
          <p className="text-2xl font-bold mt-2">10,996</p>
          <p className="text-xs mt-2 opacity-80 flex items-center">
            <span className="inline-block bg-green-400 rounded-full p-1 mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            +5.3% from last month
          </p>
        </div>

        {/* Conversion Rate */}
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white p-4 rounded-xl shadow-md">
          <p className="text-sm opacity-90">Conversion Rate</p>
          <p className="text-2xl font-bold mt-2">22.5%</p>
          <p className="text-xs mt-2 opacity-80 flex items-center">
            <span className="inline-block bg-amber-400 rounded-full p-1 mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            -1.1% from last month
          </p>
        </div>
      </div>

      {/* Top Products Section */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-40 bg-gray-100 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                    #{product.price.toFixed(2)}
                  </span>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-sm text-gray-500">{product.sales} sold</span>
                  <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}