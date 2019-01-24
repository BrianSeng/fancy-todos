import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { ListPage } from '../list/list.page';
// import { ContactPage } from '../contact/contact.page';
import { AuthGuardService } from '../../services/auth-route-guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'list',
        children: [
          {
            path: 'list',
            loadChildren: '../list/list.module#ListModule'
          }
        ]
      },
      // {
      //   path: 'contact',
      //   outlet: 'contact',
      //   component: ContactPage
      // }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
