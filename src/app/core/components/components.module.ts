import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IconComponent } from './icon/icon.component';
import { ListItemComponent } from './list-item/list-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      NavbarComponent,
      SidebarComponent,
      IconComponent,
      ListItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
      NavbarComponent,
      SidebarComponent,
      IconComponent
  ]
})
export class ComponentsModule { }
