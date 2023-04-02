import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  @Input() headerText: boolean = <boolean>true;
  @ViewChild('exampleModalTrigger', { static: true }) exampleModalTrigger: HTMLButtonElement;
  slideIndex: number = 1;

  plusDivs(n: number): void {
    this.showDivs(this.slideIndex += n);
  }



  showDivs(n: number): void {
    let i: number;
    const x: HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides");
    if (n >= x.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = (x.length - 1) }
    for (i = 0; i < x.length; i++) {
      (<HTMLElement>x[i]).style.display = "none";
    }
    (<HTMLElement>x[this.slideIndex]).style.display = "block";
  }

  ngOnInit(): void {
    this.showDivs(1);
  }
}
