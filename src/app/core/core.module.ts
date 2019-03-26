import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule
  ],
  exports: [
    ComponentsModule
  ]
})
export class CoreModule { }
