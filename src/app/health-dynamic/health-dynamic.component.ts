import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-health-dynamic',
  templateUrl: './health-dynamic.component.html',
  styleUrls: ['./health-dynamic.component.css']
})
export class HealthDynamicComponent implements OnInit {

  services: any[] = [];
  applications: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8099/applications').subscribe(
      response => {
        this.applications = response;
        this.fetchHealthData();
      },
      error => {
        console.error('Error occurred:', error);
      }
    );
  }

  fetchHealthData() {
    for (const app of this.applications) {
      const url = app.url + '/actuator/health';
      this.http.get<any>(url).subscribe(
        healthDataResponse => {
        
          const status = healthDataResponse.status === 'UP' ? 'UP' : 'DOWN';
          this.services.push(
            { name: app.name, status }
            );
          console.log('Health response:', healthDataResponse);
        },
        error => {
          console.error('Error occurred:', error);
          this.services.push({ name: app.name, status: 'DOWN' });
          this.sendEmail(app.name);
        }
      );
    }
  }
  
    sendEmail(serviceName: string) {
    const emailEndpoint = 'http://localhost:8094/emailSend';

    const emailData = {
      to: 'mutientestemail@gmail.com', 
      subject: 'URGENT ALERT Microservice Down',
      body: `The ${serviceName} microservice is down. Please Investigate.`,
    };

    this.http.post(emailEndpoint, emailData)
      .subscribe(
        (response: any) => {
          console.log('Email sent successfully:', serviceName);
        },
        (error: any) => {
          console.error('Failed to send email:', error);
        }
      );
  }
}
