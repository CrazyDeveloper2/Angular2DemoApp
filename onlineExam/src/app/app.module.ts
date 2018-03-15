import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';  
import { FormsModule } from '@angular/forms';  
import { RouterModule } from '@angular/router';
import {AlertModule} from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';


import {addStudentComponent}  from "./components/AddStudent/addStudent.component";
import {homeComponent}  from "./components/home/home.component";  
import {StudentService} from "./services/services";
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImageDetailComponent } from './components/image-detail/image-detail.component';
import { GalleryService } from './services/gallery.service';
@NgModule({
  declarations: [
    AppComponent, addStudentComponent,
                   homeComponent,
                   NavbarComponent,
                   FooterComponent,
                   ImageDetailComponent,
  ],
  imports: [
    BrowserModule,HttpModule,FormsModule,AlertModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'home',component:homeComponent},
      {path:'add',component:addStudentComponent},
      {path:'gallery',component:ImageDetailComponent},
      {path:'**',redirectTo:'home'}

    ])
  ],
  providers: [StudentService,GalleryService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
