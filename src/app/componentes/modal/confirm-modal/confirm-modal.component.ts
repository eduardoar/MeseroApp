import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';


@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Input() titulo: string;
  @Input() labelBoton: string;
  @Input() btnClass: string = "btn btn-primary";
  @Output() estaConfirmado: EventEmitter<boolean> = new EventEmitter<boolean>();

  modalRef: BsModalRef;
  flagConfirmado: boolean = false;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  confirm(): void{
    this.flagConfirmado=true;
    this.modalRef.hide()
    this.estaConfirmado.emit(this.flagConfirmado);
  }

  decline(): void{
    this.flagConfirmado=false;
    this.modalRef.hide()
  }

}
