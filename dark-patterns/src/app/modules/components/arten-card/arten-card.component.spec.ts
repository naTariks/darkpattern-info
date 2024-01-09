import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtenCardComponent } from './arten-card.component';

describe('ArtenCardComponent', () => {
  let component: ArtenCardComponent;
  let fixture: ComponentFixture<ArtenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtenCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
