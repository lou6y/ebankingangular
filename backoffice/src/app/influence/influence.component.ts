import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../DataService';


@Component({
  selector: 'app-influence',
  templateUrl: './influence.component.html',
  styleUrls: ['./influence.component.scss']
})
export class InfluenceComponent implements OnInit {

  constructor(private toastr: ToastrService,private dataService: DataService) { }
  formObject: any = {};
  responseWs: String;

  ngOnInit(): void {
  }

  showNotification(from, align){
    const url = 'http://localhost:8081/influenceSavingss/predictEpargne';
    this.dataService.postData(url,this.formObject).subscribe(
      response => {
        console.log('Response:', );
        this.responseWs=response.Prediction[0]
        this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> L offre a été ajoutée avec succèes.', '', {
          timeOut: 8000,
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-success alert-with-icon",
          positionClass: 'toast-' + from + '-' +  align
        })
      },
      error => {
        console.error('Error:', error);
      }
    );


}


}
