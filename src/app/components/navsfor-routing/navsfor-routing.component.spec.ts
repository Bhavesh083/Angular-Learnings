import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsforRoutingComponent } from './navsfor-routing.component';

describe('NavsforRoutingComponent', () => {
  let component: NavsforRoutingComponent;
  let fixture: ComponentFixture<NavsforRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavsforRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavsforRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
