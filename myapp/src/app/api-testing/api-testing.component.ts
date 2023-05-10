import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-api-testing',
  templateUrl: './api-testing.component.html',
  styleUrls: ['./api-testing.component.css']
})
export class ApiTestingComponent {

 
  url: string = 'http://';
  method: string ='GET';
  body: string = '';
  response: any;
  errorMsg:any;

  constructor(private httpClient: HttpClient) { }

   Request() {
    if (this.method === 'GET') {
      
        let response = this.httpClient.get(`${this.url}`);

        response.subscribe(  (response)=>this.response=JSON.stringify(response,null,2) ,
       
        // (error:HttpErrorResponse) => {
        //   alert(error.status + error.message)
        //   }
        
        (error) => {
          if (error instanceof HttpErrorResponse && error.status === 400) {
            this.errorMsg=JSON.stringify(error.status) +" " +"Bad Request"
          }
          else if (error.status === 404) {
            this.errorMsg=JSON.stringify(error.status) +" " +"Not Found"
          } 
          else if (error.status === 405) {
            this.errorMsg=JSON.stringify(error.status) +" " +"Method Not Allowed"
          } 
          else if (error.status === 500) {
            this.errorMsg=JSON.stringify(error.status) +" " +"Internal Server Error"
          } 
          else if (error.status === 0) {
            this.errorMsg=JSON.stringify(error.status) +" " +"Could not send Request"
          } 
          else {
            this.errorMsg=JSON.stringify(error.status);
          }
        
          // (error)=>{
          //   if(error instanceof XMLHttpRequest){ 
          //  alert(`Error: ${error.status}`);
          //  window.location.reload();
          //   }
          // });
          // (error:XMLHttpRequest) => {
          //   if (error.status === 404) {
          //     alert('HTTP Error 404: Not Found');
          //   } else if (error.status === 500) {
          //     alert('HTTP Error 500: Internal Server Error');
          //   } else if (error.status === 0) {
          //     alert('Network Error: Could not connect to the server');
          //   } else {
          //     alert(`HTTP Error ${error.status}`);
          //   }
         // }
        
        }    
        )}
   
  
    
        else if (this.method === 'POST') {

          let headers = new HttpHeaders({
            'Content-Type': 'application/json'

          });

          let response = this.httpClient.post(`${this.url}`, this.body, { headers: headers });

          response.subscribe((response) => this.response = JSON.stringify(response,null,2),
          
          // (error:HttpErrorResponse) => {
          //   //alert(error.status +"  "+error.message );
          //   alert(`HTTP Error ${error.status} ${error.}`)
          // }
          
          // )

            (error) => {
            if (error instanceof HttpErrorResponse && error.status === 400) {
              this.errorMsg=JSON.stringify(error.status) +" " +"Bad Request"
            }
            else if (error.status === 404) {
              this.errorMsg=JSON.stringify(error.status) +" " +"Not Found"
            }
            else if (error.status === 405) {
              this.errorMsg=JSON.stringify(error.status) +" " +"Method Not Allowed"
            } 
             else if (error.status === 500) {
              this.errorMsg=JSON.stringify(error.status) +" " +"Internal Server Error"
            } 
            else if (error.status === 0) {
              this.errorMsg=JSON.stringify(error.status) +" " +"Could not send Request"
            } 
            else {
              this.errorMsg=JSON.stringify(error.status);
            }
            
            console.log(error);
          })
        
        }

        else if (this.method === 'PUT'){
          let headers = new HttpHeaders({
            'Content-Type': 'application/json'
          });
          
          let response=this.httpClient.put(`${this.url}`, this.body, { headers: headers });
          response.subscribe((response) => this.response = JSON.stringify(response,null,2),
         
          (error) => {
            if (error instanceof HttpErrorResponse && error.status === 400) {
              this.errorMsg=JSON.stringify(error.status) +" " +"Bad Request"
            }
            else if (error.status === 404) {
              this.errorMsg=JSON.stringify(error.status) +" " +"Not Found"
            } 
            else if (error.status === 405) {
              this.errorMsg=JSON.stringify(error.status) +" " +"Method Not Allowed"
            } 
            else if (error.status === 500) {
              this.errorMsg=JSON.stringify(error.status) +" " +"Internal Server Error"
            } 
            else if (error.status === 0) {
              this.errorMsg=JSON.stringify(error.status) +" " +"Could not send Request"
            } 
            else {
              this.errorMsg=JSON.stringify(error.status);
            }
          }
           )}

           else if (this.method === 'DELETE') {
          
            let response = this.httpClient.delete(`${this.url}`);
            response.subscribe((response) => this.response = JSON.stringify(response,null,2),
            
            (error) => {
              if (error instanceof HttpErrorResponse && error.status === 400) {
                this.errorMsg=JSON.stringify(error.status) +" " +"Bad Request"
              }
              else if (error.status === 404) {
                this.errorMsg=JSON.stringify(error.status) +" " +"Not Found"
              }
              else if (error.status === 405) {
                this.errorMsg=JSON.stringify(error.status) +" " +"Method Not Allowed"
              } 
               else if (error.status === 500) {
                this.errorMsg=JSON.stringify(error.status) +" " +"Internal Server Error"
              } 
              else if (error.status === 0) {
                this.errorMsg=JSON.stringify(error.status) +" " +"Could not send Request"
              } 
              else {
                this.errorMsg=JSON.stringify(error.status);
              }
              
              console.log(error);
            }
            
            );
          }
           
  }
}
