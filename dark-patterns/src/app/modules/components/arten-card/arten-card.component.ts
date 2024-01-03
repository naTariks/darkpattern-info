import {Component, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../shared-modules/components/modal/modal.component";

@Component({
  selector: 'app-arten-card',
  templateUrl: './arten-card.component.html',
  styleUrls: ['./arten-card.component.scss']
})
export class ArtenCardComponent {

  @ViewChild('modal') private modalComponent?: ModalComponent

  open(): void {
    return this.modalComponent?.open();
  }
}
