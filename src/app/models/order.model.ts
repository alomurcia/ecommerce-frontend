import { OrderItem } from './order-item.model';

export interface Order {
  id: number;
  customerName: string;
  orderDate: Date;
  orderItems: OrderItem[];
}