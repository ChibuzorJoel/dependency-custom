import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { AdminComponent } from './header/admin/admin.component';
import { HeroComponent } from './header/home/hero/hero.component';
import { SideBarComponent } from './header/home/side-bar/side-bar.component';
import { UserDetailComponent } from './header/admin/user-detail/user-detail.component';
import { UserListComponent } from './header/admin/user-list/user-list.component';
import { SubscribeService } from './Services/subscibe.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    HeroComponent,
    SideBarComponent,
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [SubscribeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
