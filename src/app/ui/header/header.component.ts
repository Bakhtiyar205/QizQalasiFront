
import { AfterViewInit, Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Params, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  currentRoute: string|any;

  constructor(private route: ActivatedRoute, private router: Router) {
    
  }
  @Output() changeRouterLink = new EventEmitter<string>();
  
  @ViewChild('homePage', {static:true})
  homePage!: ElementRef;

  newLink: string = "";

  ngOnInit(): void{
    
    
  }

  ngAfterViewInit(): void {

    // if(this.router.url == "/ui"){
    //   this.homePage.nativeElement.classList.add("active");
    // }
  }

  navigateTo(route: string){
    
  }

  isHomePage(){
    return this.router.url === '/ui';
  }

  expander(){
    
  }
}
