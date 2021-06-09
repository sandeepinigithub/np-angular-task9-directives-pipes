import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator-status',
  templateUrl: './navigator-status.component.html',
  styleUrls: ['./navigator-status.component.scss']
})
export class NavigatorStatusComponent implements OnInit , DoCheck {

  networkStatus : boolean;
  networkMsg : string;
  browserName : string;  


  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck(){
    this.networkStatus = navigator.onLine ;
    this.browserName = navigator.appName;
    // this.location = navigator.geolocation ;
    console.log("Network Status : " + this.networkStatus);
    if(this.networkStatus){
      this.networkMsg = "Connected" ;
    }
    else{
      this.networkMsg = "Not Connected"
    }

    

  }

}
