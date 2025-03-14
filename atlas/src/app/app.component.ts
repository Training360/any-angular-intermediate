import { Component, inject, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalModule, BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NavbarComponent } from './common/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ModalModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [BsModalService],
})
export class AppComponent {
  modalService: BsModalService = inject(BsModalService);

  modalRef?: BsModalRef;

  title = 'atlas';

  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template, {
      ignoreBackdropClick: true,
      animated: true,
      keyboard: true,
    });
  }
}
