import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { ApiService } from '../../core/services/api.service';
import { StatCardComponent } from '../../shared/components/stat-card/stat-card';
import { LoadingComponent } from '../../shared/components/loading/loading';

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    BaseChartDirective,
    StatCardComponent,
    LoadingComponent
  ],
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {
  isProcessing = false;
  
  stats = {
    timeSaved: '40%',
    engagementRate: '+40%',
    reportsGenerated: '24'
  };

  insights = [
    {
      title: 'Healthcare Sector Trend',
      description: '82% engagement spike detected. AI suggests focusing on compliance automation features for Q4.',
      icon: 'local_hospital'
    },
    {
      title: 'Tech Industry Pattern',
      description: 'Cloud migration topics showing 3x higher response rates. Recommend content series.',
      icon: 'cloud'
    }
  ];

  // Bar Chart Data
  barChartData: ChartConfiguration['data'] = {
    datasets: [{
      data: [78, 65, 82, 71],
      label: 'Engagement Score',
      backgroundColor: '#667eea',
      borderRadius: 8
    }],
    labels: ['Tech', 'Finance', 'Healthcare', 'Retail']
  };

  barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: { 
        beginAtZero: true,
        max: 100
      }
    }
  };

  constructor(
    private apiService: ApiService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  generateInsights(): void {
    this.isProcessing = true;

    this.apiService.generateInsights({
      data_sources: ['crm', 'support_tickets', 'usage_metrics'],
      analysis_type: 'trend'
    }).subscribe({
      next: (response) => {
        this.isProcessing = false;
        this.snackBar.open('✓ Insights generated successfully!', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
        console.log('Response:', response);
      },
      error: (error) => {
        this.isProcessing = false;
        this.snackBar.open('✗ Error generating insights', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
        console.error('Error:', error);
      }
    });
  }
}