import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangarFormComponent } from './hangar-form.component';

describe('HangarFormComponent', () => {
  let component: HangarFormComponent;
  let fixture: ComponentFixture<HangarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
