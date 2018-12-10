import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VkChartsModule } from 'projects/ng-vk-charts/src/lib/vk-ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VkChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
