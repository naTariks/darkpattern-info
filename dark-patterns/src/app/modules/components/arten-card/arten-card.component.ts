import {Component, ViewChild, inject} from '@angular/core';
import {ModalComponent} from "../../../shared-modules/components/modal/modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-arten-card',
  templateUrl: './arten-card.component.html',
  styleUrls: ['./arten-card.component.scss']
})
export class ArtenCardComponent {
  @ViewChild('modal') private modalComponent?: ModalComponent

  constructor(private modalService: NgbModal) {
  }

  open() {
    return this.modalService.open(this.modalComponent,{ fullscreen: true });
  }
}
