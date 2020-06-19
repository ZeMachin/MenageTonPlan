import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';
import { PlanningComponent } from './planning/planning.component';
import { SettingsComponent } from './settings/settings.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { TaskDetailComponent } from './tasks/task-detail/task-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent},
  { path: 'tasks/detail/:name', component: TaskDetailComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users/detail/:name', component: UserDetailComponent},
  { path: 'planning', component: PlanningComponent},
  { path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
