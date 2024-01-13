import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit{

  @Input() section: {title: string, content: string, type: string, backgroundColor?: string, patterns?: any[]} = {title: "", content: "", type: ""};
  innerWidth: number;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }


  ngOnInit(){
    this.onResize();
  }

}
