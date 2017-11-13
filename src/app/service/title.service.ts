import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Title } from '@angular/platform-browser';

@Injectable()
export class TitleService {
  private titleSource = new Subject<string>();
  title$ = this.titleSource.asObservable();
  changeTitle(title){
    this.titleSource.next(title);
    this.titleDocument.setTitle(title);
  }
  constructor(private titleDocument: Title ) { }

}
