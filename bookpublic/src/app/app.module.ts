import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule}from'@angular/forms';
import { AppComponent } from './app.component';
import { HomeBooklistComponent } from './home-booklist/home-booklist.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FrameworkComponent } from './framework/framework.component';
import {APP_BASE_HREF} from '@angular/common';
import { RouterModule} from '@angular/router';
import { CreateComponent } from './create/create.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  //This is the declarations of our Ng Module
  declarations: [
    AppComponent,
    HomeBooklistComponent,
    AboutComponent,
    HomepageComponent,
    HeaderComponent,
    FrameworkComponent,
    CreateComponent,
    DetailsPageComponent,
    DeleteComponent,
    UpdateComponent,
    
  ],
  //Imported all Component with given all path and component 
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'',
        component: HomepageComponent
      },

      {
        path : 'about',
        component:AboutComponent
      },

      {
        path:'create',
      component:CreateComponent
      },

      {
        path:'books/:bookid',
        component:DetailsPageComponent
      },
      {
        path:'books/delete/:bookid',
        component:DeleteComponent
      },

      {
        path:'books/update/:bookid',
        component:UpdateComponent
      }
    ])
  ],
  providers: [{provide : APP_BASE_HREF, useValue:'/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
