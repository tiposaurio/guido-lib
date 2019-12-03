/**
 * @example
 *
 * ```
 * <app-button-icon icon="fa fa-home" title="Crear un nuevo cliente" onlyIcon="true"></app-button-icon>
 * ```
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GuiButtonIconComponent } from './button-icon.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        GuiButtonIconComponent,
    ],
    declarations: [
        GuiButtonIconComponent,
    ],
    providers: [],
})
export class GuiButtonIconModule { }
