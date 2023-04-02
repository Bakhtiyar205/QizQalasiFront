import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component';
import { UiComponent } from './ui.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { AdvantageComponent } from './advantage/advantage.component';
import { FooterComponent } from './footer/footer.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCocktail, fas } from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faCocktail, fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
// import {  fab, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { library as legacyLibrary } from '@fortawesome/fontawesome-svg-core';




@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    RoomsComponent,
    ServicesComponent,
    HeaderComponent,
    UiComponent,
    AdvantageComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule
  ], 
  exports:[
    UiComponent
  ]
})
export class UiModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebook, faInstagram);
  }
 }
