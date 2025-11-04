import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { ApiService } from '../../core/services/api.service';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card';
import { LoadingComponent } from '../../shared/components/loading/loading';

@Component({
  selector: 'app-risk-alerting',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatSnackBarModule,
    BaseChartDirective,
    StatCardComponent,
    LoadingComponent
  ],
  templateUrl: './risk-alerting.component.html',
  styleUrls: ['./risk-alerting.component.css']
})
export class RiskAlertingComponent implements OnInit {
  isProcessing = false;
  
  stats = {
    churnReduction: '35%',
    highRiskAccounts: '8',
    interventionsToday: '5'
  };

  alerts = [
    {
      company: 'Acme Corp',
      level: 'high',
      message: 'Usage dropped 60% in last 7 days',
      icon: 'error'
    },
    {
      company: 'Tech Solutions',
      level: 'medium',
      message: 'Support tickets increased 2x',
      icon: 'warning'
    }
  ];

  // Pie Chart Data
  pieChartData: ChartConfiguration['data'] = {
    datasets: [{
      data: [65, 25, 10],
      backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
      borderWidth: 0
    }],
    labels: ['Low Risk', 'Medium Risk', 'High Risk']
  };

  pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      }
    }
  };

  constructor(
    private apiService: ApiService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  runRiskAnalysis(): void {
    this.isProcessing = true;

    this.apiService.analyzeRisks({
      account_ids: ['A123', 'B456', 'C789'],
      time_period_days: 30
    }).subscribe({
      next: (response) => {
        this.isProcessing = false;
        this.snackBar.open('✓ Risk analysis completed!', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
        console.log('Response:', response);
      },
      error: (error) => {
        this.isProcessing = false;
        this.snackBar.open('✗ Error analyzing risks', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
        console.error('Error:', error);
      }
    });
  }

  getRiskColor(level: string): string {
    const colors: any = {
      'high': 'warn',
      'medium': 'accent',
      'low': 'primary'
    };
    return colors[level] || 'primary';
  }
}