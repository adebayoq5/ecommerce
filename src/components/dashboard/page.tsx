import { Card } from '@/components/ui/card'
import { OverviewChart } from '@/components/dashboard/overview-chart'
import { RecentOrders } from '@/components/dashboard/recent-orders'

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <h3 className="text-sm font-medium">Total Revenue</h3>
          <p className="text-2xl font-bold">$45,231.89</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium">Total Orders</h3>
          <p className="text-2xl font-bold">1,234</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium">Products</h3>
          <p className="text-2xl font-bold">567</p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-medium">Active Customers</h3>
          <p className="text-2xl font-bold">892</p>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 p-6">
          <h3 className="text-sm font-medium mb-4">Sales Overview</h3>
          <OverviewChart />
        </Card>
        
        <Card className="col-span-3 p-6">
          <h3 className="text-sm font-medium mb-4">Recent Orders</h3>
          <RecentOrders />
        </Card>
      </div>
    </div>
  )
}