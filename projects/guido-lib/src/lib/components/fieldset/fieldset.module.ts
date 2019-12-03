/**
 * Reveal fieldset component.
 *
 * @example
 *
 * ```
 * <app-fieldset>
 *   <app-fieldset-head>
 *     <app-fieldset-icon icon="fa fa-home"></app-fieldset-icon>
 *     <app-fieldset-title>Mi título</app-fieldset-title>
 *   </app-fieldset-head>
 *     <app-fieldset-body>
 *       Mi contenido
 *     </app-fieldset-body>
 * </app-fieldset>
 * ```
 */
import { NgModule } from '@angular/core';
import { App_FIELDSET_COMPONENTS } from './fieldset.component';

@NgModule({
    imports: [],
    exports: [
        ...App_FIELDSET_COMPONENTS,
    ],
    declarations: [
        ...App_FIELDSET_COMPONENTS,
    ],
    providers: [],
})
export class GuiFieldsetModule { }
