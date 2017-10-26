import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOfSeriesComponent } from './post-of-series.component';

describe('PostOfSeriesComponent', () => {
  let component: PostOfSeriesComponent;
  let fixture: ComponentFixture<PostOfSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostOfSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOfSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
