/**
 * @example
 *
 * ```
 * <app-button-icon icon="fa fa-home" title="Crear un nuevo cliente" onlyIcon="true"></app-button-icon>
 * ```
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        BreadcrumbComponent,
    ],
    declarations: [
        BreadcrumbComponent,
    ],
    providers: [],
})
export class GuiBreadcrumbIconModule { }
