import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from './product/list/list.component';
import {CreateComponent} from './product/create/create.component';
import {EditComponent} from './product/edit/edit.component';
import {DeleteComponent} from './product/delete/delete.component';



const routes: Routes = [
  {
    path: 'list',
    component : ListComponent
  },
  {
    path: 'create',
    component : CreateComponent
  },
  {
    path:'edit/:id',
    component: EditComponent
  },
  {
    path : 'delete/:id',
    component : DeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
