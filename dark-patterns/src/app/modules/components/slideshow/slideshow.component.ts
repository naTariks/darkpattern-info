import {Component} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent {

	//TODO: Get Data from .json;
	//		Loop through Data in slideshow
	//		Each Element <ng-template ngbSlide> will be a new .commponent.html

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 100000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
  }
}
