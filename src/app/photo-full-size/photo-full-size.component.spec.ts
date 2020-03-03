import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoFullSizeComponent } from './photo-full-size.component';

describe('PhotoFullSizeComponent', () => {
  let component: PhotoFullSizeComponent;
  let fixture: ComponentFixture<PhotoFullSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoFullSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoFullSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
