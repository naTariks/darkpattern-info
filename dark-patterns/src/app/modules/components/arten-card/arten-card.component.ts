import {Component, Input, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../shared-modules/components/modal/modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Pattern} from 'app/modules/model/Pattern';

@Component({
  selector: 'app-arten-card',
  templateUrl: './arten-card.component.html',
  styleUrls: ['./arten-card.component.scss']
})
export class ArtenCardComponent {
  @ViewChild('modal') private modalComponent?: ModalComponent
  @Input() pattern: Pattern;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(){
    console.log(this.pattern);

  }

  open() {
    return this.modalService.open(this.modalComponent,{ fullscreen: true });
  }
}
