import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeritageImageGalleryComponent } from './heritage-image-gallery.component';

describe('HeritageImageGalleryComponent', () => {
  let component: HeritageImageGalleryComponent;
  let fixture: ComponentFixture<HeritageImageGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeritageImageGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeritageImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
