import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

//   {
//    path: '',
//   loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
//  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'feed',
    loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)
  }


];

const routes2: Routes = [

   {
    path: '',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
   {
    path: 'feed',
    loadChildren: () => import('./feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }

  



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes2, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
