import { EightAComponent } from './eight-a/eight-a.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartOneComponent } from './part-one/part-one.component';
import { PartTwoComponent } from './part-two/part-two.component';
import { PartThreeComponent } from './part-three/part-three.component';
import { ErrorComponent } from './error/error.component';
import { EightComponent } from './eight/eight.component';

const routes: Routes = [
  {path: '', redirectTo: '/part1', pathMatch: 'full'},
  {path: 'part1', component: PartOneComponent},
  {path: 'part2', component: PartTwoComponent},
  {path: 'part3', component: PartThreeComponent, children: [
    {path:'', component: EightComponent},
    {path:':year/:month', component: EightAComponent}
  ]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
