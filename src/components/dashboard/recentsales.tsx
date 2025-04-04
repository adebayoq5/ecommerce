'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/badge'

interface RecentSale {
  id: string
  customer: string
  email: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
}

interface RecentSalesProps {
  data: RecentSale[]
}

export function RecentSales({ data }: RecentSalesProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((sale) => (
          <TableRow key={sale.id}>
            <TableCell>
              <div className="font-medium">{sale.customer}</div>
              <div className="hidden text-sm text-muted-foreground md:inline">
                {sale.email}
              </div>
            </TableCell>
            <TableCell className="text-right">
              ${sale.amount.toFixed(2)}
            </TableCell>
            <TableCell className="text-right">
              <Badge
                variant={
                  sale.status === 'success'
                    ? 'default'
                    : sale.status === 'pending'
                    ? 'secondary'
                    : 'destructive'
                }
              >
                {sale.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}