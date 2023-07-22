import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './components/settings/settings.component';
import { HomeComponent } from './components/home/home.component';
import { CreditsComponent } from './components/credits/credits.component';
import { StartComponent } from './components/start/start.component';
import { StartButtonGuard } from './services/guard/start-button.guard'; 

const routes: Routes = [//Setting Routes
{ path: 'home', component: HomeComponent},
{ path: 'settings', component: SettingsComponent },
{ path: 'credits', component: CreditsComponent },
{ path: 'start', component: StartComponent, canActivate: [StartButtonGuard] },
{ path: '', redirectTo: '/home', pathMatch: 'full'},
{ path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }