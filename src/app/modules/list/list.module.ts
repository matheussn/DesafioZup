import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list.routing.module';
import { ListComponent } from './list.component';
import { AllUsersComponent } from './routes/all-users/all-users.component';
import { AttendedUsersComponent } from './routes/attended-users/attended-users.component';
import { TrashUsersComponent } from './routes/trash-users/trash-users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserService } from 'src/app/shared/service/user.service';
import { ListItemComponent } from './components/list-item/list-item.component';

@NgModule({
  declarations: [
    ListComponent,
    AllUsersComponent,
    AttendedUsersComponent,
    TrashUsersComponent,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule
  ],
  providers: [UserService]
})
export class ListModule {

}

