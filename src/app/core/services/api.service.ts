import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AgentResponse, CampaignRequest, RiskAnalysisRequest, InsightGenerationRequest } from '../models/agent-response.model';

// New interfaces for insights
export interface InsightSearchRequest {
  query: string;
  industry: string;
  region: string;
}

export interface SearchResult {
  title: string;
  source: string;
  url: string;
  trend: string;
  sentiment: string;
  excerpt: string;
}

export interface InsightSearchResponse {
  query: string;
  results: SearchResult[];
}

export interface AgenticInsightResponse {
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

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API_URL = 'http://localhost:8000/api';
  private readonly BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  // Win-Back Campaign Endpoints
  analyzeWinback(request: CampaignRequest): Observable<AgentResponse> {
    return this.http.post<AgentResponse>(`${this.API_URL}/winback/analyze`, request)
      .pipe(catchError(this.handleError));
  }

  launchWinbackCampaign(request: CampaignRequest): Observable<AgentResponse> {
    return this.http.post<AgentResponse>(`${this.API_URL}/winback/launch`, request)
      .pipe(catchError(this.handleError));
  }

  // Risk Alerting Endpoints
  analyzeRisks(request: RiskAnalysisRequest): Observable<AgentResponse> {
    return this.http.post<AgentResponse>(`${this.API_URL}/risk/analyze`, request)
      .pipe(catchError(this.handleError));
  }

  createRiskAlert(accountId: string): Observable<AgentResponse> {
    return this.http.post<AgentResponse>(`${this.API_URL}/risk/alert?account_id=${accountId}`, {})
      .pipe(catchError(this.handleError));
  }

  // Insights Endpoints
  generateInsights(request: InsightGenerationRequest): Observable<AgentResponse> {
    return this.http.post<AgentResponse>(`${this.API_URL}/insights/generate`, request)
      .pipe(catchError(this.handleError));
  }

  // NEW: Search Insights
  searchInsights(request: InsightSearchRequest): Observable<InsightSearchResponse> {
    return this.http.post<InsightSearchResponse>(`${this.BASE_URL}/search`, request)
      .pipe(catchError(this.handleError));
  }

  // NEW: Generate Agentic AI Insights
  generateAgenticInsights(request: InsightSearchRequest): Observable<AgenticInsightResponse> {
    return this.http.post<AgenticInsightResponse>(`${this.BASE_URL}/agentic/launch`, request)
      .pipe(catchError(this.handleError));
  }

  // Document Upload
  uploadDocuments(files: File[], useCase: string): Observable<any> {
    const formData = new FormData();
    files.forEach(file => formData.append('files', file));
    
    return this.http.post(`${this.API_URL}/documents/upload?use_case=${useCase}`, formData)
      .pipe(catchError(this.handleError));
  }

  // Health Check
  healthCheck(): Observable<any> {
    return this.http.get(`${this.API_URL}/health`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('API Error:', error);
    return throwError(() => new Error(error.message || 'Server error'));
  }
}