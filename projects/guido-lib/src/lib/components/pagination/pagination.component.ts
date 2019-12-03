import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'gui-pagination',
  templateUrl: './pagination.component.html',
  // styleUrls: ['pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  perpages = [
    {id: 15, active: true},
    {id: 30, active: false},
    {id: 50, active: false},
    {id: 100, active: false },
  ];
  ver_por_pagina: number;
  current_page: number;
  @Input() pagination: PaginationChangeEvent;
  /******* *****************/
  @Input() isDisabled: boolean;
  @Output() eventPaginate = new EventEmitter();
  constructor( ) { }
  ngOnInit() {
    this.ver_por_pagina = 15;
    this.current_page = 1;
  }
  changeValuePage(event) {
    this.ver_por_pagina = event.value;
    this.eventPaginate.emit({
        page: this.current_page,
        ver_por_pagina: this.ver_por_pagina,
    });
  }

  public loadPage($event) {
    this.current_page = $event;
    this.eventPaginate.emit({
        page: $event,
        ver_por_pagina: this.ver_por_pagina,
    });
  }

}

export interface PaginationChangeEvent {
    total_lista: string;
    ultima_pagina: string;
    pagina_actual: string;
    ver_por_pagina: string;
    total_por_pagina: string;
    pagina_anterior: string;
    pagina_siguiente: string;
    preventDefault: () => void;

}
