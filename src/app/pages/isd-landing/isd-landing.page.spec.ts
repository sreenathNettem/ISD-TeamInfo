import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsdLandingPage } from './isd-landing.page';

describe('IsdLandingPage', () => {
  let component: IsdLandingPage;
  let fixture: ComponentFixture<IsdLandingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsdLandingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsdLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
