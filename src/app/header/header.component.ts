import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscibe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [SubscribeService]
})
export class HeaderComponent {
  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }
  constructor(private subService: SubscribeService){

  }
  OnSubscribe(){
              
              this.subService.OnSubscribeClicked('montly');
    }
}
