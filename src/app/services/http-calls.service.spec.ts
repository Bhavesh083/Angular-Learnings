import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpCallsService } from './http-calls.service';

fdescribe('HttpCallsService', () => {
  let service: HttpCallsService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HttpCallsService);
    httpController = TestBed.inject(HttpTestingController);
  });


  it('should get All', () => {
    service.getAll().subscribe(data => {
      expect(data.length).toBe(3);
    })
    const req = httpController.expectOne({
      url: '',
      method: 'get'      
    })
    req.flush(
      [{employee_id:1,employee_name:"Joseph",employee_salary:999, employee_age:22},
       {employee_id:2,employee_name:"Jhon",  employee_salary:456, employee_age:23},
       {employee_id:3,employee_name:"Alex",  employee_salary:788, employee_age:34}]
    );
  });
});
