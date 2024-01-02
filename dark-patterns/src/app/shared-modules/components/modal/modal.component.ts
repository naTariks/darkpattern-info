import {Component, ElementRef, Input, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() modalTitle:string = '';

  @ViewChild('modalContent') modalContent?: ElementRef;
  constructor(private modalService: NgbModal) {
  }

  openFullscreen(content: TemplateRef<any>) {
    this.modalService.open(content, { fullscreen: true });
  }
}
