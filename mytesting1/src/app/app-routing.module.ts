
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './compfile/home-page/home-page.component';
import { LoginpageComponent } from './compfile/loginpage/loginpage.component';
import { WishComponent } from './compfile/wish/wish.component';
import { AuthguardGuard } from './gaurd/authguard.guard';


const routes: Routes = [
  
//  { path: 'lazy',
//   loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
// },
  {path:"login",component:LoginpageComponent},
  {path:"wishlist",component:WishComponent , canActivate: [AuthguardGuard]},
  {path:"home",component:HomePageComponent,canActivate: [AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
