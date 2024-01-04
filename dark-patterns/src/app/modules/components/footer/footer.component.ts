import {Component, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalComponent} from "../../../shared-modules/components/modal/modal.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @ViewChild('infoModal') private modalComponent?: ModalComponent

  selectedInfo: string = '';

  constructor(private modalService: NgbModal) {
  }

  open(type: string) {
    this.selectedInfo = type;
    return this.modalService.open(this.modalComponent, { fullscreen: true });
  }
}
