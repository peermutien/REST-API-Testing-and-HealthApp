import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-status',
  templateUrl: './health-status.component.html',
  styleUrls: ['./health-status.component.css'],
})
export class HealthStatusComponent implements OnInit {
  services: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getServiceStatus();
  }

  getServiceStatus() {
    const microservices = [
      { name: 'Flight Service', url: 'http://localhost:8080/actuator/health' },
      { name: 'Hotel Service', url: 'http://localhost:8082/actuator/health' },
      { name: 'Employee Service', url: 'http://localhost:8084/actuator/health' },
      { name: 'Customer Service', url: 'http://localhost:8083/actuator/health' }
    ];

    for (let service of microservices) {
      this.http.get(service.url)
        .subscribe(
          (data: any) => {
            this.services.push({ name: service.name, status: data.status });
            console.log(data);
          },
          (error: any) => {
            this.services.push({ name: service.name, status: 'DOWN' });
            this.sendEmail(service.name);
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