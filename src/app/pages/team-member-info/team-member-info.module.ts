import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeamMemberInfoPage } from './team-member-info.page';
import { PipesCountDownPipe } from '../../pipes/pipes-count-down.pipe';
const routes: Routes = [
  {
    path: '',
    component: TeamMemberInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeamMemberInfoPage, PipesCountDownPipe]
})
export class TeamMemberInfoPageModule {}
