import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    IconComponent,
    CardComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    IconComponent,
    CardComponent
  ]
})
export class SharedModule { }
