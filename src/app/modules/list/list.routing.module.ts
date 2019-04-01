import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AllUsersComponent } from './routes/all-users/all-users.component';
import { ListComponent } from './list.component';
import { AttendedUsersComponent } from './routes/attended-users/attended-users.component';
import { TrashUsersComponent } from './routes/trash-users/trash-users.component';

export const routes: Routes = [
    { path: '', component: ListComponent,
        children: [
            { path: '', component: AllUsersComponent},
            { path: 'attended', component: AttendedUsersComponent},
            { path: 'trash', component: TrashUsersComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListRoutingModule {

}
