import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-rechtlich',
  templateUrl: './rechtlich.component.html',
  styleUrls: ['./rechtlich.component.scss']
})
export class RechtlichComponent implements OnInit{

  innerWidth: number;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(){
    this.onResize();
  }
}
