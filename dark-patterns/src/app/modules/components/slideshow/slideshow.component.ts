import {Component, Input} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent {
	@Input() patterns: Pattern[] = [];
	splittedPatternArray2d: Pattern[][];

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
	console.log(this.splitArray(this.patterns));

	this.splittedPatternArray2d = this.splitArray(this.patterns)
	console.log(this.splittedPatternArray2d);
	


  }


 splitArray(inputArray: Pattern[]): any[][] {
  // Ensure the input array is not empty
  if (!inputArray.length) {
    return [];
  }

  // Calculate the number of subarrays needed
  const numSubarrays: number = Math.ceil(inputArray.length / 3);

  // Use map to create subarrays
  const subarrays: any[][] = Array.from({ length: numSubarrays }, (_, index) =>
    inputArray.slice(index * 3, (index + 1) * 3)
  );

  return subarrays;
}

// Example usage:
///const inputArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
//const result: number[][] = this.splitArray(inputArray);
//console.log(result);
}

export type Pattern = {
	patternName: string;
	shortDescription: string;
	__comment__?: string;
} 
