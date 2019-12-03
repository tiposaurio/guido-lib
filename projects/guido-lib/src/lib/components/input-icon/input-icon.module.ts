
/**
 * @license
 * Copyright Lamb Team. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

/**
 * Reveal fieldset component.
 *
 * @example
 *
 * ```
 * <gui-input-icon>
 *     <i class="fa fa-search"></i>
 *     <input type="text" placeholder="Este es mi placeholder" class="form-control form-control-sm" id="customer">
 * </gui-input-icon>
 * ```
 */
import { NgModule } from '@angular/core';

import { InputIconComponent } from './input-icon.component';

@NgModule({
    imports: [],
    exports: [InputIconComponent],
    declarations: [InputIconComponent],
    providers: [],
})
export class GuiInputIconModule { }
