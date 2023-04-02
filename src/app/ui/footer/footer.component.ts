import { Component } from '@angular/core';
import { RouteTranslate } from '../models/route-translate';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
   links:Array<RouteTranslate> = [
    { route: 'home', view: 'ana səhifə' },
    { route: 'about', view: 'haqqımızda' },
    { route: 'rooms', view: 'otaqlar' },
    { route: 'gallery', view: 'qalereya' },
    { route: 'services', view: 'xidmətlərimiz' },
    { route: 'contact', view: 'əlaqə' },

  ];
}
