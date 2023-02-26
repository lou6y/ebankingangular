import { Component, OnInit } from '@angular/core';
import { DataService } from '../DataService';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent implements OnInit {

  constructor(private dataService: DataService ,public dialog: MatDialog,private toastr: ToastrService) { }

  Offres: any = [];


  openDialogEdit(idOffre){
    const url = 'http://localhost:8081/offers/get/'+idOffre;
    this.dataService.getData(url).subscribe(
      response => {
        let data=response
        const dialogRef = this.dialog.open(DialogComponent, {data : data}) 
        dialogRef.afterClosed().subscribe(result => {
          if (result != undefined)
          this.performAction(result);
        });
      },
      error => {
        console.error('Error:', error);
      }
    );

    

  }


 

  openDialog() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined)
      this.performAction(result);
    });
    
  }

  performAction(result) {
    console.log(result)
   // this.Offres=result
    this.Offres=[]
    this.Offres.push(...result);
  }

  ngOnInit(): void {
    this.getAllOffres()
  }

  getAllOffres(){

    const url = 'http://localhost:8081/offers/';
    this.dataService.getData(url).subscribe(
      response => {
        this.Offres=response
      
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  deleteOffre(idOffre,from, align){

    const url = 'http://localhost:8081/offers/delete/'+idOffre;
    this.dataService.deleteData(url).subscribe(
      response => {
        this.Offres=response 
        this.toastr.success('<span class="now-ui-icons ui-1_bell-53"></span> L offre a été supprimé avec succèes.', '', {
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
