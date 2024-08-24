import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalstorageTestComponent } from './localstorage-test.component';

describe('LocalstorageTestComponent', () => {
  let component: LocalstorageTestComponent;
  let fixture: ComponentFixture<LocalstorageTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalstorageTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalstorageTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
