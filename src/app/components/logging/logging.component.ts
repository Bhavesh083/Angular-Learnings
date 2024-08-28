import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from 'src/app/services/http-calls.service';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css'],
})
export class LoggingComponent implements OnInit {

  constructor(private http: HttpCallsService) {
    this.errorLogs = http.logErrors;
    this.requestLogs = http.logRequests;
    this.responseLogs = http.logResponse;
  }

  ngOnInit(): void {}

  errorLogs: string[];
  requestLogs: string[];
  responseLogs: string[];
}
