import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../DataService';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(private toastr: ToastrService,private dataService: DataService ) { }
  formObject: any = {};
  responseWs: String;
  
  ngOnInit(): void {
  }

  showNotification(from, align){

    const url = 'http://localhost:8081/customersSatisfactions/predictCredit';
    this.dataService.postData(url,this.formObject).subscribe(
      response => {
        console.log('Response:', response.Prediction[0]);
        this.responseWs=response.Prediction[0]
        this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> Votre avis a été déposé.', '', {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-info alert-with-icon",
          positionClass: 'toast-' + from + '-' +  align
        })
      },
      error => {
        console.error('Error:', error);
      }
    );


}
}
