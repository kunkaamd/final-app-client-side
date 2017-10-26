import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSignupSigninComponent } from './tab-signup-signin.component';

describe('TabSignupSigninComponent', () => {
  let component: TabSignupSigninComponent;
  let fixture: ComponentFixture<TabSignupSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabSignupSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSignupSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
