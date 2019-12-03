/**
 * Reveal steps component.
 *
 * @example
 *
 * ```
 * <app-step-group justify="start"  (onComplete)="onComplete($event)" (stepChange)="beforeChange($event)">
 *   <app-step [validStep]="formSale.valid">
 *     <ng-template appStepTitle>
 *       <span><i class="fa fa-home lamb-icon"></i></span> Step 1
 *     </ng-template>
 *     <ng-template appStepContent>
 *       Conenido del step 1
 *     </ng-template>
 *   </app-step>
 *   <app-step icon="fa fa-list-alt" title="Step 2" [validStep]="validStep2">
 *     <ng-template appStepContent>
 *       Contenido del step 2
 *     </ng-template>
 *   </app-step>
 *   <app-step icon="fa" disabled="true" title="Disabled">
 *     <ng-template appStepContent>
 *       Contenido del Desabilitado
 *     </ng-template>
 *   </app-step>
 * </app-step-group>
 * ```
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_STEPS_COMPONENTS } from './steps.component';
import { AppStepConfig } from './step-config';
export { AppStepChangeEvent } from './steps.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        ...APP_STEPS_COMPONENTS,
    ],
    declarations: [
        ...APP_STEPS_COMPONENTS,
    ],
    providers: [
        AppStepConfig,
    ],
})
export class GuiStepsModule { }
