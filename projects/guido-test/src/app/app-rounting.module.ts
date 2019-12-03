import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  ButtonIconComponent, InputIconComponent,
  ConfirmDialogComponent, // ModalComponent,
  StepsComponent, // TabsComponent, MenuComponent,
  // TitleComponent,
  FieldsetComponent,
  DividerComponent,
} from './components';

const routes: Routes = [
  {
    path: 'button-icon',
    component: ButtonIconComponent,
  },
  {
    path: 'confirm-dialog',
    component: ConfirmDialogComponent,
  },
  {
    path: 'input-icon',
    component: InputIconComponent,
  },
//   {
//     path: 'modal',
//     component: ModalComponent,
//   },
//   {
//     path: 'menu',
//     component: MenuComponent,
//   },
  {
    path: 'steps',
    component: StepsComponent,
  },
//   {
//     path: 'title',
//     component: TitleComponent,
//   },
//   {
//     path: 'tabs',
//     component: TabsComponent,
//   },
  {
    path: 'fieldset',
    component: FieldsetComponent,
  },
  {
    path: 'divider',
    component: DividerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
