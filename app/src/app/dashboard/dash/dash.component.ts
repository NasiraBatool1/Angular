
import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Firestore, collection, getDocs, CollectionReference } from '@angular/fire/firestore';
import { Products } from '../../interface/products';

Chart.register(...registerables);

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  products: Products[] = [];
  totalQuantity = 0;
  uniqueCategories = 0;
  todayOrders = 0;
  totalProfit = 0;
  profitLossData: { date: string, profit: number }[] = [];
  collectionRef: CollectionReference;

  constructor(private router: Router, private firestore: Firestore, private ngZone: NgZone) {
    this.collectionRef = collection(this.firestore, 'products');
  }

  async ngOnInit() {
    await this.fetchProducts();
    this.calculateDashboardStats();
    if (this.isDashboardRoute()) {
      setTimeout(() => this.renderChart(), 0);
    }
  }

  async fetchProducts() {
    const snapshot = await getDocs(this.collectionRef);
    this.products = snapshot.docs.map(item => ({ id: item.id, ...item.data() })) as Products[];
  }

  calculateDashboardStats() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    this.totalQuantity = this.products.reduce((sum, p) => sum + (p.quantity || 0), 0);
    this.uniqueCategories = Array.from(new Set(this.products.map(p => p.category))).length;
    this.todayOrders = this.products
      .filter(p => p.createdAt && new Date(p.createdAt.seconds ? p.createdAt.seconds * 1000 : p.createdAt).setHours(0,0,0,0) === today.getTime())
      .reduce((sum, p) => sum + (p.quantity || 0), 0);
    this.totalProfit = this.products.reduce((sum, p) => sum + (((p.price || 0) - (p.cost || 0)) * (p.quantity || 0)), 0);
    // Prepare profit/loss data for chart (by day)
    const profitMap: { [date: string]: number } = {};
    this.products.forEach(p => {
      if (p.createdAt) {
        const d = new Date(p.createdAt.seconds ? p.createdAt.seconds * 1000 : p.createdAt);
        const dateStr = d.toISOString().slice(0, 10);
        const profit = ((p.price || 0) - (p.cost || 0)) * (p.quantity || 0);
        profitMap[dateStr] = (profitMap[dateStr] || 0) + profit;
      }
    });
    this.profitLossData = Object.entries(profitMap).map(([date, profit]) => ({ date, profit }));
    this.profitLossData.sort((a, b) => a.date.localeCompare(b.date));
  }

  isDashboardRoute(): boolean {
    // Show dashboard overview only on /dashboard (not on /dashboard/product etc)
    return this.router.url === '/dashboard' || this.router.url === '/dashboard/';
  }

  renderChart() {
    const ctx = document.getElementById('profitLossChart') as HTMLCanvasElement | null;
    if (!ctx) return;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.profitLossData.map(d => d.date),
        datasets: [{
          label: 'Profit/Loss',
          data: this.profitLossData.map(d => d.profit),
          fill: true,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true },
          title: { display: true, text: 'Profit/Loss Over Time' }
        }
      }
    });
  }
}
