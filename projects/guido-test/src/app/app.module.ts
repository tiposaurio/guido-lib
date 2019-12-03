import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-rounting.module';
import { InputIconComponent, ButtonIconComponent,
  ConfirmDialogComponent, StepsComponent,
  FieldsetComponent, DividerComponent, TreeViewComponent } from './components';
  import {
    GuiButtonIconModule,
    GuiConfirmDialogModule,
    GuiInputIconModule,
    GuiTreeViewModule,
    GuiDividerModule,
    GuiFieldsetModule,
    GuiStepsModule} from 'guido-lib';
export const COMPONENTS: any[] = [
  InputIconComponent,
  ButtonIconComponent,
  ConfirmDialogComponent,
  // MenuComponent, 
  StepsComponent,
  FieldsetComponent,
  DividerComponent,
  TreeViewComponent,
];
export const GW3_MODULES: any[] = [
GuiButtonIconModule,
GuiInputIconModule,
GuiConfirmDialogModule,
GuiTreeViewModule,
GuiDividerModule,
GuiFieldsetModule,
GuiStepsModule
];
@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ...GW3_MODULES,
    // RouterModule.forRoot(AppRoutingModule),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
