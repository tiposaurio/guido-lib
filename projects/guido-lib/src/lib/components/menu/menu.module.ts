/**
 * Reveal Pagination component.
 *
 * @example
 *

 *  <gui-menu [d]="pagination"
 *      (eventPaginate)="eventPaginate($event)">
 *  </gui-menu>
 * ```
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiMenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';
@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        GuiMenuComponent,
    ],
    declarations: [
        GuiMenuComponent,
    ],
    providers: [
    ],
})
export class GuiMenuModule { }