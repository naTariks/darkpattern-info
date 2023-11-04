import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtenCarouselComponent } from './arten-carousel.component';

describe('ArtenCarouselComponent', () => {
  let component: ArtenCarouselComponent;
  let fixture: ComponentFixture<ArtenCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtenCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtenCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
