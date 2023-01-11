import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleModule } from './module/module.module';

const routes: Routes = [
  {
    path: "",
    loadChildren: ()=> ModuleModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
