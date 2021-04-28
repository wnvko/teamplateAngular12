import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CustomLoggerTemplateDirective } from '../custom-logger-template.directive';
import { CustomTemplateDirective } from '../custom-template.directive';
import { TemplatableComponent } from './templatable.component';


describe('TemplatableComponent', () => {
  it('Should call context methods', () => {
    TestBed.configureTestingModule({
      declarations: [
        TemplatableComponent,
        AppTemplateTestComponent,
        CustomTemplateDirective,
        CustomLoggerTemplateDirective
      ]
    })
      .compileComponents();
    const fixture = TestBed.createComponent(AppTemplateTestComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    spyOn(component.templatableComponent.logger, 'logInput').and.callThrough();
    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.nativeElement.click();
    fixture.detectChanges();
    expect(component.templatableComponent.logger.logInput).toHaveBeenCalled();
  });
});


@Component({
  template: `
  <app-templatable>
    <ng-template customTemplate let-customLogMethod>
      <h1>This is my custom template</h1>
      <button customLoggerTemplate (click)="customLogMethod('From custom template')">This is custom logger</button>
    </ng-template>
  </app-templatable>
  `
})
export class AppTemplateTestComponent {
  @ViewChild(TemplatableComponent, { static: true, read: TemplatableComponent })
  public templatableComponent!: TemplatableComponent;
}
