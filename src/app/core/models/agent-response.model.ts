export interface AgentResponse {
  status: string;
  message: string;
  data: any;
  timestamp: string;
}

export interface CampaignRequest {
  customer_segment: string;
  message_template?: string;
}

export interface RiskAnalysisRequest {
  account_ids: string[];
  time_period_days: number;
}

export interface InsightGenerationRequest {
  data_sources: string[];
  analysis_type: 'trend' | 'segmentation' | 'forecast';
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string;
    borderWidth?: number;
  }[];
}