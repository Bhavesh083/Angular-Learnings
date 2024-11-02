import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnTestingComponent, LearnTestingComponent2 } from './learn-testing.component';
import { AuthServiceService } from 'src/app/services/auth-service.service';

// describe('LearnTestingComponent', () => {
//   let component: LearnTestingComponent;
//   let fixture: ComponentFixture<LearnTestingComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ LearnTestingComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(LearnTestingComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


fdescribe('test methods with no dependencies', () => { 
  
  it('add returns 10', () => {
    const comp = new LearnTestingComponent();
    const value = comp.add();
    expect(value).toEqual(10);
  }); 

  it('multiply returns 24', () => {
    const comp = new LearnTestingComponent();
    const value = comp.multiply();
    expect(value).toEqual(24);
  });

});


fdescribe('test methods with dependencies', () => { 

  let component: LearnTestingComponent2;
  let authService: AuthServiceService;

  // using beforeEach or beforeAll to define common objects.
  beforeAll(()=>{
  })

  //using SpyOn, we fake the method of original service object
  it('spying using SpyOn', () => {      
    authService = new AuthServiceService();
    component = new LearnTestingComponent2(authService);    
    spyOn(authService, 'checkLogin').and.returnValue(true);                                            
    const value = component.isLoggedIn();
    expect(value).toEqual(true);
  }); 

  //using Jasmine.createSpyObj, a fake object of service is created
  it('spying using createSpyObj', () => {
    const spyObj = jasmine.createSpyObj('AuthServiceService', ['checkLogin', 'logout'] );
    component = new LearnTestingComponent2(spyObj);     
    spyObj.checkLogin.and.returnValue(false);
    spyObj.logout.and.returnValue(true);
    const value = component.isLoggedIn();
    expect(value).toEqual(false); 
  }); 

  //using Jasmine.createSpy, not useful for moking
  it('spying using createSpy', () => {
    const spyObj = jasmine.createSpy();
    spyObj.and.returnValue(true);
    expect(spyObj()).toEqual(true); 
  });

});