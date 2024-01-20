import {Component, HostListener, Input, OnInit} from '@angular/core';
import { Pattern } from 'app/modules/model/Pattern';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit{

  @Input() section: {title: string, content: string, type: string, backgroundColor?: string, fontColor?: string, patterns?: Pattern[]} = {title: "", content: "", type: ""};
  innerWidth: number;
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
  }


  ngOnInit(){
    this.onResize();
  }

}
