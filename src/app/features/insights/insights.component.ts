// // import { Component, OnInit } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// // import { MatCardModule } from '@angular/material/card';
// // import { MatButtonModule } from '@angular/material/button';
// // import { MatIconModule } from '@angular/material/icon';
// // import { MatFormFieldModule } from '@angular/material/form-field';
// // import { MatInputModule } from '@angular/material/input';
// // import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
// // import { MatChipsModule } from '@angular/material/chips';
// // import { MatExpansionModule } from '@angular/material/expansion';
// // import { FormsModule } from '@angular/forms';
// // import { ApiService } from '../../core/services/api.service';
// // import { StatCardComponent } from '../../shared/components/stat-card/stat-card';
// // import { LoadingComponent } from '../../shared/components/loading/loading';

// // interface SearchResult {
// //   title: string;
// //   source: string;
// //   url: string;
// //   trend: string;
// //   sentiment: string;
// //   excerpt: string;
// // }

// // interface AgenticInsight {
// //   insight_card: {
// //     title: string;
// //     bullets: string[];
// //     quotes: Array<{
// //       quote: string;
// //       source: string;
// //       date: string;
// //       url: string;
// //     }>;
// //     why_it_matters: string;
// //   };
// //   violations: any[];
// //   sources: Array<{
// //     title: string;
// //     source: string;
// //     url: string;
// //     published_at: string;
// //   }>;
// // }

// // @Component({
// //   selector: 'app-insights',
// //   standalone: true,
// //   imports: [
// //     CommonModule,
// //     MatCardModule,
// //     MatButtonModule,
// //     MatIconModule,
// //     MatFormFieldModule,
// //     MatInputModule,
// //     MatSnackBarModule,
// //     MatChipsModule,
// //     MatExpansionModule,
// //     FormsModule,
// //     StatCardComponent,
// //     LoadingComponent
// //   ],
// //   templateUrl: './insights.component.html',
// //   styleUrls: ['./insights.component.css']
// // })
// // export class InsightsComponent implements OnInit {
// //   isProcessing = false;
// //   isSearching = false;
// //   isGeneratingAgentic = false;
  
// //   // Search form fields
// //   searchQuery = '';
// //   industry = '';
// //   region = '';
  
// //   // Search results
// //   searchResults: SearchResult[] = [];
// //   agenticInsight: AgenticInsight | null = null;
  
// //   stats = {
// //     timeSaved: '40%',
// //     engagementRate: '+40%',
// //     reportsGenerated: '24'
// //   };

// //   constructor(
// //     private apiService: ApiService,
// //     private snackBar: MatSnackBar
// //   ) {}

// //   ngOnInit(): void {}

// //   searchInsights(): void {
// //     if (!this.searchQuery || !this.industry || !this.region) {
// //       this.snackBar.open('⚠ Please fill in all search fields', 'Close', {
// //         duration: 3000,
// //         panelClass: ['error-snackbar']
// //       });
// //       return;
// //     }

// //     this.isSearching = true;
// //     this.searchResults = [];
// //     this.agenticInsight = null;

// //     const payload = {
// //       query: this.searchQuery,
// //       industry: this.industry,
// //       region: this.region
// //     };

// //     this.apiService.searchInsights(payload).subscribe({
// //       next: (response: any) => {
// //         this.isSearching = false;
// //         this.searchResults = response.results || [];
// //         this.snackBar.open('✓ Search completed successfully!', 'Close', {
// //           duration: 3000,
// //           panelClass: ['success-snackbar']
// //         });
// //       },
// //       error: (error) => {
// //         this.isSearching = false;
// //         this.snackBar.open('✗ Error searching insights', 'Close', {
// //           duration: 3000,
// //           panelClass: ['error-snackbar']
// //         });
// //         console.error('Error:', error);
// //       }
// //     });
// //   }

// //   generateAgenticInsights(): void {
// //     if (!this.searchQuery || !this.industry || !this.region) {
// //       this.snackBar.open('⚠ Please fill in all search fields first', 'Close', {
// //         duration: 3000,
// //         panelClass: ['error-snackbar']
// //       });
// //       return;
// //     }

// //     this.isGeneratingAgentic = true;
// //     this.agenticInsight = null;

// //     const payload = {
// //       query: this.searchQuery,
// //       industry: this.industry,
// //       region: this.region
// //     };

// //     this.apiService.generateAgenticInsights(payload).subscribe({
// //       next: (response: AgenticInsight) => {
// //         this.isGeneratingAgentic = false;
// //         this.agenticInsight = response;
// //         this.snackBar.open('✓ Agentic AI insights generated!', 'Close', {
// //           duration: 3000,
// //           panelClass: ['success-snackbar']
// //         });
// //       },
// //       error: (error) => {
// //         this.isGeneratingAgentic = false;
// //         this.snackBar.open('✗ Error generating agentic insights', 'Close', {
// //           duration: 3000,
// //           panelClass: ['error-snackbar']
// //         });
// //         console.error('Error:', error);
// //       }
// //     });
// //   }

// //   getSentimentColor(sentiment: string): string {
// //     const colors: any = {
// //       'Positive': 'primary',
// //       'Negative': 'warn',
// //       'Neutral': 'accent'
// //     };
// //     return colors[sentiment] || 'accent';
// //   }

// //   getSentimentIcon(sentiment: string): string {
// //     const icons: any = {
// //       'Positive': 'thumb_up',
// //       'Negative': 'thumb_down',
// //       'Neutral': 'horizontal_rule'
// //     };
// //     return icons[sentiment] || 'horizontal_rule';
// //   }
// // }



// // ------------------------------------------------------------------------------------------
// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MatCardModule } from '@angular/material/card';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { FormsModule } from '@angular/forms';
// import { ApiService } from '../../core/services/api.service';
// import { LoadingComponent } from '../../shared/components/loading/loading';

// interface SearchResult {
//   title: string;
//   source: string;
//   url: string;
//   trend: string;
//   sentiment: string;
//   excerpt: string;
// }

// interface AgenticInsight {
//   insight_card: {
//     title: string;
//     bullets: string[];
//     quotes: Array<{
//       quote: string;
//       source: string;
//       date: string;
//       url: string;
//     }>;
//     why_it_matters: string;
//   };
//   violations: any[];
//   sources: Array<{
//     title: string;
//     source: string;
//     url: string;
//     published_at: string;
//   }>;
// }

// @Component({
//   selector: 'app-insights',
//   standalone: true,
//   imports: [
//     CommonModule,
//     MatCardModule,
//     MatButtonModule,
//     MatIconModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatSnackBarModule,
//     MatChipsModule,
//     MatExpansionModule,
//     FormsModule,
//     LoadingComponent
//   ],
//   templateUrl: './insights.component.html',
//   styleUrls: ['./insights.component.css']
// })
// export class InsightsComponent implements OnInit {
//   // Flags
//   isSearching = false;
//   isGeneratingAgentic = false;

//   // Search form fields
//   searchQuery = '';
//   industry = '';
//   region = '';

//   // Data
//   searchResults: SearchResult[] = [];
//   agenticInsight: AgenticInsight | null = null;

//   constructor(
//     private apiService: ApiService,
//     private snackBar: MatSnackBar
//   ) {}

//   ngOnInit(): void {}

//   /** ✅ Getter to fetch bullets safely for UI */
//   get insightBullets(): string[] {
//     return this.agenticInsight?.insight_card?.bullets ?? [];
//   }

//   searchInsights(): void {
//     this.isSearching = true;
//     this.searchResults = [];
//     this.agenticInsight = null;

//     const payload = {
//       query: this.searchQuery,
//       industry: this.industry,
//       region: this.region
//     };

//     this.apiService.searchInsights(payload).subscribe({
//       next: (response: any) => {
//         this.isSearching = false;
//         this.searchResults = response.results || [];
//         this.snackBar.open('✓ Search completed successfully!', 'Close', {
//           duration: 3000,
//           panelClass: ['success-snackbar']
//         });
//       },
//       error: (error) => {
//         this.isSearching = false;
//         this.snackBar.open('✗ Error searching insights', 'Close', {
//           duration: 3000,
//           panelClass: ['error-snackbar']
//         });
//         console.error('Error:', error);
//       }
//     });
//   }

//   generateAgenticInsights(): void {
//     this.isGeneratingAgentic = true;
//     this.agenticInsight = null;

//     const payload = {
//       query: this.searchQuery,
//       industry: this.industry,
//       region: this.region
//     };

//     this.apiService.generateAgenticInsights(payload).subscribe({
//       next: (response: AgenticInsight) => {
//         this.isGeneratingAgentic = false;
//         this.agenticInsight = response;
//         this.snackBar.open('✓ Agentic AI insights generated!', 'Close', {
//           duration: 3000,
//           panelClass: ['success-snackbar']
//         });
//       },
//       error: (error) => {
//         this.isGeneratingAgentic = false;
//         this.snackBar.open('✗ Error generating agentic insights', 'Close', {
//           duration: 3000,
//           panelClass: ['error-snackbar']
//         });
//         console.error('Error:', error);
//       }
//     });
//   }

//   /** Utility: sentiment colors/icons (kept if needed elsewhere) */
//   getSentimentColor(sentiment: string): string {
//     const colors: any = {
//       'Positive': 'primary',
//       'Negative': 'warn',
//       'Neutral': 'accent'
//     };
//     return colors[sentiment] || 'accent';
//   }

//   getSentimentIcon(sentiment: string): string {
//     const icons: any = {
//       'Positive': 'thumb_up',
//       'Negative': 'thumb_down',
//       'Neutral': 'horizontal_rule'
//     };
//     return icons[sentiment] || 'horizontal_rule';
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
// import { LoadingComponent } from '../../shared/components/loading/loading';

interface SearchResult {
  title: string;
  source: string;
  url: string;
  trend: string;
  sentiment: string;
  excerpt: string;
}

interface AgenticInsight {
  insight_card: {
    title: string;
    bullets: string[];
    quotes: Array<{
      quote: string;
      source: string;
      date: string;
      url: string;
    }>;
    why_it_matters: string;
  };
  violations: any[];
  sources: Array<{
    title: string;
    source: string;
    url: string;
    published_at: string;
  }>;
}

/* ✅ Embedded mock JSON */
const MOCK_AGENTIC: AgenticInsight = {
  insight_card: {
    title: 'Key developments matching your query',
    bullets: [
      'Ola Electric faces delivery delays — Economic Times',
      'Ola Electric to open 200 new charging hubs — Economic Times',
      'Ola Electric pilots battery-swap kiosks in Delhi — Economic Times',
      'Ather Energy raises ₹900 cr for expansion — LiveMint',
      'Government extends FAME II scheme — Business Standard'
    ],
    quotes: [
      {
        quote:
          'Ola Electric reported scooter delivery delays attributed to chip shortages and logistics bottlenecks.',
        source: 'Economic Times',
        date: '2025-11-03',
        url: 'https://example.com/n12'
      },
      {
        quote:
          'Ola Electric will set up two hundred fast-charging hubs across tier-2 cities to reduce range anxiety.',
        source: 'Economic Times',
        date: '2025-11-03',
        url: 'https://example.com/n8'
      },
      {
        quote:
          'Ola Electric launched battery-swap kiosks across Delhi metro stations to reduce charging wait times and improve fleet uptime.',
        source: 'Economic Times',
        date: '2025-11-01',
        url: 'https://example.com/n1'
      }
    ],
    why_it_matters:
      'Momentum in partnerships and infra signals narrative to pitch.'
  },
  violations: [],
  sources: [
    {
      title: 'Ola Electric faces delivery delays',
      source: 'Economic Times',
      url: 'https://example.com/n12',
      published_at: '2025-11-03'
    },
    {
      title: 'Ola Electric to open 200 new charging hubs',
      source: 'Economic Times',
      url: 'https://example.com/n8',
      published_at: '2025-11-03'
    },
    {
      title: 'Ola Electric pilots battery-swap kiosks in Delhi',
      source: 'Economic Times',
      url: 'https://example.com/n1',
      published_at: '2025-11-01'
    },
    {
      title: 'Ather Energy raises ₹900 cr for expansion',
      source: 'LiveMint',
      url: 'https://example.com/n2',
      published_at: '2025-11-02'
    },
    {
      title: 'Government extends FAME II scheme',
      source: 'Business Standard',
      url: 'https://example.com/n3',
      published_at: '2025-10-30'
    },
    {
      title: 'Hero recalls 2000 units over battery defect',
      source: 'Autocar India',
      url: 'https://example.com/n4',
      published_at: '2025-11-03'
    }
  ]
};

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatChipsModule,
    MatExpansionModule,
    FormsModule,
    
  ],
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.css']
})
export class InsightsComponent implements OnInit {
  isSearching = false;
  isGeneratingAgentic = false;

  searchQuery = '';
  industry = '';
  region = '';

  searchResults: SearchResult[] = [];
  agenticInsight: AgenticInsight | null = null;

  constructor(
    private apiService: ApiService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  get insightBullets(): string[] {
    return this.agenticInsight?.insight_card?.bullets ?? [];
  }

  searchInsights(): void {
    this.isSearching = true;
    this.searchResults = [];
    this.agenticInsight = null;

    setTimeout(() => {
      this.isSearching = false;
      this.searchResults = [
        {
          title: 'EV Market Expansion Report',
          source: 'Economic Times',
          url: 'https://example.com/test',
          trend: 'Upward',
          sentiment: 'Positive',
          excerpt: 'EV adoption rates continue to grow across regions.'
        }
      ];
      this.snackBar.open('✓ Mock search completed successfully!', 'Close', {
        duration: 2500,
        panelClass: ['success-snackbar']
      });
    }, 500);
  }

  generateAgenticInsights(): void {
    this.isGeneratingAgentic = true;
    this.agenticInsight = null;

    setTimeout(() => {
      this.agenticInsight = MOCK_AGENTIC;
      this.isGeneratingAgentic = false;

      this.snackBar.open('✓ Mock Agentic insights loaded!', 'Close', {
        duration: 2500,
        panelClass: ['success-snackbar']
      });
    }, 400);
  }

  getSentimentColor(sentiment: string): string {
    const colors: any = {
      Positive: 'primary',
      Negative: 'warn',
      Neutral: 'accent'
    };
    return colors[sentiment] || 'accent';
  }

  getSentimentIcon(sentiment: string): string {
    const icons: any = {
      Positive: 'thumb_up',
      Negative: 'thumb_down',
      Neutral: 'horizontal_rule'
    };
    return icons[sentiment] || 'horizontal_rule';
  }
}
