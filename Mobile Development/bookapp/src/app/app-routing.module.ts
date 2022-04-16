import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'toc',
    loadChildren: () => import('./toc/toc.module').then( m => m.TocPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'chapter1',
    loadChildren: () => import('./chapter1/chapter1.module').then( m => m.Chapter1PageModule)
  },
  {
    path: 'chapter2',
    loadChildren: () => import('./chapter2/chapter2.module').then( m => m.Chapter2PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
