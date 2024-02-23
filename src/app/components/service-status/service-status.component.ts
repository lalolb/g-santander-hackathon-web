import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ServiceInfo } from 'src/app/models/service-info';

@Component({
  selector: 'app-service-status',
  templateUrl: './service-status.component.html',
  styleUrls: ['./service-status.component.css']
})
export class ServiceStatusComponent {

  @Input() serviceToTest!: ServiceInfo;
  serviceHttpCode: any;
  serviceStatus: any;
  isActive: any;

  private baseUrl = 'https://hp-api.onrender.com';

  constructor(
    private http: HttpClient
    ) {}

  ngOnInit(): void {
    var routeToTest = this.buildRouteToTest();
    this.testService(routeToTest);
  }

  testService(routeToTest: string): void {
    this.http.get(routeToTest, { observe: 'response' }).subscribe({
      next: (r) => this.setServiceStatus(r.status),
      error: (e) => this.setServiceStatus(e.status)
    });
  }

  buildRouteToTest(): string {
    var route = this.baseUrl;
    if(this.serviceToTest.params != null) {
      route += this.serviceToTest.route.replace(this.serviceToTest.params.key, this.serviceToTest.params. value);
    } else {
      route += this.serviceToTest.route;
    }
    
    return route;
  }

  setServiceStatus(httpCode: number) {
    this.serviceHttpCode = httpCode;

    this.isActive = httpCode >= 200 && httpCode < 400;

    if(this.isActive) {
      this.serviceStatus = 'Activo';
    } else {
      this.serviceStatus = 'Inactivo';
    }
  }
}
