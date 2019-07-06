import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorlistComponent } from './authorlist/authorlist.component';
import { PostlistComponent } from './postlist/postlist.component';

const routes: Routes = [
    { path: 'Auhtor-List', component: AuthorlistComponent },
    { path: 'Post-List', component: PostlistComponent},
    {
    path: '',
    redirectTo: '/Post-List',
    pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }