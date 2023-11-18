import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-website-wrapper',
  templateUrl: './website-wrapper.component.html',
  styleUrls: ['./website-wrapper.component.scss']
})
export class WebsiteWrapperComponent {
  jsonData: any;

  constructor(private dataService: DataService){
    
  }

  ngOnInit() {
    this.dataService.getJsonData().subscribe((data: any) => {
      this.jsonData = data
    })
  }

}
