import { NgModule } from '@angular/core';
import { TrendModule } from './charts/trend/trend.module';

const Modules = [
  TrendModule,
];

@NgModule({
  declarations: [],
  imports: [...Modules],
  exports: [...Modules]
})
export class VkChartsModule { }
