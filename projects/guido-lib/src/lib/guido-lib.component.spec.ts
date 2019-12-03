import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidoLibComponent } from './guido-lib.component';

describe('GuidoLibComponent', () => {
  let component: GuidoLibComponent;
  let fixture: ComponentFixture<GuidoLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidoLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidoLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
