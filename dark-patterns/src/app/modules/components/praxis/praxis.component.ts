import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-praxis',
  templateUrl: './praxis.component.html',
  styleUrls: ['./praxis.component.scss']
})
export class PraxisComponent implements OnInit{

  innerWidth: number;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(){
    this.onResize();
  }
}
