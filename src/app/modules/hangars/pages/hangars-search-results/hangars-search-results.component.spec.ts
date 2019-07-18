import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangarsSearchResultsComponent } from './hangars-search-results.component';

describe('HangarsSearchResultsComponent', () => {
  let component: HangarsSearchResultsComponent;
  let fixture: ComponentFixture<HangarsSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangarsSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangarsSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
