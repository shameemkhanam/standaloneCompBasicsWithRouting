import { Route } from '@angular/router';

// export const BLOG_ROUTE: Route[] =[
//     {
//         path:'home', component:HomeComponent
//     },
//     {
//         path:'about', component:AboutComponent
//     },
//     {
//         path:'docs', component:DocsComponent;
//     }
// ];

export default [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'docs',
    loadComponent: () =>
      import('./docs/docs.component').then((c) => c.DocsComponent),
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
] as Route[];
