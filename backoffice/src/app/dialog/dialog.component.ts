import { Component, OnInit,Output,EventEmitter,Inject  } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../DataService';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Output() eventEmitter = new EventEmitter<string>();

  offer: any = {
 /*   endDate:"",
    creationDate:"",
    advantage:"",
    characteristic:"",
    picture:"",
    description:"",
    offerName:"",*/
  }; 

  constructor(private toastr: ToastrService, public dialogRef: MatDialogRef<DialogComponent>,private dataService: DataService,@Inject(MAT_DIALOG_DATA) public data: any) { }

  

  ngOnInit(): void {
    Object.assign(this.offer, this.data)
  }
  submit(from, align){
    if (this.offer.idOffre != undefined){
      const url = 'http://localhost:8081/offers/update/'+this.offer.idOffre;
      this.dataService.postData(url,this.offer).subscribe(
        response => {
         const result =response
         this.dialogRef.close(result);
         this.eventEmitter.emit(result)
         
          this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> L offre a été modifié avec succèes.', '', {
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
    const url = 'http://localhost:8081/offers/add';
    this.dataService.postData(url,this.offer).subscribe(
      response => {
        console.log('Response:',response );
       const result =response
       this.dialogRef.close(result);
       this.eventEmitter.emit(result)
       
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

  close(){
    this.dialogRef.close();
  }

}
