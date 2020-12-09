import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TilesComponent } from './tiles/tiles.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroComponent } from './hero/hero.component';
import { BulmaComponent } from './bulma/bulma.component'


const routes: Routes = [
  /*{ path: '', component: HomeComponent, pathMatch: 'full' },*/

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'app/tiles', component: TilesComponent },

  { path: 'hero', component: HeroComponent },

  { path: 'bulma', component: BulmaComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
