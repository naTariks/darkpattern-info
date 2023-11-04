import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  //TODO: Inject .json Data via Service
  //      Pass .json Data to Slideshow if(hasSlideshow)

  @Input() hasSlideshow: Boolean = true;

  
  ngOnInit(){
    console.log(this.hasSlideshow);
    
  }

}
