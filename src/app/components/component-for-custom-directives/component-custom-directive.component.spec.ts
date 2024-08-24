import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCustomDirectiveComponent } from './component-custom-directive.component';

describe('ComponentCustomDirectiveComponent', () => {
  let component: ComponentCustomDirectiveComponent;
  let fixture: ComponentFixture<ComponentCustomDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCustomDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentCustomDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
