import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCRUDComponent } from './all-crud.component';

describe('AllCRUDComponent', () => {
  let component: AllCRUDComponent;
  let fixture: ComponentFixture<AllCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCRUDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
