import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/Services/subscibe.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
 
})
export class SideBarComponent {
  constructor(private subService: SubscribeService){

  }
  OnSubscribe(){
    
    this.subService.OnSubscribeClicked('quarterly');
    }
}
