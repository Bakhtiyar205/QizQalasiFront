import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit{
  @Input() headerText: boolean = true;
  @ViewChild('aboutText', {static: true}) aboutText: ElementRef;
  
  ngOnInit(): void{
    if(!this.headerText){
      const shortenText = this.aboutText.nativeElement.textContent.slice(0, 250)
     this.aboutText.nativeElement.textContent = shortenText;
    }
  }
  ngAfterViewInit(): void {
  }
}
