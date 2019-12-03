
/**
 * Reveal Confirm Dialog component.
 *
 * @example
 *
 * ```
 *  public onSave() {
 *      this.confirmDialogService.confirmSave()
 *          .then(this.saveSale.bind(this))
 *          .catch(this.cancel.bind(this));
 *  }

 *  private saveSale(result: any) {
 *      console.log('PODENOS GUARDAR');
 *  }
 *  private cancel(reason: any) {
 *      console.log('SE CANCELÓ');
 *   }
 * ```
 */
import { NgModule } from '@angular/core';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogService } from './confirm-dialog.service';

@NgModule({
    imports: [
        NgbModalModule
    ],
    declarations: [
        ConfirmDialogComponent
    ],
    providers: [
        ConfirmDialogService
    ],
    entryComponents: [
        ConfirmDialogComponent
    ],
})
export class GuiConfirmDialogModule { }
