import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOfTagComponent } from './post-of-tag.component';

describe('PostOfTagComponent', () => {
  let component: PostOfTagComponent;
  let fixture: ComponentFixture<PostOfTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOfTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOfTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
