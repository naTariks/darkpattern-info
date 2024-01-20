import {Component, Input} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Pattern } from 'app/modules/model/Pattern';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent {
	@Input() patterns: Pattern[] = [];
	splittedPatternArray2d: Pattern[][];

	constructor(config: NgbCarouselConfig) {
		config.interval = 100000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
  	}

	ngOnInit(){
		this.splittedPatternArray2d = this.splitArray(this.patterns)
		console.log(this.splittedPatternArray2d);
	}


	splitArray(inputArray: Pattern[]): Pattern[][] {
		// Ensure the input array is not empty
		if (!inputArray.length) {
			return [];
		}

		// Calculate the number of subarrays needed
		const numSubarrays: number = Math.ceil(inputArray.length / 3);

		// Use map to create subarrays
		const subarrays: Pattern[][] = Array.from({ length: numSubarrays }, (_, index) =>
			inputArray.slice(index * 3, (index + 1) * 3)
		);

		return subarrays;
	}

}
