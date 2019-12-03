import { NgModule } from '@angular/core';
import { GuidoLibComponent } from './guido-lib.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [GuidoLibComponent],
  imports: [
    // NgbModule.forRoot()
  ],
  exports: [GuidoLibComponent]
})
export class GuidoLibModule { }
