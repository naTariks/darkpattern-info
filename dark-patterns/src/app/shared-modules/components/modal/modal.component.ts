import {Component, ElementRef, Input, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() modalTitle:string = '';
  @ViewChild('modal') private modalContent?: TemplateRef<ModalComponent>

  private modalRef?: NgbModalRef

  constructor(private modalService: NgbModal) {
  }

  open() {
    this.modalRef = this.modalService.open(this.modalContent, { fullscreen: true })
    this.modalRef.result.then()
  }

  openFullscreen(content: TemplateRef<any>) {
    this.modalService.open(content, { fullscreen: true });
  }

  close() {
    this.modalRef?.close()
  }
}
