import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritageDetailsComponent } from './heritage-details.component';

describe('HeritageDetailsComponent', () => {
  let component: HeritageDetailsComponent;
  let fixture: ComponentFixture<HeritageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeritageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeritageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
