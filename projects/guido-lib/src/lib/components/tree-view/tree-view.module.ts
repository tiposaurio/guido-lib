
/**
 * Reveal treeview component.
 *
 * @example
 *
 * ```
 * <gui-tree-view [data]="datasource"
 *  (eventNewChildren)="newChildren($event)"
 *  (eventUpdate)="updated($event)"
 *  (eventDelete)="deleted($event)">
 * </gui-tree-view>
 * 
 * 
 * ```
 * /***
 * Api_Data = [
    {
    Parent_cont_asiento_id: "154723678396393754"
    children: []
    collapse: false
    cont_asiento_clase: "A"
    cont_asiento_cuenta: 10
    cont_asiento_estado: true
    cont_asiento_id: "154723989141661240"
    cont_asiento_nivel: "2"
    cont_asiento_nombre: "Efectivo y equivalentes de efectivo"
    }
]
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_TREEVIEW_COMPONENTS } from './tree-view.component';
import { NgbCollapseModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
    imports: [
        CommonModule,
        NgbCollapseModule,
        NgbPopoverModule,
    ],
    exports: [
        ...APP_TREEVIEW_COMPONENTS,
    ],
    declarations: [
        ...APP_TREEVIEW_COMPONENTS,
    ],
    providers: [],
})
export class GuiTreeViewModule { }
