import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BokkImageComponent } from './bokk-image.component';

describe('BokkImageComponent', () => {
  let component: BokkImageComponent;
  let fixture: ComponentFixture<BokkImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BokkImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BokkImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
