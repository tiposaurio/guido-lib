import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'gui-confirm-dialog',
  templateUrl: 'confirm-dialog.component.html',
  styleUrls: ['confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  public cancel() {
    // this.activeModal.close(false);
    this.activeModal.dismiss(false);
  }

  public ok() {
    this.activeModal.close({daa: 'ola Soy guido'});
  }

  public dismiss() {
    // this.activeModal.close(true);
    this.activeModal.dismiss(false);
  }

}
