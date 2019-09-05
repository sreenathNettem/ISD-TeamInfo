import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeamMemberInfoPage } from './team-member-info.page';

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
  declarations: [TeamMemberInfoPage]
})
export class TeamMemberInfoPageModule {}
