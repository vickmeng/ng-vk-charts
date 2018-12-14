import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VkChartsModule } from 'projects/ng-vk-charts/src/lib/ng-vk-charts.module';
import { TrendtestComponent } from './trendtest/trendtest.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendtestComponent
  ],
  imports: [
    BrowserModule,
    VkChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
