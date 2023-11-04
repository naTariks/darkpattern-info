import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-arten-card',
  templateUrl: './arten-card.component.html',
  styleUrls: ['./arten-card.component.scss']
})
export class ArtenCardComponent {

  constructor(private router: Router) {
  }

  openDarkPattern() {
    //this.router.navigate(['pattern', this.pattern.id]);
  }
}
