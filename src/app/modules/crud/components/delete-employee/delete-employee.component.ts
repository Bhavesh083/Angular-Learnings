import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from 'src/app/services/http-calls.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(private http : HttpCallsService) { }

  ngOnInit(): void {
  }

  deleteEmp(id : number){
    this.http.delete(id).subscribe({
      next: (d) => {
        window.alert("Deleted "+ JSON.stringify(d));
        console.log(d);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Delete call over');
      },
    });
  }

}
