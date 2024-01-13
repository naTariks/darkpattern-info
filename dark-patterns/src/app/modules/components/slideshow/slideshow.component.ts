import {Component, Input} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent {
	@Input() patterns: any[] = [];

	//TODO: Get .json Data from info as Input();
	//		Loop through Data in slideshow;
	//		Each Element <ng-template ngbSlide> will be a new .commponent.html;

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 100000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
  }

  ngOnInit(){
	console.log(this.patterns);
  }
}
