import { Component, ContentChild, Inject, Input, TemplateRef, ViewChild } from '@angular/core';
import { CustomLoggerTemplateDirective } from '../custom-logger-template.directive';
import { CustomTemplateDirective } from '../custom-template.directive';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-templatable',
  templateUrl: './templatable.component.html',
  styleUrls: ['./templatable.component.css']
})
export class TemplatableComponent {
  @ViewChild('defaultTemplate', { read: TemplateRef, static: true })
  private defaultTemplate!: TemplateRef<any>;

  @ContentChild(CustomTemplateDirective, { read: TemplateRef })
  public customTemplateDirective!: TemplateRef<any>;

  @ContentChild(CustomLoggerTemplateDirective, {read: TemplateRef})
  public customLoggerTemplate!: TemplateRef<any>;

    constructor(@Inject(LoggerService) public logger: LoggerService) { }

  public get customTemplateContainer(): TemplateRef<any> {
    return this.customTemplateDirective ? this.customTemplateDirective : this.defaultTemplate;
  }
}
