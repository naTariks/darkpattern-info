import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit{

<<<<<<< HEAD
  @Input() section: {title: string, content: string, type: string, patterns?: any[]} = {title: "", content: "", type: ""};

  ngOnInit(){
    
=======
  @Input() hasSlideshow: Boolean = true;
  innerWidth: number;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
>>>>>>> main
  }

  ngOnInit(){
    this.onResize();
  }
}
