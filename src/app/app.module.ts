import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {MdCardModule} from '@angular2-material/card';
import {MdButtonToggleModule} from '@angular2-material/button-toggle';
import {MdButtonModule} from '@angular2-material/button';
import {MdSidenavModule} from '@angular2-material/sidenav';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdIconModule} from '@angular2-material/icon';
import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdRadioModule} from '@angular2-material/radio';
import {MdInputModule} from '@angular2-material/input';
import {MdProgressBarModule} from '@angular2-material/progress-bar';
import {MdTabsModule} from '@angular2-material/tabs';

import { AppComponent } from './app.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { RoleManagementComponent } from './role-management/role-management.component';
import { PermissionManagementComponent } from './permission-management/permission-management.component';
import { SearchBoxComponent } from './user-management/search-box/search-box.component';
import { HomeComponent } from './home/home.component';
import { routerConfig } from './router-config';

@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    RoleManagementComponent,
    PermissionManagementComponent,
    SearchBoxComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig),
    
    MdButtonModule,
    MdButtonToggleModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdCheckboxModule,
    MdRadioModule,
    MdInputModule,
    MdProgressBarModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
