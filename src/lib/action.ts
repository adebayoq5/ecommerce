import { db } from './db'

export async function getDashboardData() {
  // Fetch data in parallel
  const [
    totalRevenueResult,
    salesCountResult,
    productsCountResult,
    activeUsersResult,
    recentSalesResult,
  ] = await Promise.all([
    db.order.aggregate({
      _sum: {
        total: true,
      },
      where: {
        status: 'completed',
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        },
      },
    }),
    db.order.count({
      where: {
        createdAt: {
          gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        },
      },
    }),
    db.product.count(),
    db.user.count({
      where: {
        lastActive: {
          gte: new Date(new Date().setDate(new Date().getDate() - 30)),
        },
      },
    }),
    db.order.findMany({
      take: 5,
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    }),
  ])

  // Format chart data
  const chartData = [
    { name: 'Jan', total: 0 },
    { name: 'Feb', total: 0 },
    { name: 'Mar', total: 0 },
    { name: 'Apr', total: 0 },
    { name: 'May', total: 0 },
    { name: 'Jun', total: 0 },
    { name: 'Jul', total: 0 },
    { name: 'Aug', total: 0 },
    { name: 'Sep', total: 0 },
    { name: 'Oct', total: 0 },
    { name: 'Nov', total: 0 },
    { name: 'Dec', total: 0 },
  ]

  // Fill chart data with actual values
  const monthlyData = await db.order.groupBy({
    by: ['createdAt'],
    _sum: {
      total: true,
    },
    where: {
      createdAt: {
        gte: new Date(new Date().getFullYear(), 0, 1),
      },
    },
  })

  monthlyData.forEach(({ createdAt, _sum }) => {
    const month = new Date(createdAt).getMonth()
    chartData[month].total += _sum.total || 0
  })

  // Format recent sales
  const recentSales = recentSalesResult.map((order) => ({
    id: order.id,
    customer: order.user.name || 'Anonymous',
    email: order.user.email,
    amount: order.total,
    status: order.status,
  }))

  return {
    totalRevenue: totalRevenueResult._sum.total || 0,
    salesCount: salesCountResult,
    productsCount: productsCountResult,
    activeUsers: activeUsersResult,
    recentSales,
    chartData,
  }
}