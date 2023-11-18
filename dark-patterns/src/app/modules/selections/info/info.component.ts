import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  //TODO: Inject .json Data via Service
  //      Pass .json Data to Slideshow if(hasSlideshow)

  @Input() section: {title: string, content: string, type: string, patterns?: any[]} = {title: "", content: "", type: ""};

  ngOnInit(){
    
  }

}
