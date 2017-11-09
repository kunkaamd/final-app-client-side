import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPostOfUserComponent } from './list-post-of-user.component';

describe('ListPostOfUserComponent', () => {
  let component: ListPostOfUserComponent;
  let fixture: ComponentFixture<ListPostOfUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPostOfUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPostOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
