import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './ui/about/about.component';
import { ContactComponent } from './ui/contact/contact.component';
import { GalleryComponent } from './ui/gallery/gallery.component';
import { HomeComponent } from './ui/home/home.component';
import { RoomsComponent } from './ui/rooms/rooms.component';
import { ServicesComponent } from './ui/services/services.component';
import { UiComponent } from './ui/ui.component';

const routes: Routes = [
  {path:"", redirectTo:"/ui",pathMatch:"full"},
  {path:"admin",component: AdminComponent},
  {path:"ui",component:UiComponent,children:[
    {path:"", component:HomeComponent, pathMatch:"full"},
    {path:"about", component: AboutComponent},
    {path:"contact", component: ContactComponent},
    {path:"gallery", component:GalleryComponent},
    {path:"rooms",component:RoomsComponent},
    {path:"services",component:ServicesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
