import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'gui-tree-view',
  template: `
    <ul class="treeview" *ngIf="data && data.length">
      <li *ngFor="let d of data">
        <div class="card">
            <div class="row">
                <div class="col-md-12">
                    <div class="card-body">
                        <i *ngIf="d.children.length" class="fas fa-{{d.collapse ? 'minus':'plus'}}-square"
                        (click)="d.collapse = !d.collapse"></i>
                        <i *ngIf="!d.children.length" class="fa fa-square"></i>
                            <strong class="title-card"> {{d.cont_asiento_nombre}} </strong>
                        <a class="btn btn-ligth lamb-button-menu" [ngbPopover]="templateOptions" placement="bottom">
                            <span class="fas fa-ellipsis-v"></span>
                        </a>
                        <ng-template #templateOptions>
                            <ul class="menu-options">
                                <li (click)="newChildren(d)">
                                  <a>
                                    <span class="fa fa-plus"></span> Nuevo Hijo
                                  </a>
                                </li>
                                <li (click)="updated(d.cont_asiento_id)">
                                  <a>
                                    <span class="fa fa-edit"></span> Actualizar
                                   </a>
                                </li>
                                <li (click)="deleted(d.cont_asiento_id)" *ngIf="!d.children.length">
                                  <a>
                                    <span class="fa fa-trash"></span> Eliminar
                                  </a>
                                </li>
                            </ul>
                        </ng-template>
                    </div>
                </div>
            </div>
        </div>

        <gui-tree-view *ngIf="d.collapse && d.children.length"
                            [data]="d.children"
                            [ngbCollapse]="d[collapseAttr]"
                            (eventNewChildren)="newChildren($event)"
                            (eventUpdate)="updated($event)"
                            (eventDelete)="deleted($event)">
        </gui-tree-view>

      </li>
    </ul>
  `,
  styleUrls: ['./tree-view.component.scss']
})
export class AppTreeViewComponent implements OnInit {
  _collapseAll: boolean;
  public collapseAttr: string = 'isCollapsed';
  @Input('data') data: any[];
  @Input('collapseAll') set collapseAll(value: boolean) {
    this._collapseAll = value;
    this._recursiveEdit(this.data, value);
  }
  @Output() eventNewChildren = new EventEmitter();
  @Output() eventUpdate = new EventEmitter();
  @Output() eventDelete = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  /*addChildren(entry) {
    this.eventNewChildren.emit(entry);
  }
  goToUpdate(id) {
    this.eventUpdate.emit(id);
  }
  goToDelete(id) {
    this.eventDelete.emit(id);
  }*/

  newChildren($event) {
    this.eventNewChildren.emit($event);
  }
  updated($event) {
    this.eventUpdate.emit($event);
  }
  deleted($event) {
    this.eventDelete.emit($event);
  }

  private _recursiveEdit(list, value) {
    if (Array.isArray(list)) {
      for (let i = 0, len = list.length; i < len; i++) {
        list[i].collapse = value;
        if (list[i].children.length) {
          this._recursiveEdit(list[i].children, value);
        }
      }
    }
  }

}
export const APP_TREEVIEW_COMPONENTS = [
    AppTreeViewComponent,
];

export class ModelTreeView { // propuest
  id: string;
  name: string;
  parent: string;
  collapse: boolean;
  children: ModelTreeView[];
}
