import { Component, OnInit } from '@angular/core';
import { DataService } from '../DataService';
import { DialogCompaignComponent } from '../dialog-compaign/dialog-compaign.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-compaign',
  templateUrl: './compaign.component.html',
  styleUrls: ['./compaign.component.scss']
})
export class CompaignComponent implements OnInit {


  constructor(private dataService: DataService ,public dialog: MatDialog) { }

  compaigns: any = [];


  openDialogEdit(idCampaign){
    const url = 'http://localhost:8081/compaigns/get/'+idCampaign;
    this.dataService.getData(url).subscribe(
      response => {

        let data=response
        const dialogRef = this.dialog.open(DialogCompaignComponent, {data : data});
        console.log('Response:', response);
        dialogRef.componentInstance.eventEmitter.subscribe(result => {
          console.log("data recived "+result)
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
  
    const dialogRef = this.dialog.open(DialogCompaignComponent, dialogConfig);
    dialogRef.componentInstance.eventEmitter.subscribe(result => {
      console.log("data recived "+result)
      if (result != undefined)
      this.performAction(result);
    });
    
  /*  dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result != undefined)
      this.performAction(result)
    });*/

    
  }

  performAction(result) {
    console.log(result)
    this.compaigns=result
  }

  ngOnInit(): void {
    this.getAllOffres()
  }

  getAllOffres(){

    const url = 'http://localhost:8081/compaigns/';
    this.dataService.getData(url).subscribe(
      response => {

        this.compaigns=response
        console.log('Response:', response);
      
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  deleteOffre(idCampaign){

    const url = 'http://localhost:8081/compaigns/delete/'+idCampaign;
    this.dataService.deleteData(url).subscribe(
      response => {

        this.compaigns=response
        console.log('Response:', response);
      
      },
      error => {
        console.error('Error:', error);
      }
    );



  }

}


