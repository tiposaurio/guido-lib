/**
 * Reveal Divider component.
 *
 * @example
 *
 * ```
 * <gw1-divider title="Contactos" icon="fa fa-gear"
 *   description = "este es un grupo de contactos.">
 * </gw1-divider>
 * ```
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerConfigService } from './divider-config';
import { GuiDividerComponent } from './divider.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        GuiDividerComponent,
    ],
    declarations: [
        GuiDividerComponent,
    ],
    providers: [
        DividerConfigService,
    ],
})
export class GuiDividerModule { }
