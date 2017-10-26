import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMyPostComponent } from './list-my-post.component';

describe('ListMyPostComponent', () => {
  let component: ListMyPostComponent;
  let fixture: ComponentFixture<ListMyPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMyPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
