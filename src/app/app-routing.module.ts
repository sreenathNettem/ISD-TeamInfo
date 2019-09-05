import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'isd-login', pathMatch: 'full' },
  { path: 'isd-login', loadChildren: './pages/isd-login/isd-login.module#IsdLoginPageModule' },  { path: 'team-member-info', loadChildren: './pages/team-member-info/team-member-info.module#TeamMemberInfoPageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
