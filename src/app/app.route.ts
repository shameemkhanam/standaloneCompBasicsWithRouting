import { Route } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

export const APP_ROUTE: Route[] = [
  //   {
  //     path: '',
  //     component: BlogComponent,
  //     loadChildren: ()=> import('./blog/blog.route').then((m)=> m.BLOG_ROUTE)
  //   },
  {
    path: '',
    component: BlogComponent, //for header comp: common
    loadChildren: () => import('./blog/blog.route'),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.route'),
  },
];
