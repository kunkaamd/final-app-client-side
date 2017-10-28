import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsePostComponent } from './browse-post.component';

describe('BrowsePostComponent', () => {
  let component: BrowsePostComponent;
  let fixture: ComponentFixture<BrowsePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
