import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { ApiService } from '../../core/services/api.service';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card';
import { LoadingComponent } from '../../shared/components/loading/loading';

@Component({
  selector: 'app-winback',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    BaseChartDirective,
    StatCardComponent,
    LoadingComponent
  ],
  templateUrl: './winback.html',
  styleUrls: ['./winback.css']
})
export class WinbackComponent implements OnInit {
  isProcessing = false;
  stats = {
    winbackRate: '25%',
    activeCampaigns: '12',
    automationRate: '98%'
  };

  lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [45, 67, 89, 102],
        label: 'Engaged',
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.4
      },
      {
        data: [120, 98, 76, 63],
        label: 'Dormant',
        borderColor: '#ef4444',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        fill: true,
        tension: 0.4
      }
    ],
    labels: ['Jan', 'Feb', 'Mar', 'Apr']
  };

  lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: 'top' }
    },
    scales: {
      y: { beginAtZero: true }
    }
  };

  constructor(
    private apiService: ApiService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  launchCampaign(): void {
    this.isProcessing = true;

    this.apiService.launchWinbackCampaign({
      customer_segment: 'enterprise-dormant-90days'
    }).subscribe({
      next: (response) => {
        this.isProcessing = false;
        this.snackBar.open('✓ Campaign launched successfully!', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
        console.log('Response:', response);
      },
      error: (error) => {
        this.isProcessing = false;
        this.snackBar.open('✗ Error launching campaign', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
        console.error('Error:', error);
      }
    });
  }
}