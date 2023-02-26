
import { Component, OnInit,Output,EventEmitter,Inject  } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../DataService';

@Component({
  selector: 'app-dialog-compaign',
  templateUrl: './dialog-compaign.component.html',
  styleUrls: ['./dialog-compaign.component.scss']
})
export class DialogCompaignComponent implements OnInit {



  @Output() eventEmitter = new EventEmitter<string>();

  compaign: any = {}; 

  constructor(private toastr: ToastrService, public dialogRef: MatDialogRef<DialogCompaignComponent>,private dataService: DataService,@Inject(MAT_DIALOG_DATA) public data: any) { }

  

  ngOnInit(): void {
    Object.assign(this.compaign, this.data)
    console.log(this.data)
    console.log(typeof this.data)
    console.log(this.compaign)
  }
  submit(from, align){
    if (this.compaign.idCampaign != undefined){
      const url = 'http://localhost:8081/compaigns/update/'+this.compaign.idCampaign;
      this.dataService.postData(url,this.compaign).subscribe(
        response => {
          console.log('Response:',response );
         const result =response
         this.dialogRef.close(result);
         this.eventEmitter.emit(result)
         
          this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> La compaign a été modifié avec succèes.', '', {
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
    else{
    const url = 'http://localhost:8081/compaigns/add';
    this.dataService.postData(url,this.compaign).subscribe(
      response => {
        console.log('Response:',response );
       const result =response
       this.dialogRef.close(result);
       this.eventEmitter.emit(result)
       
        this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> La compaign a été ajoutée avec succèes.', '', {
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

  close(){
    this.dialogRef.close();
  }

}
