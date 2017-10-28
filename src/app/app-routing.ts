import { BrowsePostComponent } from './component/browse-post/browse-post.component';
import { PermissionGuardService } from './service/guard/permission-guard.service';
import { AuthGuardService } from './service/guard/auth-guard.service';
import { LoginGuardService } from './service/guard/login-guard.service';
import { PostOfSeriesComponent } from './component/post-of-series/post-of-series.component';
import { AllPostComponent } from './component/all-post/all-post.component';
import { PostDetailComponent } from './component/post-detail/post-detail.component';
import { ListMyPostComponent } from './component/list-my-post/list-my-post.component';
import { CreatePostComponent } from './component/create-post/create-post.component';
import { TabSignupSigninComponent } from './component/tab-signup-signin/tab-signup-signin.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    {path: '', component: AllPostComponent},
    {   
        path: 'signin',
        component: TabSignupSigninComponent ,
        canActivate: [LoginGuardService],
    },
    {
        path: 'create-post',
        component: CreatePostComponent,
        data: {permission: 'create-post'},
        canActivate: [PermissionGuardService],
    },
    {
        path: 'post-of-series/:title/:id',
        component: PostOfSeriesComponent,
    },
    {
        path: 'post-of-user/:id',
        component: ListMyPostComponent,
        canActivate: [AuthGuardService],
    },
    {
        path: 'post-detail/:id',
        component: PostDetailComponent,
    },
    {
        path: 'browse-post',
        component: BrowsePostComponent,
        data: {permission: 'published'},
        canActivate: [PermissionGuardService],
    },
    { path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {
          enableTracing: true, // <-- debugging purposes only
        }
      )
    ],
    exports: [RouterModule],
    providers: [AuthGuardService,LoginGuardService,PermissionGuardService]
  })
export class AppRoutingModule { }