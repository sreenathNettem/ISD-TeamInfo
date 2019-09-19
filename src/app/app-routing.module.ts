import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'isd-login', pathMatch: 'full' },
  { path: 'isd-login', loadChildren: './pages/isd-login/isd-login.module#IsdLoginPageModule' },
  { path: 'team-member-info', loadChildren: './pages/team-member-info/team-member-info.module#TeamMemberInfoPageModule' },
  { path: 'adminpage', loadChildren: './pages/adminpage/adminpage.module#AdminpagePageModule' },
  { path: 'isd-landing', loadChildren: './pages/isd-landing/isd-landing.module#IsdLandingPageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
