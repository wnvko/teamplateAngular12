import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplatableComponent } from './templatable/templatable.component';
import { CustomTemplateDirective } from './custom-template.directive';
import { CustomLoggerTemplateDirective } from './custom-logger-template.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplatableComponent,
    CustomTemplateDirective,
    CustomLoggerTemplateDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
