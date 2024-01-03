import {Component, TemplateRef, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../shared-modules/components/modal/modal.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
/*
  @ViewChild('modalAbout') modalAbout?: TemplateRef<any>;
  @ViewChild('modalImpressum') modalImpressum?: TemplateRef<any>;*/
  private modalComponent?: ModalComponent

  open(content: any) {
    return this.modalComponent?.openFullscreen(content);
  }

}
