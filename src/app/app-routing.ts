import { PostOfSeriesComponent } from './component/post-of-series/post-of-series.component';
import { AllPostComponent } from './component/all-post/all-post.component';
import { LoginGuardService } from './service/login-guard.service';
import { PostDetailComponent } from './component/post-detail/post-detail.component';
import { ListMyPostComponent } from './component/list-my-post/list-my-post.component';
import { AuthGuardService } from './service/auth-guard.service';
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
        data : {title : 'Đăng nhập / Đăng ký'},
        canActivate: [LoginGuardService],
    },
    {
        path: 'create-post',
        component: CreatePostComponent,
        data: { title: 'Tạo bài viết' },
        canActivate: [AuthGuardService],
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
    providers: [AuthGuardService,LoginGuardService]
  })
export class AppRoutingModule { }