import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/models/employee';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employees: EmployeeService, private router : Router, private actRoute : ActivatedRoute) {
  }

  employeeList : employee[] = [{ id : 1, name : 'dhoni' },{id : 2, name : 'raina' }];

  // can push elements using concat or spread operator or foreach
  getFromService(){
    this.employees.employee.forEach( x => { 
      if(!this.employeeList.includes(x,0)){
        this.employeeList.push(x);
  }})} 

  // ---------------  HTTP CALLS  -----------

  // GET 
  getFromHttpCall(){
    this.employees.fetchData().subscribe(data => this.employeeList = data);
  }

  // Testing Error Handling
  getSampleError(){
    this.employees.fetchData2().subscribe({
      next: data => {
        console.log("Data is good")
      },
      error: err => {
        console.log(err.message);
      },
      complete: () => {
        console.log("completed");
      }
    }
    );
  }



  // ------------------  ROUTING -----------------------
  
  passToURL(id : any){
    /* Pass a single parameter :
    this.router.navigate(['/services', id]); */
    
    /* Pass multiple parameters :
    this.router.navigate(['/services', id, x, y]); */

    /* Pass optional parameters :
    this.router.navigate(['/services', id, {isEven : true}]) */

    /* Relative navigation 1 : just add params & relativeTo
    this.router.navigate([id, {isEven: true}], {relativeTo: this.actRoute}); */

    /* Relative navigation 2 : you can go one path back
    this.router.navigate(['../', id, {isEven: true}], {relativeTo: this.actRoute}); */

    this.router.navigate(['/services', id]);
  }

  openChild(){
    this.router.navigate(['./child1'], { relativeTo: this.actRoute});
  }

  selectedID : any;
  employeeFromURL : employee = { id : 0, name : 'bhavesh' };

  ngOnInit(): void { 
    // using snapshot, but not dynamic updated
    this.selectedID = this.actRoute.snapshot.paramMap.get('id');

    // using subscribe, its dynamically updated
    this.actRoute.paramMap.subscribe( (params : ParamMap) => {
      this.selectedID = params.get('id');
    })

    /*
    var getID = this.actRoute.snapshot.paramMap.get('id');
    this.employeeList = [{ id : 1, name : 'dhoni' },{id : 2, name : 'raina' }];
    this.employeeFromURL = this.employeeList.find( x => x.id == parseInt(getID) );
    */
  }
}
