import { CKEditorModule } from 'app/module/ckeditor';
import { GlobalVariable } from './service/global.service';
import { UserService } from './service/user.service';
import { TitleService } from './service/title.service';
import { AppRoutingModule } from './app-routing';
import { MyOwnCustomMaterialModule } from './material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ContentComponent } from './component/content/content.component';
import { FooterComponent } from './component/footer/footer.component';
import { CardComponent } from './component/card/card.component';
import { ListCardComponent } from './component/list-card/list-card.component';
import { PageHeaderComponent } from './component/page-header/page-header.component';
import { AvatarComponent } from './component/avatar/avatar.component';
import { PageBodyComponent } from './component/page-body/page-body.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { CreatePostComponent } from './component/create-post/create-post.component';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import { TabSignupSigninComponent } from './component/tab-signup-signin/tab-signup-signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { SigninComponent } from './component/signin/signin.component';
import { DialogNotificationComponent } from './component/dialog-notification/dialog-notification.component';
import {HttpClientModule} from '@angular/common/http';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { PostDetailComponent } from './component/post-detail/post-detail.component';
import { AllPostComponent } from './component/all-post/all-post.component';
import { PostOfSeriesComponent } from './component/post-of-series/post-of-series.component';
import { TruncatePipe } from './pipe/truncate.pipe';
import { ListCommentComponent } from './component/list-comment/list-comment.component';
import { InformationUserComponent } from './component/information-user/information-user.component';
import { BrowsePostComponent } from './component/browse-post/browse-post.component';
import { CreateSeriesComponent } from './component/create-series/create-series.component';
import { ListSeriesComponent } from './component/list-series/list-series.component';
import { ListPostOfUserComponent } from './component/list-post-of-user/list-post-of-user.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    CardComponent,
    ListCardComponent,
    PageHeaderComponent,
    AvatarComponent,
    PageBodyComponent,
    SidenavComponent,
    CreatePostComponent,
    TabSignupSigninComponent,
    SignupComponent,
    SigninComponent,
    DialogNotificationComponent,
    PageNotFoundComponent,
    PostDetailComponent,
    AllPostComponent,
    PostOfSeriesComponent,
    TruncatePipe,
    ListCommentComponent,
    InformationUserComponent,
    BrowsePostComponent,
    CreateSeriesComponent,
    ListSeriesComponent,
    ListPostOfUserComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    CKEditorModule,
    ReactiveFormsModule,
    HighlightJsModule,
    HttpClientModule,
    AppRoutingModule,
    MyOwnCustomMaterialModule
  ],
  entryComponents: [
    DialogNotificationComponent,
    CreateSeriesComponent
  ],
  providers: [HighlightJsService,TitleService,UserService,GlobalVariable],
  bootstrap: [AppComponent]
})
export class AppModule { }
