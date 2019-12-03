import { Component, OnInit, Input } from '@angular/core';
// import { abcForms } from '../standardizer';

@Component({
    selector: 'gui-button-icon',
    templateUrl: 'button-icon.component.html',
    styleUrls: ['./button-icon.component.scss'],
})

export class GuiButtonIconComponent implements OnInit {
    @Input() class: string;
    @Input() colorClass: string;
    @Input() label: string;
    // public abForms: any;
    @Input() isDisabled: boolean;
    @Input() routerLink: any;
    @Input() onlyIcon: boolean;
    @Input() icon: string;
    @Input() title: string;

    constructor() {
        this.class = 'btn btn-primary';
        this.icon = 'fa fa-plus-circle';
        this.label = 'Nuevo';
    }

    ngOnInit() {
    }
}
