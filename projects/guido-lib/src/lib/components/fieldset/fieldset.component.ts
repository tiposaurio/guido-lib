import { Component, OnInit, Input } from '@angular/core';

/**
 * Reveal fieldset component.
 *
 * @example
 *
 * 
 * <app-fieldset>
 *  Mi Contenido
 * </app-fieldset>
 * 
 *
 * <app-fieldset>
 *   <app-fieldset-head>
 *     <app-fieldset-icon [icon]="fa fa-home"></app-fieldset-icon>
 *     <app-fieldset-title>Mi título</app-fieldset-title>
 *   </app-fieldset-head>
 *     <app-fieldset-body>
 *       Mi contenido
 *     </app-fieldset-body>
 * </app-fieldset>
 * 
 */
@Component({
    selector: 'gui-fieldset',
    template: `
    <fieldset class="fieldset-border">
        <legend class="legend-border">
            <ng-content select="gui-fieldset-head"></ng-content>
        </legend>
        <ng-content></ng-content>
        <ng-content select="gui-fieldset-body"></ng-content>
    </fieldset>
    `,
    styleUrls: ['./fieldset.component.scss'],
})

export class AppFieldsetComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}

/**
 * Reveal fieldset head component.
 *
 * @example
 *
 * ```
 * <app-fieldset-head>
 *  Mi título
 * </app-fieldset-head>
 * ```
 * @example
 *
 * ```
 * <app-fieldset-head>
 *   <app-fieldset-title> Mi Titulo </app-fieldset-title>
 *   <app-fieldset-icon icon="fa fa-home"></app-fieldset-icon>
 * </app-fieldset-head>
 * ```
 */
@Component({
    selector: 'gui-fieldset-head',
    template: `
        <ng-content></ng-content>
        <ng-content caption="gn-fieldset-icon" ></ng-content>
        <ng-content caption="gn-fieldset-title"></ng-content>
    `,
})

export class AppFieldsetHeadComponent {
    constructor() { }
}

/**
 * Reveal fieldset body component.
 *
 * @example
 *
 * ```
 * <app-fieldset-body>
 *  Mi Contenido
 * </app-fieldset-body>
 * ```
 */
@Component({
    selector: 'gui-fieldset-body',
    template: `
        <ng-content></ng-content>
    `,
})

export class AppFieldsetBodyComponent {
    constructor() { }
}

/**
 * Reveal fieldset title component.
 *
 * @example
 *
 * ```
 * <app-fieldset-title>
 *  Mi Titulo
 * </app-fieldset-title>
 * ```
 */
@Component({
    selector: 'gui-fieldset-title',
    template: `
    <ng-content></ng-content>
    `,
})

export class AppFieldsetTitleComponent {
    constructor() { }
}

/**
 * Reveal fieldset icon component.
 *
 * @example
 *
 * ```
 * <app-fieldset-icon icon="fa fa-home"></app-fieldset-icon>
 * ```
 */
@Component({
    selector: 'gui-fieldset-icon',
    template: `
    <span class="{{ icon }} gn-icon" ></span>
    `,
    styles: [
        ` .gn-icon {
                font-size: medium;
                margin-right: 6px;
            }
        `,
    ],
})

export class AppFieldsetIconComponent {
    @Input() icon: string;
    constructor() { }
}

export const App_FIELDSET_COMPONENTS = [
    AppFieldsetComponent,
    AppFieldsetHeadComponent,
    AppFieldsetTitleComponent,
    AppFieldsetBodyComponent,
    AppFieldsetIconComponent,
];
