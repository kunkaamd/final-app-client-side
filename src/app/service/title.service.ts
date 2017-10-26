import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TitleService {
  private titleSource = new Subject<string>();
  title$ = this.titleSource.asObservable();
  changeTitle(title){
    this.titleSource.next(title);
  }
  constructor() { }

}
