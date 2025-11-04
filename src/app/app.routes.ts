import { Routes } from '@angular/router';
import { WinbackComponent } from './features/winback/winback';
import { RiskAlertingComponent } from './features/risk-alerting/risk-alerting.component';
import { InsightsComponent } from './features/insights/insights.component';

export const routes: Routes = [
  { path: '', redirectTo: '/winback', pathMatch: 'full' },
  { path: 'winback', component: WinbackComponent },
  { path: 'risk-alerting', component: RiskAlertingComponent },
  { path: 'insights', component: InsightsComponent },
  { path: '**', redirectTo: '/winback' }
];