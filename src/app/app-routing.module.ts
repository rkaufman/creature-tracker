import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'creature-detail',
    loadChildren: () => import('./creature-detail/creature-detail.module').then( m => m.CreatureDetailPageModule)
  },
  {
    path: 'add-creature',
    loadChildren: () => import('./add-creature/add-creature.module').then( m => m.AddCreaturePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
