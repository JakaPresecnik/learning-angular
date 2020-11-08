import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartOneComponent } from './part-one/part-one.component';
import { PartTwoComponent } from './part-two/part-two.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', redirectTo: '/part1', pathMatch: 'full'},
  {path: 'part1', component: PartOneComponent},
  {path: 'part2', component: PartTwoComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
