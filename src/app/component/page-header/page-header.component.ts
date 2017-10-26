import { TitleService } from './../../service/title.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit,OnDestroy {
  subscription:Subscription;
  title = '';
  constructor(private titleservice:TitleService) { }

  ngOnInit() {
    this.subscription = this.titleservice.title$.subscribe(
      title => {this.title = title;});
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
