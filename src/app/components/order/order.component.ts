import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    });
  }

  createOrder() {
    // Implementar lógica para crear un pedido
  }

  updateOrder(order: Order) {
    // Implementar lógica para actualizar un pedido
  }

  deleteOrder(orderId: number) {
    this.orderService.deleteOrder(orderId).subscribe(() => {
      this.getOrders();
    });
  }
}
